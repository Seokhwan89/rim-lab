#!/usr/bin/env python3
"""Preserve RIM Lab website visitor numbers beyond Vercel's 1-month reporting window.

Vercel Hobby keeps Web Analytics for only 1 month, so this script copies the daily
numbers into the repo (docs/analytics/visitors.json) before they expire, and rewrites
the human-readable report (docs/analytics/visitors.md).

For every day that had at least one page view it also keeps the day's top pages,
referrer sites and countries (up to 10 each), so the monthly breakdowns survive too.

Usage:
    VERCEL_TOKEN=xxx python3 scripts/snapshot-analytics.py [--days 40]

The token needs read access to the 'sogang-me' team. Create one at
https://vercel.com/account/tokens and store it as the VERCEL_TOKEN environment
variable (never commit it — this repository is public).

Safe to run repeatedly: days already recorded are never overwritten (a recorded day
that still lacks breakdowns gets them filled in while Vercel still has the data), so a
late or duplicated run cannot lose or corrupt history.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone

COUNT_API = "https://api.vercel.com/v1/query/web-analytics/visits/count"
AGG_API = "https://api.vercel.com/v1/query/web-analytics/visits/aggregate"
PROJECT = "rim-lab"
TEAM_SLUG = "sogang-me"
KST = timezone(timedelta(hours=9))
UTC = timezone.utc  # Vercel buckets visitors/pageviews by UTC day; sub-day ranges are snapped to UTC days
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT, "docs", "analytics", "visitors.json")
MD_PATH = os.path.join(ROOT, "docs", "analytics", "visitors.md")
TOP_N = 10
# JSON key → (Vercel dimension, report heading)
BREAKDOWNS = {
    "pages": ("requestPath", "상위 페이지"),
    "referrers": ("referrerHostname", "유입 사이트"),
    "countries": ("country", "국가"),
}


def _get(token: str, url: str, params: list[tuple[str, str | int]], day: datetime) -> dict | None:
    req = urllib.request.Request(
        f"{url}?{urllib.parse.urlencode(params)}",
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", "ignore")[:200]
        if e.code in (401, 403):
            sys.exit(f"인증 실패 ({e.code}). VERCEL_TOKEN이 'sogang-me' 팀 조회 권한을 가지는지 확인하세요.\n{detail}")
        print(f"  {day:%Y-%m-%d}: HTTP {e.code} {detail}", file=sys.stderr)
        return None
    except Exception as e:  # network hiccup — skip, a later run fills it in
        print(f"  {day:%Y-%m-%d}: {type(e).__name__} {e}", file=sys.stderr)
        return None


def _day_range(day: datetime) -> tuple[int, int]:
    start = day.replace(hour=0, minute=0, second=0, microsecond=0, tzinfo=UTC)
    end = start + timedelta(days=1)
    return int(start.timestamp() * 1000), int(end.timestamp() * 1000)


def fetch_day(token: str, day: datetime) -> dict | None:
    """Return {'visitors': n, 'pageviews': n} for one UTC calendar day, or None."""
    since, until = _day_range(day)
    body = _get(token, COUNT_API, [("projectId", PROJECT), ("slug", TEAM_SLUG), ("since", since), ("until", until)], day)
    data = (body or {}).get("data") or {}
    if "visitors" not in data:
        return None
    return {"visitors": int(data.get("visitors") or 0), "pageviews": int(data.get("pageviews") or 0)}


def fetch_breakdown(token: str, day: datetime, dimension: str) -> dict[str, list[int]] | None:
    """Return {label: [visitors, pageviews]} for the top entries of one dimension on one day."""
    since, until = _day_range(day)
    body = _get(
        token, AGG_API,
        [("projectId", PROJECT), ("slug", TEAM_SLUG), ("by", dimension), ("since", since), ("until", until), ("limit", TOP_N)],
        day,
    )
    if body is None:
        return None
    out: dict[str, list[int]] = {}
    for row in (body.get("data") or []):
        label = row.get(dimension)
        if label is None:
            continue
        label = str(label) or "(direct)"  # empty referrer = typed/bookmarked/app link
        out[label] = [int(row.get("visitors") or 0), int(row.get("pageviews") or 0)]
    return out


def fetch_breakdowns(token: str, day: datetime) -> dict[str, dict[str, list[int]]] | None:
    result = {}
    for key, (dimension, _) in BREAKDOWNS.items():
        got = fetch_breakdown(token, day, dimension)
        if got is None:
            return None  # partial breakdowns would look complete; retry whole day next run
        result[key] = got
    return result


def write_report(days: dict) -> None:
    months: dict[str, dict] = {}
    for d, v in days.items():
        m = months.setdefault(d[:7], {"visitors": 0, "pageviews": 0, "days": 0, **{k: {} for k in BREAKDOWNS}})
        m["visitors"] += v["visitors"]
        m["pageviews"] += v["pageviews"]
        m["days"] += 1
        for key in BREAKDOWNS:
            for label, (_, pv) in (v.get(key) or {}).items():
                m[key][label] = m[key].get(label, 0) + pv

    today = datetime.now(KST)
    recent = sorted(days.items(), reverse=True)[:31]
    lines = [
        "# RIM Lab 홈페이지 방문 통계",
        "",
        "Vercel Web Analytics(쿠키 미사용)의 수치를 월 2회 이 파일에 보존한다.",
        "무료 플랜은 최근 1개월만 조회되므로, 이 파일이 장기 기록의 원본이다.",
        f"집계 시작: 2026-10-29 (Vercel Web Analytics 활성화일 — 그 이전은 데이터 없음) · 최종 갱신: {today:%Y-%m-%d}",
        "날짜는 UTC 기준(한국시간 09:00 ~ 다음날 09:00). Vercel이 방문자를 UTC 하루 단위로 세기 때문이다.",
        "",
        "## 월별 합계",
        "",
        "| 월 | 방문자 | 페이지뷰 | 집계일수 |",
        "|---|---:|---:|---:|",
    ]
    for m in sorted(months, reverse=True):
        v = months[m]
        lines.append(f"| {m} | {v['visitors']:,} | {v['pageviews']:,} | {v['days']} |")

    for m in sorted(months, reverse=True):
        v = months[m]
        if v["pageviews"] == 0:
            continue
        lines += ["", f"## {m} 상세 (페이지뷰 기준, 일별 상위 {TOP_N}개 합산)"]
        for key, (_, heading) in BREAKDOWNS.items():
            top = sorted(v[key].items(), key=lambda kv: -kv[1])[:TOP_N]
            if not top:
                continue
            lines += ["", f"### {heading}", "", f"| {heading} | 페이지뷰 |", "|---|---:|"]
            for label, pv in top:
                lines.append(f"| {label} | {pv:,} |")

    lines += ["", "## 최근 31일", "", "| 날짜 | 방문자 | 페이지뷰 | 상위 페이지 |", "|---|---:|---:|---|"]
    for d, v in recent:
        pages = sorted((v.get("pages") or {}).items(), key=lambda kv: -kv[1][1])[:3]
        pages_txt = ", ".join(f"{p} ({pv})" for p, (_, pv) in pages)
        lines.append(f"| {d} | {v['visitors']:,} | {v['pageviews']:,} | {pages_txt} |")
    lines += ["", "원본 데이터: `docs/analytics/visitors.json` · 수집 스크립트: `scripts/snapshot-analytics.py`", ""]
    with open(MD_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=40, help="how many past days to sweep (default 40)")
    args = ap.parse_args()

    token = os.environ.get("VERCEL_TOKEN")
    if not token:
        sys.exit(
            "VERCEL_TOKEN 환경변수가 없습니다.\n"
            "  1) https://vercel.com/account/tokens 에서 토큰 생성 (Scope: sogang-me 팀)\n"
            "  2) Claude Code 환경 변수에 VERCEL_TOKEN 으로 등록\n"
            "토큰은 절대 이 리포지토리에 커밋하지 마세요 (공개 저장소)."
        )

    os.makedirs(os.path.dirname(JSON_PATH), exist_ok=True)
    try:
        with open(JSON_PATH, encoding="utf-8") as f:
            store = json.load(f)
    except FileNotFoundError:
        store = {"days": {}}
    store["note"] = (
        "Daily visitor counts preserved from Vercel Web Analytics (UTC calendar days = KST 09:00 to next 09:00). "
        "Days with page views also keep top pages / referrers / countries as {label: [visitors, pageviews]}."
    )
    days: dict[str, dict] = store.setdefault("days", {})

    today = datetime.now(UTC).replace(hour=0, minute=0, second=0, microsecond=0)
    added = skipped = enriched = 0
    for i in range(1, args.days + 1):  # yesterday (UTC) backwards; today is still partial
        day = today - timedelta(days=i)
        key = f"{day:%Y-%m-%d}"
        in_window = (today - day).days <= 31
        if key in days:  # counts already preserved — never overwrite
            skipped += 1
            rec = days[key]
            if rec.get("pageviews", 0) > 0 and "pages" not in rec and in_window:
                got = fetch_breakdowns(token, day)
                if got is not None:
                    rec.update(got)
                    enriched += 1
            continue
        got = fetch_day(token, day)
        if got is None:
            continue
        if got["pageviews"] == 0 and not in_window:
            continue  # outside the reporting window: a zero here means "expired", not "no visitors"
        if got["pageviews"] > 0:
            bd = fetch_breakdowns(token, day)
            if bd is not None:
                got.update(bd)
        days[key] = got
        added += 1

    store["days"] = dict(sorted(days.items()))
    store["updated"] = f"{datetime.now(KST):%Y-%m-%d %H:%M KST}"
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(store, f, ensure_ascii=False, indent=1)
        f.write("\n")
    write_report(days)

    total = sum(v["visitors"] for v in days.values())
    print(f"새로 기록한 날: {added}일 · 기존 보존: {skipped}일 · 상세 보강: {enriched}일 · 누적 방문자 {total:,}명")
    print(f"→ {os.path.relpath(JSON_PATH, ROOT)}, {os.path.relpath(MD_PATH, ROOT)}")


if __name__ == "__main__":
    main()

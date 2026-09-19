#!/usr/bin/env python3
"""Preserve RIM Lab website visitor numbers beyond Vercel's 1-month reporting window.

Vercel Hobby keeps Web Analytics for only 1 month, so this script copies the daily
numbers into the repo (docs/analytics/visitors.json) before they expire, and rewrites
the human-readable report (docs/analytics/visitors.md).

Usage:
    VERCEL_TOKEN=xxx python3 scripts/snapshot-analytics.py [--days 40]

The token needs read access to the 'sogang-me' team. Create one at
https://vercel.com/account/tokens and store it as the VERCEL_TOKEN environment
variable (never commit it — this repository is public).

Safe to run repeatedly: days already recorded are never overwritten, so a late or
duplicated run cannot lose or corrupt history.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone

API = "https://api.vercel.com/v1/query/web-analytics/visits/count"
PROJECT = "rim-lab"
TEAM_SLUG = "sogang-me"
KST = timezone(timedelta(hours=9))
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT, "docs", "analytics", "visitors.json")
MD_PATH = os.path.join(ROOT, "docs", "analytics", "visitors.md")


def fetch_day(token: str, day: datetime) -> dict | None:
    """Return {'visitors': n, 'pageviews': n} for one Korean calendar day, or None."""
    start = day.replace(hour=0, minute=0, second=0, microsecond=0, tzinfo=KST)
    end = start + timedelta(days=1) - timedelta(milliseconds=1)
    qs = urllib.parse.urlencode({
        "projectId": PROJECT,
        "slug": TEAM_SLUG,
        "since": int(start.timestamp() * 1000),
        "until": int(end.timestamp() * 1000),
    })
    req = urllib.request.Request(
        f"{API}?{qs}",
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            body = json.load(r)
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", "ignore")[:200]
        if e.code in (401, 403):
            sys.exit(f"인증 실패 ({e.code}). VERCEL_TOKEN이 'sogang-me' 팀 조회 권한을 가지는지 확인하세요.\n{detail}")
        print(f"  {day:%Y-%m-%d}: HTTP {e.code} {detail}", file=sys.stderr)
        return None
    except Exception as e:  # network hiccup — skip this day, a later run fills it in
        print(f"  {day:%Y-%m-%d}: {type(e).__name__} {e}", file=sys.stderr)
        return None
    data = body.get("data") or {}
    if "visitors" not in data:
        return None
    return {"visitors": int(data.get("visitors") or 0), "pageviews": int(data.get("pageviews") or 0)}


def write_report(days: dict) -> None:
    months: dict[str, dict[str, int]] = {}
    for d, v in days.items():
        m = months.setdefault(d[:7], {"visitors": 0, "pageviews": 0, "days": 0})
        m["visitors"] += v["visitors"]
        m["pageviews"] += v["pageviews"]
        m["days"] += 1

    today = datetime.now(KST)
    recent = sorted(days.items(), reverse=True)[:31]
    lines = [
        "# RIM Lab 홈페이지 방문 통계",
        "",
        "Vercel Web Analytics(쿠키 미사용)의 수치를 월 1회 이 파일에 보존한다.",
        "무료 플랜은 최근 1개월만 조회되므로, 이 파일이 장기 기록의 원본이다.",
        f"집계 시작: 2026-09-19 (그 이전은 분석 도구 미설치로 데이터 없음) · 최종 갱신: {today:%Y-%m-%d}",
        "",
        "## 월별 합계",
        "",
        "| 월 | 방문자 | 페이지뷰 | 집계일수 |",
        "|---|---:|---:|---:|",
    ]
    for m in sorted(months, reverse=True):
        v = months[m]
        lines.append(f"| {m} | {v['visitors']:,} | {v['pageviews']:,} | {v['days']} |")
    lines += ["", "## 최근 31일", "", "| 날짜 | 방문자 | 페이지뷰 |", "|---|---:|---:|"]
    for d, v in recent:
        lines.append(f"| {d} | {v['visitors']:,} | {v['pageviews']:,} |")
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
        store = {"note": "Daily visitor counts preserved from Vercel Web Analytics (Korean calendar days).", "days": {}}
    days: dict[str, dict[str, int]] = store.setdefault("days", {})

    today = datetime.now(KST).replace(hour=0, minute=0, second=0, microsecond=0)
    added = skipped = 0
    for i in range(1, args.days + 1):  # yesterday backwards; today is still partial
        day = today - timedelta(days=i)
        key = f"{day:%Y-%m-%d}"
        if key in days:  # already preserved — never overwrite
            skipped += 1
            continue
        got = fetch_day(token, day)
        if got is None:
            continue
        if got["pageviews"] == 0 and (today - day).days > 31:
            continue  # outside the reporting window: a zero here means "expired", not "no visitors"
        days[key] = got
        added += 1

    store["days"] = dict(sorted(days.items()))
    store["updated"] = f"{datetime.now(KST):%Y-%m-%d %H:%M KST}"
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(store, f, ensure_ascii=False, indent=1)
        f.write("\n")
    write_report(days)

    total = sum(v["visitors"] for v in days.values())
    print(f"새로 기록한 날: {added}일 · 기존 보존: {skipped}일 · 누적 방문자 {total:,}명")
    print(f"→ {os.path.relpath(JSON_PATH, ROOT)}, {os.path.relpath(MD_PATH, ROOT)}")


if __name__ == "__main__":
    main()

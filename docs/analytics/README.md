# 방문 통계 보존 (Vercel Web Analytics)

홈페이지 방문자 수는 Vercel Web Analytics로 집계된다(쿠키 미사용 → 동의 배너 불필요).
**무료 플랜은 최근 1개월만 조회**되므로, 사라지기 전에 이 폴더로 옮겨 장기 기록을 만든다.

| 파일 | 내용 |
|---|---|
| `visitors.json` | 일별 방문자·페이지뷰 원본 (한국 날짜 기준) |
| `visitors.md` | 사람이 읽는 월별·일별 표 |

## 자동 수집

매월 1일·16일 09:07 KST에 Claude 세션이 자동으로 실행한다
(Routine "RIM Lab 방문통계 스냅샷"). 한 번 놓쳐도 구멍이 생기지 않도록 월 2회로 잡았고,
스크립트는 이미 기록된 날짜를 절대 덮어쓰지 않으므로 여러 번 실행해도 안전하다.

수동 실행:

```bash
VERCEL_TOKEN=xxx python3 scripts/snapshot-analytics.py --days 40
```

## 최초 1회 설정 (교수 직접)

1. https://vercel.com/account/tokens 에서 토큰 생성 — Scope는 **sogang-me** 팀, 만료는 길게.
2. Claude Code 환경 변수에 `VERCEL_TOKEN` 으로 등록
   (claude.ai/code → 환경 설정 → Environment Variables).
3. ⚠️ 토큰을 이 리포지토리에 커밋하지 말 것 — 공개 저장소다.

토큰이 없으면 스크립트가 안내 문구를 내고 멈추며, 자동 실행 세션은 교수에게 알린다.

## 집계 범위

- 2026-09-19부터. 그 이전(리뉴얼~9/18)은 분석 도구가 없었으므로 데이터가 존재하지 않는다.
- 검색엔진·AI 크롤러는 robots.txt로 차단돼 있고 이 방식은 자바스크립트를 실행하는
  실제 브라우저만 세므로, 수치는 사람 방문에 가깝다.

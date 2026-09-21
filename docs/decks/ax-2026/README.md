# AX대학원 입학설명회 — RIM Lab 연구실 소개 덱 (2026.09)

2026년 9월 AX사업단 입학설명회(9/29) 요청으로 만든 연구실 소개자료 10장.
내용은 전부 이 리포의 `content/*.ts`에서 확인한 수치·사실만 사용했다.

## 재생성

```bash
cd docs/decks/ax-2026
python3 make-images.py          # public/images/*.webp -> img/*.jpg (PPTX는 WebP를 못 넣는다)
npm install pptxgenjs playwright # 컨테이너에 없으면
node build.js                   # -> RIM_Lab_연구실소개.pptx + preview.html
node pdf.js                     # -> RIM_Lab_연구실소개.pdf (HTML 트윈을 인쇄)
node qa-overflow.js             # 텍스트 넘침/페이지 이탈 검사 + slide-NN.png 스크린샷
```

산출물(pptx/pdf/jpg/png)은 커밋하지 않는다 — 위 명령으로 언제든 다시 만든다.

## 구조

- `content.json` — 슬라이드 문구와 발표 노트. **내용 수정은 이 파일만 고친다.**
- `render.js` — 장면 그래프 → PPTX(pptxgenjs) + HTML 트윈. 색·폰트 상수가 여기 있다.
- `layout.js` — 슬라이드별 레이아웃 10종. 표지/개요/4축/이미지+불릿×3/그리드/실적/구성/진로.
- `build.js`, `pdf.js`, `qa-overflow.js` — 빌드·PDF·QA.

## 이 컨테이너의 제약

LibreOffice(`soffice`)가 어떤 파일도 변환하지 못한다(2026-09-21 확인). 그래서
`render.js`가 같은 좌표로 HTML 트윈을 함께 그리고, Playwright/Chromium으로
스크린샷을 떠서 눈으로 검수한다. PDF도 LibreOffice가 아니라 이 HTML을 인쇄해 만든다.
한글 렌더링에는 Noto Sans KR이 필요하다(`~/.fonts` + `fc-cache`).
PPTX 본문 폰트는 Windows PowerPoint에 기본 탑재된 맑은 고딕을 쓴다.

## 교수 확인이 필요했던 항목

- 설명회 주최는 **AX대학원**인데 리포(`app/opening/page.tsx`)는 `AI Graduate School /
  AI Convergence Program`으로 적혀 있다. 같은 과정의 개명인지 확인 후 10쪽 문구를 맞춘다.
  현재는 모집 인원을 적지 않고 "AI융합 대학원 과정 — 2027-1·2"로만 표기했다.
- 10쪽의 NRF 소재글로벌영커넥트 35억은 **컨소시엄 총액**(주관 서강대)이다.
  발표 중 "연구실 연구비 35억"으로 말하면 과장이 된다.
- 2027년 풀브라이트 UC Riverside 파견 기간의 지도 방식은 자료에 근거가 없어 넣지 않았다.
  설명회 Q&A에서 나올 가능성이 높다.

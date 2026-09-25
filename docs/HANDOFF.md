# 작업 인수인계 (세션 간 컨텍스트)

> 새 세션은 CLAUDE.md의 작업 규칙을 따르고, 이 문서로 진행 상황을 파악한다.
> 완료된 항목을 처리하면 이 문서를 갱신하고 함께 커밋한다.

_최종 갱신: 2026-09-23 (T-ASE 게재 반영 · MEE1006 강의 개설 세션)_

## 완료된 것

- 유튜브 영상 전수 배치 (2026-09-25): 채널 공개 영상 24편(강의 영상 6편 제외) +
  재생목록·논문 영상을 연구 페이지 Demonstrations에 모두 배치(31편, oEmbed 전부 200).
  DDD Gripper는 Robotic Hands·AI Grasping 양쪽. 조지아텍 시절 영상(COAST, 소아
  신경외과 도구, FLEXotendon Glove-II/III, 흡착컵 외골격)은 영상별 `note`로
  "Work performed at Georgia Tech (Desai Lab) · © 연도 IEEE"를 제목 아래 표시(IEEE
  영상 게시 원칙), KAIST 박사과정 영상은 "Ph.D. work at KAIST". 하지 외골격·광학
  힘센서 페이지는 해당 영상이 채널에 없어 비어 있음. 새 영상이 올라오면
  projects.ts videos에 추가하고 GT/IEEE 영상이면 note를 달 것.

- 메인 히어로에 '최신 소식 5개' 패널 (2026-09-25, 학과 홈페이지 방식): 버튼 아래
  Latest News 박스 — news.ts 앞에서 5개(전 카테고리), 제목·카테고리 칩·날짜,
  클릭 시 /news#<앵커>로 해당 카드까지 이동(content/news.ts `newsAnchor`, News
  카드에 id). ⚠️ 테마 색은 CSS 변수(`var(--rim-line)` 등)라 Tailwind 투명도 수식어
  (`divide-rim-line/70`, `border-rim-line/60`, `bg-rim-cyan/10` …)는 **CSS가 생성되지
  않는다** → 테두리가 기본 회백색(#e5e7eb)으로 튄다. rim-line 자체가 이미 반투명이니
  수식어 없이 쓸 것. 이번에 강의 목록·졸업생 표의 흰 구분선도 같이 고침.

- 메일함 소식 반영 (2026-09-25, 교수 선택 1·3·4·5 + arXiv): ①News — 표진우
  (Ginwoo Pyo) 한국연구재단 박사과정생 연구장려금 선정(2026.09–2028.08,
  5천만 원; 학생이 쓴 학과 게시 문구 근거). ②patents.ts COAST — 미국 등록
  US 12,752,086(USPTO Issue Notification, 발행일 2026-10-06). ③advisor.ts —
  ICRA 2027 AE, KRoC 2027 조직위. ④publications.ts — 김도영 외 arXiv
  2609.29031 "Simple Torque-Observation Alignment …"(RA-L 투고 중, 교수가 직접
  arXiv 등록), 대표 figure는 arXiv 원고 figure1을 WebP로. ⑤CV에 ③ 두 줄 추가는
  PC 브릿지 task-005 — **완료 확인**(Drive PDF 2026-09-25 수정본에 두 줄 +
  "September 25, 2026"). 보류: ㈜아이디티 기술이전·RISE 실용화 사업(계약 체결
  후 함께), 10/21 기술설명회(공개 전 특허라 게시 안 함).
  **추가 (2026-09-25, "1245 반영하고 3번도 지금")**: ⑥산학 프로젝트 챌린지
  본선 진출 뉴스는 올렸다가 교수 지시("내가 실수했네")로 **당일 삭제** — 교수가
  다시 지시하기 전에는 게시하지 않는다. ⑦CV 미국 특허 줄 "US17/919,763 (approved)" → "US12,752,086B2, (2026.10.6)"을
  10/6 기다리지 않고 지금 브릿지 task-006으로 교체(발행일 확정 통지 근거).
  send_later 예약(trig_01LePxihKCs6SPrwBGHn7Tn9, 2026-10-07 09:00 KST)은 발행
  확인 + patents.ts 비고("issues Oct 6, 2026" → 발행 완료) 갱신만 하도록 수정함.

- 새 유튜브 영상 te3rbLkJntU (2026-09-25): 김도영 외 arXiv 2609.29031 "Simple
  Torque-Observation Alignment …" 데모. AI-based Multifinger Grasping 페이지에
  DDD Gripper 다음(2번째)으로, Robotic Hands 페이지에도 같은 위치로(교수 지시), Publications 해당 항목 video 필드에 연결.

- Latest Updates (2026-09-25, 교수 지시): 히어로 박스를 뉴스 전용에서 "사이트에 올라온
  모든 것"(뉴스·논문·특허·유튜브·강의·구성원·학술활동)으로 변경. 소스는
  content/updates.ts(수동 로그, 최신순, YYYY.MM.DD) — 9/9 이후 커밋 이력으로 초기
  13건 채움. 콘텐츠 추가 시 여기 한 줄 추가하는 규칙을 CLAUDE.md에 명시.
  히어로 박스의 링크는 "All updates →"로 새 /updates 페이지(전체 목록 + 종류 필터,
  메뉴에는 없음, sitemap 포함)에 연결.

- 메인 레이아웃 (2026-09-25, 교수 지시 "학과 홈페이지 배치 참고"): Latest News 박스를
  히어로 오른쪽 칼럼(lg 이상 360px, 모바일은 버튼 아래)으로 옮기고 항목을 제목 +
  [카테고리 칩 · 날짜] 한 줄로 압축, "All news →"는 박스 머리에. 히어로 제목은
  lg에서 2.75rem, xl 이상 3.6rem. Research 영역 카드("길이 줄여줘")는 아이콘·제목을
  한 줄로, 패딩·간격·섹션 여백(py-24→16) 축소, 제목 한 줄.

- 지원서(Google Form) 노출 강화 (2026-09-24): 교수가 리뉴얼 후 국내 지원서 제출이
  줄었다고 함. forms-receipts 알림 메일 집계(월별 응답): 2월 19 · 3월 11 · 4월 11 ·
  5월 6 · 6월 8 · 7월 4 · 8월 3(리뉴얼 후 1) · 9월 2(~9/24). 감소는 리뉴얼 전(봄)부터
  시작됐지만, 학기 초인 9월이 2월(19건)과 달리 바닥인 점이 이상 신호. 조치:
  ①`components/ApplyCard.tsx`로 How-to-apply 블록 공용화 — Opening 최상단 +
  메인 Join Us 섹션(기존엔 페이지 맨 끝 한 줄 텍스트 링크뿐이었음). ②(Opening 히어로의 지원서
  버튼은 교수 지시로 제거 — 카드 하나만 둠. PageHero `actions` prop은 남겨 둠.) ③메인 히어로의 "Join the Lab" 버튼을
  "Apply · 지원서 작성"(→ /opening)으로 교체(교수 지시로 제목 위 필은 제거). ④버튼 라벨에 '지원서' 한글 병기.
  ⑤메인 Intern 카드의 "Short- and long-term research internships" 문구가 단기 인턴
  불가 정책과 모순이라 수정. 랩미팅 담당 메일은 `site.labContact`로 이동.
  교수 측 확인 필요: 폼 제목이 5월부터 '대학원 입학 지원서'로 바뀌어(이전: '대학원
  입학 / 학부 팰로우 / 인턴 지원') 학부생이 자기 대상이 아니라고 여길 수 있음.

- T-ASE 하네스 논문 게재 반영 (2026-09-23): IEEE Xplore Early Access 공개
  (document/11701309, DOI 10.1109/TASE.2026.3735421). publications.ts는 링크를
  arXiv → Xplore로 바꾸고 note를 'Early Access on IEEE Xplore · DOI …'로,
  news.ts의 2026.09 항목은 '게재'로 갱신하고 links에 Xplore·arXiv 두 개를 달았다
  (accepted 항목을 따로 두지 않고 같은 항목을 갱신). projects.ts의 pubs 줄도 정리.
  정식 issue(volume/number/page)가 나오면 note를 그때 값으로 교체할 것.
- MEE1006 C 프로그래밍 기초 강의 개설 (2026-09-22): Week 4-2 슬라이드 업로드와
  함께 Lectures 페이지에 두 번째 과목 카드 신설. 주차제 과목을 위해 Lecture 타입에
  `label`(예 '4-2')을 추가했고, 없으면 기존처럼 `no`를 0채움해 표시한다.
  1-1 ~ 4-1 자료와 조교 정보는 교수 회신 대기.

- AX대학원 입학설명회 소개자료 (2026-09-21): AX사업단(신은영) 요청으로 연구실
  소개 PPT 10장 제작. 내용은 전부 `content/*.ts` 실측값만 사용. 생성기는
  `docs/decks/ax-2026/`에 커밋(content.json + render.js/layout.js + build/pdf/QA
  스크립트, README에 재생성 절차). 산출물 pptx/pdf/jpg는 커밋하지 않음 —
  `make-images.py` → `build.js` → `pdf.js`로 재생성한다.
  ⚠️ 발견한 사실 2가지: ①**특허는 19패밀리(등록 9·출원 10)**다. 기존에 쓰던
  "20건(등록 10)"은 patents.ts의 타입 정의 줄(`status: 'registered' | 'filed';`)이
  grep에 같이 잡힌 결과였다. 사이트 표시값도 19가 맞다.
  ②`content/projects.ts`의 factory-automation은 하네스 논문을 아직
  'under review, 2026'으로 적고 있는데 publications.ts·news.ts는 'Accepted Sep 2026'
  이다 — projects.ts 갱신 누락, 별건으로 고칠 것.
  교수 확인 대기: AX대학원 = 리포의 'AI Graduate School / AI Convergence Program'과
  같은 과정인지(같으면 10쪽에 모집 인원 3명을 되살릴 수 있다), 풀브라이트
  파견 기간(2027) 지도 방식 Q&A 답변.
  ⚠️ 이 컨테이너에서 **LibreOffice(soffice)는 모든 파일 변환에 실패**한다.
  그래서 render.js가 같은 좌표로 HTML 트윈을 그리고 Playwright로 스크린샷을 떠
  시각 검수하며, PDF도 그 HTML을 인쇄해 만든다. 다음 세션도 이 경로를 쓸 것.

- 방문 통계 장기 보존 (2026-09-19): Hobby는 조회 1개월뿐이라
  `scripts/snapshot-analytics.py`로 Vercel API(`/v1/query/web-analytics/visits/count`,
  projectId=rim-lab, slug=sogang-me)에서 일별 방문자·페이지뷰를 긁어
  `docs/analytics/visitors.{json,md}`에 누적. 이미 기록된 날은 덮어쓰지 않고,
  31일보다 오래된 0값은 '만료'로 보고 버린다(재실행 안전). Routine
  "RIM Lab 방문통계 스냅샷"이 매월 1·16일 09:07 KST에 새 세션으로 실행.
  ⚠️ `VERCEL_TOKEN` 환경변수 등록은 교수가 해야 함(vercel.com/account/tokens,
  scope sogang-me) — 미등록 시 스크립트가 안내 후 종료.
- 방문자 집계 도입 (2026-09-19): Vercel Web Analytics(@vercel/analytics)를
  app/layout.tsx에 추가. 쿠키리스라 동의 배너 불필요. 그 전에는 어떤 분석
  도구도 없었으므로 **리뉴얼~9/18 방문 기록은 소급 불가**(집계는 배포 시점
  부터). Hobby 조건: 월 5만 이벤트(초과 시 3일 유예 후 수집 중단, 7일 뒤 재개),
  **조회 기간 1개월** — 장기 추이가 필요하면 매월 스냅샷을 남기거나 GA4(무료,
  14개월 보관) 병행이 필요. 대시보드: 프로젝트 → Analytics 탭.
- Vercel 배포 저장소 75% 경고 (2026-09-17, 팀 sogang-me, 10GB 중 7.5GB):
  원인은 우리 프로젝트 — 8/20 이후 main 96회 + 작업 브랜치 프리뷰 배포, 회당
  ~70MB 산출물이 전부 보존됨. 조치: ①vercel.json으로 작업 브랜치 프리뷰
  배포 비활성화, ②교수가 프로젝트 Settings → Security → Deployment Retention
  Policy에서 Production 7일·Pre-Production/Canceled/Errored 1일로 설정(요청함),
  ③산출물 자체는 WebP 전환으로 65→34MB. 이후에도 높으면 강의 PDF(20MB)를
  별도 저장소로 분리하는 것이 다음 수단.
- 무료 한도 최적화 (2026-09-17, 기계과 사이트가 Hobby 한도 초과로 정지된
  사례 대응): Hobby 월 한도 = 전송 100GB·이미지 최적화 변환 5천·함수 100만.
  우리 사이트는 정적+YouTube라 위험은 대역폭뿐 → ①사진 218장 전부 WebP
  (긴 변 1200, q76)로 전환, 참조 223건 .jpg→.webp 일괄 치환: 43.8→12.5MB,
  News 페이지 첫 방문 34.5→2.4MB, Team 6.4→0.8MB. ②next.config headers:
  /images·/logo 30일, /lectures 1일 캐시. ③robots.txt로 AI/대량 크롤러 차단
  + /lectures 검색 제외, app/sitemap.ts 신설. 강의 PDF 압축은 교수 지시로
  보류. 원본 JPEG는 git 이력(커밋 ba2042a 이전)에 있음. Vercel Firewall의
  봇 차단은 대시보드 설정이라 교수가 켜야 함(Firewall → Bot Protection).
- COAST 가이드와이어 특허 호주 등록 반영 (2026-09-13): AU 2021259459
  (등록공고 2026-09-03, 만료 2041-04-21) — patents.ts 번호·비고 갱신.
  CV(Drive docx 30MB + PDF)는 PC 브릿지 task-004로 수정(Word COM 치환,
  같은 이름으로 PDF 덮어쓰기 → Drive id 유지). 환경 사실 3건: ①Drive
  커넥터는 10MB 초과 파일 다운로드 불가, update_file은 제목·폴더만 바꾸고
  내용 덮어쓰기 불가 → 로컬 파일 수정은 PC 브릿지 경로가 정답. ②PC 세션의
  90초 감시 루프는 죽어 있을 수 있음("Background command failed") — 교수가
  PC 세션에 "TASKS.md 다시 읽어 task-N 수행 후 감시 루프 재가동" 한 줄로
  복구됨. ③클라우드 세션 표시 이름이 'Untitled session'→'RIM Lab 홈페이지
  관리'로 바뀌어 PC는 새 이름으로 SendMessage(TASKS.md 머리말 갱신).
  ⚠️ 교수는 평소 Drive for Desktop 동기화를 **꺼 둔다**(작업 중 오류 방지).
  PC에서 G:\My Drive 파일을 고친 뒤에는 교수가 동기화를 잠시 켜야 클라우드
  Drive(홈페이지 링크)에 반영되므로, 브릿지 결과 검증 전 동기화 요청 필수.
- 전수 점검 (2026-09-04): 17개 페이지 데스크톱·모바일 렌더, 내부 자산
  220건·외부 링크 85건·유튜브 ID 30건·콘텐츠 참조 222건 검사. 수정 5건 —
  ①구글 스칼라 ID 오류(Vd9OOGIAAAAJ→_e2qTHcAAAAJ, 옛 ID는 404),
  ②푸터 기계공학과 링크 mech.sogang.ac.kr(도메인 소멸)→me.sogang.ac.kr,
  ③송한결 풀브라이트 뉴스의 서강대 게시판 링크 404→scc.sogang.ac.kr 기사,
  ④Team 모바일 10px 가로 넘침(긴 이메일 nowrap이 grid 최소폭을 키움 →
  MemberCard Reveal에 min-w-0), ⑤News·Publications가 클라이언트 컴포넌트라
  <title>이 기본값이던 것 → app/news·publications/layout.tsx에 metadata.
  참고: 컨테이너 Chromium은 i.ytimg.com 등 외부 TLS가 리셋되므로 유튜브
  썸네일 '깨짐'은 환경 문제(oEmbed로 30편 전부 유효 확인). Sage/Elsevier/
  Wiley 403은 봇 차단이며 DOI 해석 정상.
- Lectures 섹션 신설(2026-09-01): 메뉴 맨 뒤 'Lectures' 추가.
  content/lectures.ts(과목·강의 데이터) + app/lectures/page.tsx.
  MEE4033 Mechatronics(Fall 2026) Lecture 1 게시. 매 강의 후 교수가 PDF를
  올리면 public/lectures/mee4033-fall-2026/lecture-NN-<slug>.pdf 저장 후
  lectures.ts에 {no,title,date,file,pages,size} 추가만 하면 됨.
- 사이트 구축·배포: main push → Vercel 자동 배포 (https://rim-lab.vercel.app)
- **도메인 rim.sogang.ac.kr 연결 완료(2026-08-31)**: 8/29 디지털정보처
  김현일 선생님께 DNS 변경 신청 → 8/31 오전 "변경 완료" 회신. 8/31 10:37
  기준 CNAME → 728b851d8e151a2a.vercel-dns-017.com, _vercel TXT
  (vc-domain-verify) 등록 확인, Vercel Domains 두 도메인 모두 Valid
  Configuration, https://rim.sogang.ac.kr 이 새 홈페이지를 HTTPS로 정상
  서빙(HTTP/2 200, server: Vercel). 일부 리졸버(dns.google 등)엔 옛
  ghs.googlehosted.com 캐시가 최대 수 시간 남아 있을 수 있음(정상).
  예약했던 재확인 Routine은 삭제함.
- 히어로: YouTube Research 재생목록(PLAUadnYJsReuafzkvid6k_3qI1vjicdvk)에서
  영상 목록을 받아 셔플 → 랜덤 구간 10초씩 더블버퍼 크로스페이드 재생
  (components/HeroVideo.tsx, 구간 고정은 content/videos.ts heroHighlights)
- 특허: CV(2026.08 지원서) 기준 18개 패밀리 content/patents.ts +
  Publications 페이지 Patents 탭 + 각 연구 프로젝트 페이지에 표시
- 논문: video 필드(유튜브 ID/URL/사이트 경로) + image(대표 figure) +
  videoThumb 필드 지원. 유튜브 영상은 옛 홈페이지 전수 대조를 마쳤고
  대표 figure는 43편 전편에 연결됨
- 사진: 드라이브 6장(교수 증명사진, 랩 단체사진, 연구실 공간·장비 3장,
  KROS 수상식) + 옛 홈페이지 이관분 — public/images/
- 자동화: 매주 월 09:00 KST Routine "RIM Lab weekly news update"
  (trig_01FjM6GumiF94pdYYDCiDZdQ) — Gmail 스캔 → PR 제안. 첫 실행 시
  Gmail 커넥터가 안 붙어 있으면 claude.ai Routines 설정에서 붙여야 함
- 옛 홈페이지 이미지 이관 (2026-08-30): 구 사이트에서 299장을 수집해
  실제 사용분만 커밋. 멤버 개별사진 26장(PI는 기존 드라이브 원본 유지),
  뉴스 25장, 논문 대표 figure 41편 전편, 연구 프로젝트 대표 그림 9개.
  `Project`에 `image`/`imageCaption` 필드와 상세 페이지 렌더링 추가,
  Alumni 표에 얼굴 사진 칸 추가
- Alumni 전수 검증 완료: 옛 team 페이지와 content/team.ts가 재학생 15명·
  alumni 10명 전원 일치 (Samuel Mekonnen 소속만 여전히 교수 확인 대기)
- 논문–영상 오배정 5건 교정 (YouTube oEmbed 제목 대조로 확인):
  RIM Hand는 프로토타이핑 클립(4oIh14FL_44) → 논문 영상(9866GYPbY-E),
  Magnetic Gear Actuator(RA-L 2023)는 HTXwTqTGt8E → 64h1yNFKHZI,
  HTXwTqTGt8E는 원 주인인 Glove-II Suction Cups(RA-L 2020)로 이동,
  2-Speed dog clutch(RA-L 2018)는 RxmGPmoC-yg → 전용 영상 Y1uceDzhjKY,
  AIS 2024 모듈러 플랫폼은 잘못 붙은 영상 제거(원본은 Wiley 부록 zip)
- 누락 논문 1편 추가: Ultra-Low-Impedance Robotic Gripper
  (J. Lee, A. Choi, S. Jeong*, arXiv 2608.09198, ICRA 2027 LBR)

- 2차 이관 (2026-08-30): /news 118장을 전량 재수집(구글 이미지 URL은
  단기 서명형 — 페이지 HTML 수신 직후 즉시 받으면 됨, 1.3~1.6초 간격이면
  403 없음). 지각해시로 기존 84장과 대조해 신규 37장 식별, 눈으로 확인된
  것만 반영. 뉴스 `images[]` 다중 사진 필드 신설(19개 항목 갤러리),
  미배정 10장은 public/images/news/unmatched/ (2021~2022 항목 부재분)
- Lab & Facilities: 옛 team 페이지에서 장비 6종+Workspace 2·3을 원본
  화질(w1600)로 재수집해 Equipment 섹션 신설
- Advisor: 옛 사이트 프로필 사진으로 교체(seokhwan-jeong-portrait.jpg),
  콘텐츠를 CV(Drive, 2026.05.24) 기준으로 전면 동기화 — 학술활동·수상
  전체 목록 반영. 단 ICRA 2026 AE는 CV에 없어 제외(옛 사이트에는 있었음,
  교수 확인 필요)
- 연구비: CV 연구비 목록 전체를 projects.ts funding에 배분, 뉴스 Grant
  3건 추가(KEITI 환경부 2026.07 킥오프, 대하전선 2022.04, 그린벤처
  이큐브랩 2022.04 — 협약 메일 확인)
- 링크: 프로젝트 페이지 논문(제목 매칭→링크)·특허(Google Patents) 클릭
  가능, Publications Patents 탭에도 link/image 렌더
- 특허 대표도 1건: 준직구동 로봇핸드 — Drive의 P2026-0084DE 출원서류에서
  Fig.1 추출(/images/patents/quasi-direct-drive-hand.jpg)

- 메인 유튜브 섹션 (2026-08-30): 대표 대형 2개(featuredVideos[0..1],
  교수가 바꾸라고 할 때만 변경)는 유지하고, 그 아래에 Research 재생목록
  전체를 그리드로 표시. 목록은 빌드 시 lib/playlist.ts가 유튜브
  innertube(공개 웹 키, browseId=VL<재생목록ID>)로 받아오며 — 새
  lockupViewModel/구 playlistVideoRenderer 두 구조 모두 파싱 — 실패 시
  RSS(15개)→content/videos.ts의 playlistSnapshot 순으로 폴백. 매 배포
  시점에 갱신되므로 주간 Routine 배포로 새 영상이 자동 반영됨.
- 프로젝트 상세 페이지 리디자인 (2026-08-30): 논문 프로젝트 페이지 스타일 —
  Overview(2단: 요약+티저 figure) / Highlights / Demonstrations /
  **Representative Publications를 figure 썸네일+저자+저널+Paper·Video 버튼
  카드 그리드**로(pubs 문자열을 publications.ts와 fuzzy 매칭해 전체 서지
  표시, 미매칭 시 텍스트 폴백) / Patents·Funding 2단 카드 / Prev·Next.
- Advisor 프로필 사진을 상반신 크기(md:w-72)로 확대. CV(Drive 공개 링크)
  'Curriculum Vitae' 버튼을 Advisor 연락처 아래 추가.
- Team 멤버 카드 얼굴 사진 확대(h-14→h-20, object-top).

- 뉴스 이미지 표시 규칙 (2026-08-30, v2): components/NewsImages.tsx —
  갤러리는 캔버스 휘도 샘플로 '문서(상장·스캔)'와 '일반 사진'을 구분한다.
  문서 판정: 세로 && (밝은픽셀(L>195) 비율>0.45 && 평균>160) || 평균>168.
  (전 뉴스 이미지로 검증 — 사진 최고 평균 143, 문서 최저 174.) 문서는
  h-72~80로 글씨가 읽히게, 그 외 사진은 방향 무관 h-44~52 균일 행 높이,
  items-center 정렬. 단독은 가로 max-w-2xl / 세로 h-[360px]. 세로 사진을
  전부 키우면 조화가 깨진다는 교수 피드백에 따른 설계이므로 유지할 것.
- 로봇신문 항목: 대표 사진은 기사 본문의 교수 인터뷰 사진
  (2026-04-robot-news-2.jpg), 기사 헤드라인 캡처(2026-04-robot-news-3.jpg)와
  옛 사이드바 캡처를 갤러리로 — 사진 3장+기사 링크. 헤드라인 캡처 제작법:
  브라우저는 irobotnews.com 직접 접속이 차단되므로 curl로 HTML+CSS+이미지를
  받아 로컬화(file://)한 뒤 Playwright로 렌더·크롭(스크립트: scratchpad
  rnews/). 분류기는 배너(가로비>1.6) 제외 후 밝은 이미지를 문서로 취급.
- **브라우저로 외부 사이트 라이브 접속하는 법** (2026-08-30 해결): 사이트
  차단이 아니라 Chromium의 TLS 핸드셰이크가 TLS 재종단 프록시와 비호환
  (터널은 열리나 ClientHello 직후 리셋; --proxy-server, ECH/ML-KEM 비활성
  모두 무효). 우회: page.route('**/*')로 전 요청을 가로채 Node fetch로
  대신 받아 route.fulfill — `NODE_USE_ENV_PROXY=1
  NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node script.js`
  (스크립트 예: scratchpad/test3.js). irobotnews.com 라이브 렌더 확인됨.
- 멤버 얼굴 사진 파이프라인: YuNet(cv2.FaceDetectorYN, 모델
  scratchpad/yunet.onnx)로 얼굴 검출 → 얼굴폭 2.5배 정사각 크롭(얼굴이
  중심 약간 위) → 800px 상한. 27장 전원 적용, 원본은 scratchpad/team_orig.
  advisor 상반신(seokhwan-jeong-portrait.jpg)은 크롭 제외. 새 멤버 사진이
  오면 같은 파이프라인 적용.
- NANO KOREA 2026 전시 뉴스 추가 (2026.07, KINTEX 나노융합 성과전시 —
  9-DOF 그리퍼 + 김형준 교수팀 고유전 전기접착 패드 데모; 근거:
  최아리 8/3 메일·서강 기사). 부적절한 번개 그래픽(nrf-materials)은 삭제.
- 신소재 과제 funding 문구 보강 (2025.07–2028.12, 35억, KETI·GIST·연세,
  UW-Madison·U.Louisville 국제협력).

## 남은 작업 (우선순위순)

0. ~~구글 포토 사진 2장~~ 완료(2026-08-30): 교수가 채팅으로 5장 업로드.
   TE608A 2장 → labGallery 'Workspace 3 (TE608A)', ProJet MJP 2500 Plus →
   equipment 카드. 구글 포토 자동 접근은 API 폐지로 불가 — 사진은 교수가
   직접 준다(채팅 업로드 권장; 공유 링크는 scripts/fetch-shared-album.py).
   **PC 브릿지 가동(2026-08-30, task-000 왕복 검증 완료)**: 클라우드→PC
   직접 메시징(SendMessage·트리거)은 인증 차단으로 불가하지만 우회 확립 —
   ①지시: bridge/TASKS.md에 task 추가+push → PC 세션(claude-project-40,
   DESKTOP-TD61GAQ)이 90초 주기 GitHub API 감시로 수행. ②보고: PC가
   SendMessage로 클라우드에 회신(수신 확인됨). PC 창이 켜져 있어야 하며,
   PC 세션 재시작 시 감시 루프 지시문을 다시 붙여야 할 수 있다.
   급한 건 교수가 PC 창에 직접 지시하는 것이 0초로 가장 빠름.
   **상설 수거함(2026-08-30)**: Drive 폴더 'RIM 홈페이지 자료함'
   (id 1sZwOkfRWHPYOfoCm-SxeKTQhXSVAWXw7). 교수 PC의 codex가 구글 포토 등
   접근 불가 소스에서 자료를 꺼내 이 폴더에 넣는 브릿지 구조 — 세션은
   사진·자료 작업 시작 시 이 폴더를 확인하고, 수확한 파일은 trash_file로
   정리해 비워 둔다.

1. **특허 대표도 잔여분**: 완료 4건 — 준직구동(DE 출원서류 Fig.1),
   로봇용핸드(KM23109 출원서류 도2), 동축자석기어 제어(P2023-0021KR
   명세서 도3), 하지보조(10-2023-0152159 출원서 도1). 명세서 위치는
   Drive `Sogang University/특허/` 가족별 폴더.
   잔여: 하네스(특허출원 명세서 초안.zip, id 1h68NrI3pBcIJ-d3E22esOCUbBLKogro-),
   4-bar VTM(P2025-0018US_출원서류.pdf, id 1Z867nmhi-6NlYWf1WLX7bmAYOIVaMn-2),
   툴체인저·로봇다리변속·유연핸드·하이브리드변속 폴더는 미탐색.
   방법: `download_file_content` 결과가 로컬 파일로 저장됨 → base64 디코드
   → pymupdf 렌더 → autocrop. Drive MCP 세션이 수 분마다 만료되므로
   만료 시 재연결 대기 후 재시도.
   ⚠️ **원칙 확정(교수 지시, 2026-08-30)**: 공개공보 전 출원의 도면은
   게시하지 않는다. 준직구동 가족 대표도도 이 원칙에 따라 내림 —
   공개공보 발행(우선일+18개월, 2027 초 예상) 후 다시 게시.
   현재 게시 3건은 모두 등록특허(로봇용핸드·동축자석기어·하지보조).
2. **뉴스 이미지 이관 완결** (2026-08-30 3차): 옛 /news 116장을 섹션별
   전수 감사해 사용 가능한 전부를 배선 — 총 111장 사용, 제외 5장은
   로고 2장 + 중복 3장(agenda 다이어그램 유사본 35, 강의실 연속컷 78,
   KSPE 상장 중복 111·112). AIM↔ICROS 오배정 교정(003·004는 대구),
   옛 페이지의 외부 링크 4종(로봇신문, 서강피플, Wiley, 인스타/블로그)
   반영, `links[]` 필드 신설. 갤러리 타일은 4:3 크롭 대신 letterbox
   contain으로 변경(세로 사진 잘림 방지). Experimental Setups(2023.11)
   항목 신설
3. **미확인 뉴스 후보** (교수 확인 대기): 공과대학 뉴스레터 인터뷰,
   ㈜아이디티 기술이전. (포스코DX VLA 과제는 교수 지시로 게시 안 함.)
3-1. ~~NANO KOREA 사진~~ 완료: Drive의 결과보고서 PDF(1-wOAws2nz…)에서
   pymupdf로 현장 사진 추출 — 데모·쇼케이스·부스 명패 3장 게시.
   (Gmail 첨부는 get_message RAW로 받을 수 있으나 수 MB 이상이면 MCP
   세션이 끊겨 불가 — 큰 첨부는 Drive 사본을 찾는 것이 정공법.)
4. **Samuel Mekonnen 현재 소속 확인** (교수 확인 대기): 옛 홈페이지에도
   "KangWoon"으로만 적혀 있어 근거가 없다. 메일 근거는 2026.04 UST-KIST
   박사과정 지원 + 교수 추천서까지이며 합격 여부는 미확인. 현재 team.ts는
   소속 없이 비워 둔 상태가 맞다.
5. **Publications 영상 잔여분 3편**: 옛 홈페이지 전수 대조를 끝냈고, 남은
   것은 IEEE Xplore 부록 전용이라 기관 로그인이 필요한 3편뿐이다 —
   Glove-II 8957079, Continuum 9248011, Mitral 카테터 9561146.
   (HANDOFF에 있던 8957292는 유튜브 영상 HTXwTqTGt8E가 확인돼 해결됨.)
   호스팅은 public/videos/pubs/ + ffmpeg 포스터(videoThumb) 방식이나,
   **저작권 구분을 지킬 것**(2026-08-30 확인): ⑴ CC-BY 등 오픈액세스 논문
   (예: AIS 2024 aisy.202300566, CC-BY 4.0)의 부록 영상은 출처 표기만으로
   자유 재사용 가능 — 그대로 호스팅한다. ⑵ IEEE 등 저작권 이전 논문은
   **Xplore에서 받은 파일을 재게시하지 않는다**. 대신 교수 보유 원본
   영상을 쓰고, 캡션에 논문 인용 + "© 20XX IEEE"를 병기한다(IEEE PSPB
   8.1.9: 저자는 자신의 accepted 버전 자료를 개인·기관 사이트에 게시 가능,
   출판사 최종본은 불가). 유튜브 채널 업로드 후 링크하는 방식도 동일 근거로
   안전하며 기존 논문들과 표시가 일관된다.
6. 히어로 배경 heroHighlights 미세조정 (교수가 장면 지정해주면)

## 주의사항

- 뉴스/실적은 메일 등으로 사실 확인된 것만 반영 (협상 중·비공개 건 제외)
- 이미지는 리사이즈(뉴스 1600px, 인물 800px, JPEG q82) 후 커밋
- push 전 npm run build 필수 (CLAUDE.md 규칙)

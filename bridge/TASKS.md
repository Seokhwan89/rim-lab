# RIM bridge outbox

클라우드 세션(rim-lab 홈페이지 담당)이 교수님 PC의 Claude 세션에게 남기는
작업 지시함. PC 세션은 이 파일을 주기적으로 확인해서 **가장 마지막 task
하나**를 수행하고, 결과를 클라우드 세션("Untitled session · cloud")에게
SendMessage로 보고한다. (클라우드 세션의 현재 표시 이름은
'RIM Lab 홈페이지 관리' — ListAgents에 뜨는 이름이 바뀌면 그 이름으로 보낸다.)
이미 수행한 task id는 로컬에 기록해 중복 실행하지 않는다. 이 파일은 공개 리포에 있으므로 비밀 정보는 절대 쓰지 않는다.

---

## task-000 (2026-08-30) — 연결 시험
아무 파일도 만들지 말고, "bridge task-000 수신 확인, DESKTOP-TD61GAQ에서
실행 중"이라는 메시지를 Untitled session (cloud)에게 보내라.

## task-001 (2026-08-30) — GPT에게 홈페이지 자료 조사 위임
(교수가 클라우드 세션에서 직접 지시한 작업이다.)
목표: GPT에게 아래 질의를 전달하고 답변을 회수해 클라우드 세션에 보고하라.

GPT에게 보낼 질의:
"내 Gmail 전체에서 연구실(RIM Lab, 서강대 정석환 교수) 새 홈페이지에 올릴
만한 공개 가능한 소식·실적 자료를 싹 찾아 정리해줘 — 논문 게재/채택, 수상,
과제 선정, 특허 등록, 학회 발표/전시, 언론 보도, 구성원 소식. 항목마다
날짜·메일 제목·핵심 내용 1~2줄. 그리고 구글 포토에서도 각 항목에 어울리는
사진(행사·시상·전시·연구실·장비)을 검색해 촬영 날짜와 함께 목록으로 정리해줘.
이미 홈페이지에 반영된 것: 나노코리아 2026 전시(7월), KROS 신진과학자상
(2025.12), ICROS 2024~2026 수상, 로봇신문 인터뷰(2026.03), KEITI 환경부
과제(2026.07), TE608A 이전. 이것들 '외에' 빠진 것 위주로 찾아줘."

방법: 자동 조작이 어려우면 반자동으로 진행하라 — 화면의 사용자(교수)에게
"크롬에서 chatgpt.com을 열고 위 질의를 붙여넣어 달라"고 요청하고, 나온 답변
텍스트를 받아 정리하면 된다. GPT가 사진을 보여주면 사진 파일을 옮기지 말고
"어떤 사진인지 설명 + 촬영일" 목록만 작성하라.

보고: 정리 결과를 'Untitled session' (cloud)에게 SendMessage로 전달 (길면
2~3개로 분할). 완료 후 .bridge-done에 task-001 기록.

## task-002 (2026-08-30) — OA 논문 보조영상 내려받기
(교수가 클라우드 세션에서 지시한 작업. 클라우드에서는 Wiley가 403으로
막혀 접근 불가하나 교수 PC 브라우저에서는 열린다.)

대상 논문(오픈액세스 CC-BY 4.0, 재사용 허용):
"A Modular Robotic Platform for Biological Research: Cell Culture Automation
and Remote Experimentation", Advanced Intelligent Systems, 2024,
https://advanced.onlinelibrary.wiley.com/doi/10.1002/aisy.202300566

할 일:
1. 위 논문 페이지의 Supporting Information에서 보조 영상 파일(Video S1 등,
   mp4 또는 zip)을 내려받는다.
2. 파일이 25MB를 넘으면 ffmpeg로 720p/H.264로 압축해 25MB 이하로 만든다
   (없으면 원본 그대로).
3. 구글 드라이브의 **'RIM 홈페이지 자료함'** 폴더
   (id 1sZwOkfRWHPYOfoCm-SxeKTQhXSVAWXw7)에 업로드한다.
4. 파일명·용량·영상 길이·내용 요약을 'Untitled session' (cloud)에게
   SendMessage로 보고한다. 완료 후 .bridge-done에 task-002 기록.

## task-003 (2026-08-30) — task-002 취소
교수 지시로 task-002(AIS 논문 부록 영상 수집)는 취소한다. 아직 시작하지
않았다면 하지 말고, 이미 파일을 받았거나 드라이브에 올렸다면 삭제한다.
보고도 필요 없다. .bridge-done에 task-002, task-003을 모두 기록해 둘 것.

## task-004 (2026-09-13) — CV 특허 항목 갱신 + PDF 재출력 (PC 로컬 파일)
(교수가 클라우드 세션에서 지시한 작업. 호주 특허가 2026-09-03 등록되어
CV를 고쳐야 하는데, 클라우드는 Drive 파일 내용을 덮어쓸 수 없어 PC에 위임.)

대상 파일 (G:\My Drive 는 Drive for Desktop 동기화 폴더):
  G:\My Drive\Drive\취업\CV\CV+Research Statement_Jeong, Seokhwan_(Most recent).docx
  (확장자가 .doc 이면 그 파일. 같은 폴더의 같은 이름 .pdf 도 대상.)

할 일:
1. Word 문서의 "International Patent" 절에서 호주 특허 줄을 찾는다:
     … coaxially aligned robotically steerable guidewire,” Australia Patent,
     AU2021259459A, (2026.5.21)
   → "AU2021259459A, (2026.5.21)" 를 "AU2021259459B2, (2026.9.3)" 로 바꾼다.
   (등록 완료. 서식·글꼴·줄바꿈은 그대로 두고 텍스트만 교체. Word를 COM으로
   열어 Find/Replace 하는 것이 가장 안전함. 텍스트가 여러 run에 나뉘어 있을
   수 있으니 python-docx로 할 경우 문단 단위로 처리할 것.)
2. 페이지 머리글의 날짜 "May 24, 2026" 을 "September 13, 2026" 으로 바꾼다.
3. 저장(같은 파일명·같은 위치에 덮어쓰기 — 새 파일을 만들지 말 것).
4. Word로 같은 폴더에 PDF 내보내기:
     CV+Research Statement_Jeong, Seokhwan_(Most recent).pdf  (기존 파일 덮어쓰기)
   같은 이름으로 덮어써야 Drive 파일 id가 유지되어 홈페이지 CV 링크가 계속 산다.
5. 'Untitled session' (cloud)에 SendMessage로 보고: 바뀐 줄의 최종 텍스트,
   PDF 쪽수, 저장 시각. 실패하면 어디서 막혔는지 보고.
6. .bridge-done 에 task-004 기록.

## task-005 (2026-09-25) — CV 학술활동 2줄 추가 + PDF 재출력 (PC 로컬 파일)
(교수가 클라우드 세션에서 지시한 작업. ICRA 2027 AE와 KRoC 2027 조직위원을
CV에 넣는다. 클라우드는 Drive 파일 내용을 덮어쓸 수 없어 PC에 위임.)

대상 파일 (task-004와 같음, G:\My Drive 는 Drive for Desktop 동기화 폴더):
  G:\My Drive\Drive\취업\CV\CV+Research Statement_Jeong, Seokhwan_(Most recent).docx
  (확장자가 .doc 이면 그 파일. 같은 폴더의 같은 이름 .pdf 도 대상.)

할 일 (서식은 기존 줄을 복제해서 그대로 유지 — 글머리표·글꼴·들여쓰기 동일):
1. "International Conference Editor" 절의 첫 줄
     Associate Editor, IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM) 2026
   바로 위에, 그 문단을 복제한 새 줄을 넣고 텍스트를 다음으로 바꾼다:
     Associate Editor, IEEE International Conference on Robotics and Automation (ICRA) 2027
2. "Domestic Conference Activity" 절의 줄
     Organizing Committee , Korea Robotics Society Annual Conference (KroC) 2024 한국로봇종합학술대회 2024 조직위
   바로 위에, 그 문단을 복제한 새 줄을 넣고 두 군데의 "2024"만 "2027"로 바꾼다.
3. 페이지 머리글 날짜 "September 23, 2026" 을 "September 25, 2026" 으로 바꾼다.
4. 저장(같은 파일명·같은 위치에 덮어쓰기 — 새 파일을 만들지 말 것).
5. Word로 같은 폴더에 PDF 내보내기(기존 PDF 덮어쓰기 — Drive 파일 id 유지용):
     CV+Research Statement_Jeong, Seokhwan_(Most recent).pdf
6. 'RIM Lab 홈페이지 관리' (cloud)에 SendMessage로 보고: 추가된 두 줄의 최종
   텍스트, PDF 쪽수, 저장 시각. 실패하면 어디서 막혔는지 보고.
7. .bridge-done 에 task-005 기록.

## task-006 (2026-09-25) — CV 미국 특허 줄을 등록번호로 교체 + PDF 재출력 (PC 로컬 파일)
(교수가 클라우드 세션에서 지시한 작업. COAST 가이드와이어 미국 특허
US 12,752,086 B2 — 2026-10-06 발행 확정 — 를 지금 바로 CV에 반영한다.
task-005는 완료 확인됨: Drive PDF에 ICRA 2027 AE / KroC 2027 줄과
"September 25, 2026" 날짜가 들어가 있음.)

대상 파일 (task-004·005와 같음, G:\My Drive 는 Drive for Desktop 동기화 폴더):
  G:\My Drive\Drive\취업\CV\CV+Research Statement_Jeong, Seokhwan_(Most recent).docx
  (확장자가 .doc 이면 그 파일. 같은 폴더의 같은 이름 .pdf 도 대상.)

할 일 (서식·글꼴·줄바꿈은 그대로 두고 텍스트만 교체 — Word COM Find/Replace 권장):
1. "International Patent" 절에서 미국 특허 줄을 찾는다:
     … coaxially aligned robotically steerable guidewire,” US Patent,
     US17/919,763 (approved)
   → "US17/919,763 (approved)" 를 "US12,752,086B2, (2026.10.6)" 로 바꾼다.
2. 페이지 머리글 날짜 "September 25, 2026" 은 그대로 둔다(오늘 날짜와 같음).
   다른 날짜로 되어 있으면 "September 25, 2026" 으로 맞춘다.
3. 저장(같은 파일명·같은 위치에 덮어쓰기 — 새 파일을 만들지 말 것).
4. Word로 같은 폴더에 PDF 내보내기(기존 PDF 덮어쓰기 — Drive 파일 id 유지용):
     CV+Research Statement_Jeong, Seokhwan_(Most recent).pdf
5. 저장 후 PDF의 "Domestic Conference Activity" 절에서 KroC 2027 / 2024 줄이
   한 줄씩 정상적으로 보이는지 눈으로 확인하고(텍스트 추출 시 줄바꿈이 어색했음),
   깨져 있으면 기존 2024 줄과 같은 모양이 되도록 고친 뒤 PDF를 다시 내보낸다.
6. 'RIM Lab 홈페이지 관리' (cloud)에 SendMessage로 보고: 바뀐 줄의 최종 텍스트,
   5번 확인 결과, PDF 쪽수, 저장 시각. 실패하면 어디서 막혔는지 보고.
7. .bridge-done 에 task-006 기록.

## task-007 (2026-10-08) — CV 특허 줄 등록 반영 + 표기·저자 정정 + PDF 재출력 (PC 로컬 파일)
(교수가 클라우드 세션에서 지시: "메일에 온 특허 확인해서 홈페이지 및 CV에 반영".
클라우드가 메일 + 공식 DB로 확인한 사실: ① CA 3,132,642 (내시경 도구) 2026-09-29 등록 — 대리인
메일 + CIPO "(45) Issued 2026-09-29"; ② US 12,557,970 B2 (내시경 도구 분할출원, 출원 19/196,285)
2026-02-24 등록 — USPTO 공보 1면 "Division of application No. 17/433,165"; ③ US 12,576,517 B2
(Voice-Activated 계속출원, 출원 18/924,569) 2026-03-17 등록 — USPTO 공보 1면; ④ JP7411317B2 발명자는
공보상 Desai·Jeong·Tran·Wang (CV에는 Chitalia·Chern으로 잘못 적힘); ⑤ KR 10-1870733 등록 2018-06-19.
task-006(US 12,752,086)은 이미 반영 확인됨 — 아래 6번은 표기만 통일.)

대상 파일: task-004~006과 같은 CV Word 파일과 같은 폴더의 같은 이름 PDF.

할 일 (서식·글꼴·줄바꿈은 그대로 두고 텍스트만 교체 — Word COM Find/Replace 권장. 텍스트가
여러 run에 나뉘어 있을 수 있으니 문단 단위로 확인. 각 "변경 전" 문자열이 이미 없으면 그 항목은
건너뛰고 보고만 할 것 — 두 번 실행해도 결과가 같아야 함):
"International Patent" 절
1. "CA3132642, patent pending (2020.3.4)"  →  "CA3132642C, (2026.9.29)"
   (주의: 바로 아래 Voice 패밀리의 "CA3132645, patent pending (2020.3.4)"는 그대로 둔다)
2. "US19/196,285, patent pending (2025.5.1) - Continuation Application"
   →  "US12557970B2 (2026.2.24) - Divisional Application"
3. "US18/924,569, patent pending (2024.10.23) - Continuation Application"
   →  "US12576517B2 (2026.3.17) - Continuation Application"
4. JP7411317B2 줄의 저자: "J. P. Desai, Y. Chitalia, S. Jeong, and J. J Chern, “Small and portable robot
   systems with voice recognition,”" 에서 저자 부분만
   "J. P. Desai, Y. Chitalia, S. Jeong, and J. J Chern"  →  "J. P. Desai, S. Jeong, P. Tran, and X. Wang"
   (이 저자 문자열은 내시경 도구 줄들에도 있으니 반드시 "Small and portable robot systems" 줄에서만 바꿀 것)
5. 철자: "Japen Patent" → "Japan Patent" (3곳 모두)
6. 표기 통일(교수 기존 US 표기 "US12318067B2 (2025.6.3)"에 맞춤):
   "US12,752,086B2, (2026.10.6)" → "US12752086B2 (2026.10.6)"
"Domestic Patent" 절
7. "줄 꼬임 기반의 듀얼 모드 트랜스미션 메커니즘" 줄: "10-1870733, (2017)" → "10-1870733, (2018)",
   같은 줄 저자 "정석환 임정민" → "정석환, 임정민" (쉼표 누락)
8. "로봇용 핸드" 줄 끝의 "10-2927194" 뒤에 " (2026)" 추가 — 이미 "(2026)"이 붙어 있으면 건너뜀.
   (이 줄 저자 목록은 바꾸지 말 것 — 교수 확인 대기)
공통
9. 페이지 머리글 날짜 "September 25, 2026" → "October 8, 2026"
10. 저장(같은 파일명·같은 위치에 덮어쓰기 — 새 파일을 만들지 말 것).
11. Word로 같은 폴더에 PDF 내보내기(기존 PDF 덮어쓰기 — Drive 파일 id 유지용).
12. 'RIM Lab 홈페이지 관리' (cloud)에 SendMessage로 보고: 1~4번·6~8번 줄의 최종 텍스트 각각,
    5번 "Japan Patent" 3곳 확인 여부, 머리글 날짜, PDF 쪽수, 저장 시각. 건너뛴 항목은 이유와 함께.
13. .bridge-done 에 task-007 기록.

## task-008 (2026-10-25) — CV 국내특허 등록 1건 반영 + 머리글 날짜 + PDF 재출력 (PC 로컬 파일)
(교수가 클라우드 세션에서 지시: "홈페이지 업데이트할 거 메일에서 찾아보고 CV에도 반영해서 PDF 업데이트".
클라우드가 확인한 사실: 산학협력단 10/20 메일 "C2024-0040KR 사외특허 등록 완료" — 「하지 근력 보조 장치」
출원 10-2023-0152159(2023-11-06) → 등록 10-2980945(2026-06-17). Google Patents KR102980945B1 등록공고
2026-06-24, 발명자 신준호·강병현·양가영·황상윤·정석환, 출원인 국립재활원·세종대·서강대 — CV 저자 순서와 일치.
task-007은 10/13자 PDF(Drive)로 완료 확인됨.)

대상 파일: task-004~007과 같은 CV Word 파일과 같은 폴더의 같은 이름 PDF.

할 일 (서식·글꼴·줄바꿈은 그대로 두고 텍스트만 교체 — Word COM Find/Replace 권장. "변경 전" 문자열이
이미 없으면 건너뛰고 보고만 할 것 — 두 번 실행해도 결과가 같아야 함):
"Domestic Patent" 절
1. "“하지 근력 보조 장치”, 10-2023-0152159, patent pending"
   →  "“하지 근력 보조 장치”, South Korea Patent, 10-2980945 (2026)"
   (같은 절의 "로봇용 핸드" 줄 표기 "South Korea Patent, 10-2927194 (2026)"에 맞춤. 저자 목록은 그대로.)
공통
2. 페이지 머리글 날짜 "October 13, 2026" → "October 25, 2026"
3. 저장(같은 파일명·같은 위치에 덮어쓰기 — 새 파일을 만들지 말 것).
4. Word로 같은 폴더에 PDF 내보내기(기존 PDF 덮어쓰기 — Drive 파일 id 1Od3EuGPwVmM5kRFyMun_c2io94LxQXQ6 유지).
5. 'RIM Lab 홈페이지 관리' (cloud)에 SendMessage로 보고: 1번 줄의 최종 텍스트, 머리글 날짜, PDF 쪽수, 저장 시각.
6. .bridge-done 에 task-008 기록.

## task-009 (2026-10-26) — CV 국내특허 출원 2건 추가 + 머리글 날짜 + PDF 재출력 (PC 로컬 파일)
(교수가 클라우드 세션에서 지시: "하네스 케이블 특허(최근 가출원) 올라갔나" → 홈페이지에 추가하고 CV에도 반영.
클라우드가 메일로 확인한 사실: ① 산학협력단 10/12 "P2026-0158KR 출원 완료" — 「2열 플렉시블 리본형 하네스
케이블의 자동 조립 시스템」 KR 10-2026-0195251 (2026-10-12, 청구범위제출유예/가출원; 발명자 정석환·서준호·최은규,
국내우선권주장 정규출원 P2026-0178KR 진행 중). ② 산학협력단 9/17 "P2026-0146KR 출원 완료" — 「직구동 차동
메커니즘 기반 구동기 전류를 이용한 손끝 3축 힘 추정 방법」 KR 10-2026-0177849 (2026-09-17; PCR 보고서 수신인
정석환·이준·최아리). 10/25자 CV PDF를 디코드해 보니 두 건 모두 Domestic Patent 절에 없음.)

대상 파일: task-004~008과 같은 CV Word 파일과 같은 폴더의 같은 이름 PDF.

할 일 (서식·글꼴·줄바꿈은 그대로 — 기존 줄을 복사해 텍스트만 바꾸는 방식 권장. 이미 같은 출원번호 줄이 있으면
그 항목은 건너뛰고 보고만 — 두 번 실행해도 결과가 같아야 함):
"Domestic Patent" 절 — 첫 줄(• 정석환, 이준, 최아리, “직구동 차동 메커니즘을 이용한 다자유도 로봇 그리퍼” …) **바로 위**에
같은 글머리 서식으로 두 줄 추가(최신순):
1. • 정석환, 서준호, 최은규, “2열 플렉시블 리본형 하네스 케이블의 자동 조립 시스템”, South Korea Patent, 10-2026-0195251 (2026.10.12), patent pending
2. • 정석환, 이준, 최아리, “직구동 차동 메커니즘 기반 구동기 전류를 이용한 손끝 3축 힘 추정 방법”, South Korea Patent, 10-2026-0177849 (2026.9.17), patent pending
공통
3. 페이지 머리글 날짜 "October 25, 2026" → "October 26, 2026"
4. 저장(같은 파일명·같은 위치에 덮어쓰기 — 새 파일을 만들지 말 것).
5. Word로 같은 폴더에 PDF 내보내기(기존 PDF 덮어쓰기 — Drive 파일 id 1Od3EuGPwVmM5kRFyMun_c2io94LxQXQ6 유지).
6. 'RIM Lab 홈페이지 관리' (cloud)에 SendMessage로 보고: 추가된 두 줄의 최종 텍스트, 머리글 날짜, PDF 쪽수, 저장 시각.
7. .bridge-done 에 task-009 기록.

## task-010 (2026-10-29) — **취소됨(2026-10-29)**: 교수가 Vercel MCP 연동을 켜서 클라우드가 직접 조회함. 수행하지 말 것.
### (원문) Vercel 방문자 통계 화면 수집 (로그인된 크롬)
(교수가 클라우드 세션에서 "홈페이지 방문자 통계 보여줘 → 크롬 조작해서 해봐"라고 지시. 클라우드에는 크롬 확장도
VERCEL_TOKEN도 없어 PC의 로그인된 크롬으로 위임.)

할 일:
1. 크롬으로 https://vercel.com/sogang-me/rim-lab/analytics 열기 (로그인돼 있지 않으면 중단하고 보고 — 비밀번호 입력
   금지). 기간을 "Last 30 days"로 두고 Visitors / Page Views 요약 숫자와 일별 그래프, Pages·Referrers·Countries
   상위 목록이 보이도록 전체 페이지 스크린샷 저장.
2. 가능하면 같은 화면에서 숫자를 텍스트로도 옮겨 적기: 30일 Visitors 합계, Page Views 합계, 일별(날짜: visitors /
   views), 상위 페이지 5개, 상위 유입 5개, 상위 국가 5개.
3. 스크린샷(PNG)을 Drive 'RIM 홈페이지 자료함'(id 1sZwOkfRWHPYOfoCm-SxeKTQhXSVAWXw7)에 vercel-analytics-2026-10-29.png
   로 업로드.
4. 'RIM Lab 홈페이지 관리' (cloud)에 SendMessage로 보고: 2번 숫자 전부 + Drive 파일명. 토큰·쿠키 등 비밀값은 절대
   보고에 넣지 말 것.
5. .bridge-done 에 task-010 기록. (task-009가 아직 미수행이면 먼저 수행.)


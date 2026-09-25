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

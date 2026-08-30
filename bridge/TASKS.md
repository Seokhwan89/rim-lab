# RIM bridge outbox

클라우드 세션(rim-lab 홈페이지 담당)이 교수님 PC의 Claude 세션에게 남기는
작업 지시함. PC 세션은 이 파일을 주기적으로 확인해서 **가장 마지막 task
하나**를 수행하고, 결과를 클라우드 세션("Untitled session · cloud")에게
SendMessage로 보고한다. 이미 수행한 task id는 로컬에 기록해 중복 실행하지
않는다. 이 파일은 공개 리포에 있으므로 비밀 정보는 절대 쓰지 않는다.

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

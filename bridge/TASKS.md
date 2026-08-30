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

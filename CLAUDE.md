# RIM Lab Website

서강대 기계공학과 정석환 교수의 RIM 연구실(Robotics and Intelligent Mechanisms Lab) 공식 홈페이지.

- 배포: https://rim-lab.vercel.app (main 푸시 시 Vercel 자동 배포)
- 최종적으로 `rim.sogang.ac.kr` 도메인에 연결 예정

## 작업 규칙

- 콘텐츠 수정은 `content` 폴더의 `.ts` 파일만 편집한다.
  - `news.ts` — 뉴스
  - `publications.ts` — 논문
  - `team.ts` — 구성원
  - `projects.ts` — 연구 프로젝트
  - `videos.ts` — 유튜브
  - `advisor.ts` — 지도교수
  - `site.ts` — 메뉴, 연락처
- 디자인 테마는 다크 네이비 배경에 일렉트릭 시안 포인트(`app/globals.css`의 CSS 변수). 이 테마를 임의로 바꾸지 않는다.
- 언어는 영어 기본, 불가피한 경우만 한글 병기.
- 메뉴 순서 유지: Opening, Team, Advisor, Research Projects, News, Publications
- push 전에 `npm run build`로 빌드 통과를 확인한다.
- 배포 사이트 직접 접속은 안 될 수 있으나 정상이며, 반영 확인은 사용자가 브라우저로 한다.

## 자동화

- 매주 월요일 09:00 KST에 "RIM Lab weekly news update" Routine이 실행된다.
  교수 Gmail에서 지난 8일간의 공개 가능한 실적(논문 게재, 수상, 과제 선정,
  특허 등록, 학회 활동, 구성원 소식)을 찾아 `content/*.ts` 수정안을
  `claude/news-auto-YYYYMMDD` 브랜치 + PR로 제안한다. main 직접 push 금지,
  머지는 교수가 검토 후 직접 한다.

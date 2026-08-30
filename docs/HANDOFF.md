# 작업 인수인계 (세션 간 컨텍스트)

> 새 세션은 CLAUDE.md의 작업 규칙을 따르고, 이 문서로 진행 상황을 파악한다.
> 완료된 항목을 처리하면 이 문서를 갱신하고 함께 커밋한다.

_최종 갱신: 2026-08-30 (옛 홈페이지 이미지 이관 세션)_

## 완료된 것

- 사이트 구축·배포: main push → Vercel 자동 배포 (https://rim-lab.vercel.app)
- 도메인: rim.sogang.ac.kr 연결 신청 준비 완료 (Vercel에 도메인 추가됨,
  CNAME `728b851d8e151a2a.vercel-dns-017.com.` + TXT `_vercel` 값을
  디지털정보처(02-705-8108)에 요청하는 메일 초안 전달, 교수가 발송 예정)
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

## 남은 작업 (우선순위순)

1. **옛 홈페이지 이미지 잔여분 32장** (구글 요청 제한으로 미수집):
   전부 `/news` 페이지의 2022~2023년 행사 사진과 2026.08.21 졸업식 사진이다.
   목록 번호는 news [052][070][072][076][078][082][087][088][090][092][093]
   [095]~[115]. 구 사이트는 이미지 URL이 단기 서명형이라 페이지 HTML을 받은
   직후 곧바로 내려받아야 하고, 짧은 시간에 몰아서 요청하면 403이 난다.
   다음 세션에서 간격을 두고 재수집해 news.ts의 2022~2023 항목에 붙인다.
2. **Samuel Mekonnen 현재 소속 확인** (교수 확인 대기): 옛 홈페이지에도
   "KangWoon"으로만 적혀 있어 근거가 없다. 메일 근거는 2026.04 UST-KIST
   박사과정 지원 + 교수 추천서까지이며 합격 여부는 미확인. 현재 team.ts는
   소속 없이 비워 둔 상태가 맞다.
3. **Publications 영상 잔여분 3편**: 옛 홈페이지 전수 대조를 끝냈고, 남은
   것은 IEEE Xplore 부록 전용이라 기관 로그인이 필요한 3편뿐이다 —
   Glove-II 8957079, Continuum 9248011, Mitral 카테터 9561146.
   (HANDOFF에 있던 8957292는 유튜브 영상 HTXwTqTGt8E가 확인돼 해결됨.)
   교수가 mp4를 내려받아 주면 public/videos/pubs/에 호스팅하고 ffmpeg로
   포스터를 뽑아 videoThumb에 지정한다.
4. **미확인 뉴스 후보** (교수 확인 대기): 공과대학 뉴스레터 연구실 소개
   인터뷰(2025.08~09 추정), ㈜아이디티 기술이전(계약 체결되면 뉴스로)
5. 히어로 배경 heroHighlights 미세조정 (교수가 장면 지정해주면)

## 주의사항

- 뉴스/실적은 메일 등으로 사실 확인된 것만 반영 (협상 중·비공개 건 제외)
- 이미지는 리사이즈(뉴스 1600px, 인물 800px, JPEG q82) 후 커밋
- push 전 npm run build 필수 (CLAUDE.md 규칙)

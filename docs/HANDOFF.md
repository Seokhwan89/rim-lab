# 작업 인수인계 (세션 간 컨텍스트)

> 새 세션은 CLAUDE.md의 작업 규칙을 따르고, 이 문서로 진행 상황을 파악한다.
> 완료된 항목을 처리하면 이 문서를 갱신하고 함께 커밋한다.

_최종 갱신: 2026-08-29 (초기 구축 세션)_

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
  videoThumb 필드 지원. 21편에 영상 연결 완료
- 사진: 드라이브에서 확보한 6장만 반영 (교수 증명사진, 랩 단체사진,
  연구실 공간·장비 3장, KROS 수상식) — public/images/
- 자동화: 매주 월 09:00 KST Routine "RIM Lab weekly news update"
  (trig_01FjM6GumiF94pdYYDCiDZdQ) — Gmail 스캔 → PR 제안. 첫 실행 시
  Gmail 커넥터가 안 붙어 있으면 claude.ai Routines 설정에서 붙여야 함

## 남은 작업 (우선순위순)

1. **옛 홈페이지 긁기** (네트워크 정책 변경 후 가능): rim.sogang.ac.kr의
   전체 페이지에서 사진을 수집해 뉴스/멤버/연구 프로젝트의 맞는 자리에 배치.
   이미지 실체는 *.googleusercontent.com 에 있음. 반영 위치:
   - 멤버 개별 사진 → team.ts 각 항목 photo 필드 (UI 구현돼 있음)
   - 뉴스 항목 사진 → news.ts image 필드
   - 논문 대표 figure → publications.ts image 필드 (public/images/pubs/)
2. **Alumni 전수 검증**: 옛 홈페이지 team 페이지 기준으로 content/team.ts
   alumni 대조. 특히 Samuel Mekonnen의 현재 소속 확인(잘못된 "Kangwon
   National University"는 제거된 상태. 메일 근거: 2026.04 UST-KIST 박사과정
   지원+교수 추천서 — 합격 여부는 교수 확인 필요)
3. **Publications 영상 잔여분**: 옛 홈페이지의 publications 페이지에서
   video/paper 링크 전수 대조. IEEE Xplore 부록 전용 4편(Glove-II 2편
   8957079/8957292, Continuum 9248011, Mitral 카테터 9561146)은 교수가
   기관 로그인으로 mp4 다운로드해 업로드하면 public/videos/pubs/에 호스팅
   + ffmpeg로 포스터 추출해 videoThumb 지정
4. **미확인 뉴스 후보** (교수 확인 대기): 공과대학 뉴스레터 연구실 소개
   인터뷰(2025.08~09 추정), ㈜아이디티 기술이전(계약 체결되면 뉴스로)
5. 히어로 배경 heroHighlights 미세조정 (교수가 장면 지정해주면)

## 주의사항

- 뉴스/실적은 메일 등으로 사실 확인된 것만 반영 (협상 중·비공개 건 제외)
- 이미지는 리사이즈(뉴스 1600px, 인물 800px, JPEG q82) 후 커밋
- push 전 npm run build 필수 (CLAUDE.md 규칙)

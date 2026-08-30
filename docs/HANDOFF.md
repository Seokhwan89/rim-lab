# 작업 인수인계 (세션 간 컨텍스트)

> 새 세션은 CLAUDE.md의 작업 규칙을 따르고, 이 문서로 진행 상황을 파악한다.
> 완료된 항목을 처리하면 이 문서를 갱신하고 함께 커밋한다.

_최종 갱신: 2026-08-30 (2차: 뉴스 갤러리·장비·CV 동기화·특허 링크 세션)_

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
- Advisor 프로필 사진을 상반신 크기(md:w-72)로 확대.

## 남은 작업 (우선순위순)

0. **TE608A(떼이야르관 6층) 연구실 사진**: 2026.07.01 TE208→608A 이전
   (근거: 서준호 안전담당 메일). 옛 2층 사진은 내렸고 뉴스로 이전 소식만
   게시. 6층 사진은 구글 포토에 있다는데 접근 도구가 없음 — 교수가
   사진을 올려주면 labGallery 'Workspace 3 (TE608A)'로 추가.

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
3. **미확인 뉴스 후보** (교수 확인 대기): 포스코DX 산학 '휴머노이드 VLA
   개발' 과제 배정(2026.08.27 메일 — 공개 가능 여부 확인 필요),
   공과대학 뉴스레터 인터뷰, ㈜아이디티 기술이전
4. **Samuel Mekonnen 현재 소속 확인** (교수 확인 대기): 옛 홈페이지에도
   "KangWoon"으로만 적혀 있어 근거가 없다. 메일 근거는 2026.04 UST-KIST
   박사과정 지원 + 교수 추천서까지이며 합격 여부는 미확인. 현재 team.ts는
   소속 없이 비워 둔 상태가 맞다.
5. **Publications 영상 잔여분 3편**: 옛 홈페이지 전수 대조를 끝냈고, 남은
   것은 IEEE Xplore 부록 전용이라 기관 로그인이 필요한 3편뿐이다 —
   Glove-II 8957079, Continuum 9248011, Mitral 카테터 9561146.
   (HANDOFF에 있던 8957292는 유튜브 영상 HTXwTqTGt8E가 확인돼 해결됨.)
   교수가 mp4를 내려받아 주면 public/videos/pubs/에 호스팅하고 ffmpeg로
   포스터를 뽑아 videoThumb에 지정한다.
6. 히어로 배경 heroHighlights 미세조정 (교수가 장면 지정해주면)

## 주의사항

- 뉴스/실적은 메일 등으로 사실 확인된 것만 반영 (협상 중·비공개 건 제외)
- 이미지는 리사이즈(뉴스 1600px, 인물 800px, JPEG q82) 후 커밋
- push 전 npm run build 필수 (CLAUDE.md 규칙)

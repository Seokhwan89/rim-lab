# 연구실 홈페이지를 Claude Code로 만들고 운영하기 — 실전 가이드

> 서강대 기계공학과 정석환 교수 RIM 연구실이 2026년 8~9월에 실제로 거친 과정을
> 다른 연구실이 그대로 따라 할 수 있게 정리한 문서입니다. 이 파일을 Claude Code
> 세션에 통째로 붙여 넣고 "이 방식대로 우리 연구실 홈페이지를 만들어줘"라고
> 하면 됩니다. 결과물 예시: https://rim.sogang.ac.kr

## 0. 한눈에 보기

```
[Claude Code (claude.ai/code, 클라우드)]  ← 채팅으로 지시, 코드·콘텐츠 작성
        │ git push
[GitHub 리포지토리]                          ← 사이트의 유일한 원본
        │ 자동 빌드·배포 (1~2분)
[Vercel 무료 호스팅]  →  https://<프로젝트>.vercel.app
        │ CNAME
[학교 도메인 예: lab.sogang.ac.kr]
```

- 비용 0원(GitHub·Vercel 무료 + Claude 구독). 서버 관리 없음.
- 교수는 코드를 한 줄도 안 봐도 됩니다. "뉴스 추가해줘", "이 사진 팀 페이지에
  넣어줘", "이 PDF 강의자료 올려줘"처럼 채팅(모바일 앱 포함)으로 지시하면 끝.
- 배포까지 Claude가 하고, 교수는 브라우저로 결과만 확인합니다.

## 1. 준비물 (30분, 한 번만)

1. **GitHub 계정** (github.com, 무료) — 리포지토리 1개 생성 (예: `lab-website`, Public).
2. **Vercel 계정** (vercel.com) — "Continue with GitHub"로 가입.
3. **Claude 구독** — claude.ai Pro 이상. 설정 → Connectors에서 **GitHub 연결**
   후 위 리포지토리 접근 허용. (선택) Gmail·Google Drive도 연결하면 Claude가
   메일·드라이브에서 자료를 직접 찾아 씁니다.
4. **claude.ai/code** 접속 → 새 세션 → 리포지토리 선택. 여기서부터 모든 작업.

## 2. 첫 세션에 붙여 넣을 지시문 (복사해서 사용)

```
우리 연구실 홈페이지를 만들자. 조건:
- Next.js(App Router) + Tailwind + TypeScript, 완전 정적 사이트. Vercel 무료 플랜에 배포.
- 메뉴: Home, Opening(모집), Team, Advisor, Research, News, Publications
- 콘텐츠는 전부 content/*.ts 데이터 파일로 분리 (news.ts, team.ts, publications.ts,
  projects.ts, advisor.ts, site.ts). 페이지 코드는 데이터만 읽어 렌더한다.
- 사진은 public/images/에 WebP(긴 변 1200px)로만 저장. 동영상은 리포에 넣지 말고
  YouTube 임베드만 사용. next/image는 갤러리에 쓰지 않는다 (무료 한도 보호).
- 언어: 영어 기본.
- CLAUDE.md에 작업 규칙(콘텐츠는 content/만 수정, 테마 유지, push 전 npm run build,
  교수 지시는 main까지 반영)을 쓰고, docs/HANDOFF.md에 진행 상황을 기록해라.
- 완성되면 GitHub main에 push하고 Vercel 연결 방법을 알려줘.
내 정보: (연구실 이름 / 학과 / 이메일 / 연구 분야 3~5개 / 구성원 명단 / 대표 논문 목록)
```

정보는 나중에 채워도 됩니다. 옛 홈페이지가 있으면 "옛 사이트 <URL>의 내용과
사진을 이관해줘"라고 하면 Claude가 긁어 옵니다.

## 3. Vercel 연결 (한 번만, 5분)

vercel.com → Add New Project → GitHub 리포 선택 → Import → Deploy.
이후로는 Claude가 main에 push할 때마다 자동 배포됩니다.

## 4. 학교 도메인 연결 (전산실 메일 한 통)

1. Vercel 프로젝트 → Settings → Domains → 도메인 추가 → 안내되는 값 확인.
2. 학교 전산실에 메일: "`<도메인>`의 CNAME을 `xxxx.vercel-dns-xxx.com`으로,
   `_vercel.<상위도메인>` TXT 레코드에 `vc-domain-verify=...` 추가 요청".
   (두 가지를 한 번에 요청하면 왕복이 줄어듭니다.)
3. 변경 후 전파 6~8시간. 그 사이 옛/새 사이트가 번갈아 보이거나 Vercel에
   "Failed To Load Cert"가 떠도 정상 — 전파 후 Refresh 누르면 해결.

## 5. 일상 운영 (매번 이렇게)

| 하고 싶은 일 | 채팅에 이렇게 |
|---|---|
| 뉴스 올리기 | "학회 수상 소식 뉴스에 올려줘. 내용: … (사진 첨부)" |
| 구성원 추가/사진 교체 | "김OO 학생 팀 페이지에 추가, 사진 첨부" |
| 논문 추가 | "이 논문 Publications에 추가해줘 (DOI 링크)" |
| 강의자료 | "Lecture 3 PDF 올려줘" (파일 첨부) |
| 메일 기반 갱신 | "내 메일 보고 특허 등록된 거 홈페이지에 반영해줘" (Gmail 연결 시) |
| 점검 | "홈페이지 오류 있는지 전수 점검해줘" |

Claude가 수정 → 빌드 확인 → push → 1~2분 뒤 사이트 반영. 완료 보고에
"배포 확인"이 있으면 끝난 것입니다.

## 6. 무료 한도에서 안전하게 (중요)

Vercel Hobby 월 한도: 데이터 전송 100 GB, 이미지 최적화 변환 5,000회, 함수 호출 100만.
사진이 많은 학과·연구실 사이트가 정지되는 원인은 거의 이 둘입니다:
- **동영상 파일을 리포에 넣음** → 100 GB 순식간. 반드시 YouTube 임베드.
- **next/image로 사진을 서빙** → 변환 5,000회는 방문자 수백 명이면 소진.
  일반 `<img>` + 미리 줄여 둔 WebP로 서빙하면 한도와 무관.
그 외: 캐시 헤더(이미지 30일), robots.txt로 AI 크롤러 차단, 월 1회 Vercel Usage 확인.
정적 사이트라 정 부족하면 Cloudflare Pages(대역폭 무제한 무료)로 1시간이면 이전 가능.

## 7. 알아두면 좋은 것

- **CLAUDE.md**가 핵심입니다. 여기 적힌 규칙은 모든 세션이 자동으로 따릅니다.
  게시 금지 항목(미공개 특허 도면, 보안 과제명 등)은 반드시 여기에 명문화하세요.
- **docs/HANDOFF.md**는 세션 간 인수인계 노트. 새 세션이 이걸 읽고 이어서 일합니다.
- 클라우드 세션은 일회용 컨테이너라 커밋·푸시한 것만 남습니다.
- 자동화: Claude Code의 Routine(예약 실행)으로 "매주 월요일 Gmail을 훑어 뉴스
  초안을 PR로 제안" 같은 일을 걸 수 있습니다. 자동은 제안까지, 게시는 사람이.
- Claude가 배포 사이트에 직접 접속 못 하는 경우가 있습니다(환경 제약). 최종
  확인은 교수가 브라우저로 하면 됩니다.

문의: 정석환 (seokhwan@sogang.ac.kr) — 실제 운영 중인 리포지토리:
https://github.com/Seokhwan89/rim-lab (CLAUDE.md, docs/METHODOLOGY.md 참고)

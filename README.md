# 민경이즘 — 퍼스널 브랜딩 원페이지

25년차 헤어디렉터 · 이미지컨설턴트 · 건국대 겸임교수 **민경**의 단일 페이지 홈페이지.
Next.js(App Router) + Tailwind CSS + Pretendard(CDN). Vercel 배포 전제.

## 디자인 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `primary` | `#c591e4` | 라일락 — CTA·강조 |
| `primary-deep` | `#6b3fa0` | 딥퍼플 — 헤드라인 텍스트 |
| `accent` | `#3ee6a0` | 민트 — 손그림 스퀴글·언더라인 |
| `lavender` | `#f6f3fb` | 섹션 교차 배경 |

- 헤드라인: Pretendard **800/900** (두껍게)
- 본문: Pretendard **400~500** (보통)
- 톤: gamefik 레퍼런스의 친근함 → 라일락 에디토리얼/프리미엄으로 한 톤 업

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
```

## 섹션 구조 (`app/page.jsx`)

Header → Hero → TrustBar → Problem → About → Offers → Archive →
Testimonials → Media → LeadForm → Faq → FinalCta → Footer + FloatingCta

각 섹션은 `components/` 아래 1파일 = 1섹션. 앵커: `#about #offers #archive #testimonials #lead #faq #contact`.

## 배포 전 교체해야 할 항목 (코드 내 `TODO` 주석 표시)

검색: `grep -rn "TODO" app components`

1. **사진** — Hero/About 프로필, 강연 갤러리, 저서 표지, 아카이브 썸네일
2. **숫자** — `TrustBar.jsx`의 누적 교육 인원·출강 기관 수
3. **로고** — `TrustBar.jsx` 마퀴 (텍스트 → 실제 로고 이미지)
4. **링크** — SNS(인스타·유튜브·블로그), 저서 구매, 유튜브 영상 ID, 네이버폼, 카카오 오픈채팅
5. **스티비 연동** — `LeadForm.jsx`: 점선 placeholder div 전체를 스티비 구독폼 **iframe 임베드 코드**로 교체
   - 스티비에서 구독폼(이름/이메일/동의) 생성 → 임베드 코드 복사 → 교체
   - 구독 즉시 **자동 이메일(웰컴)**에 무료자료 다운로드 링크 첨부 → 스티비가 발송
6. **저서/후기/FAQ** — 실제 카피·정책으로 검증·교체
7. **footer** — 사업자 정보, `layout.jsx`의 `metadataBase` 도메인, OG 이미지(`/og-image.png`)

## Vercel 배포

GitHub 연결 후 import → 별도 설정 없이 자동 감지(Next.js). 환경변수 불필요(현재 정적).

import "./globals.css";

export const metadata = {
  // TODO: 실제 배포 도메인으로 교체
  metadataBase: new URL("https://minkyoungism.vercel.app"),
  title: "민경이즘 | 25년차 헤어디렉터 · 이미지컨설턴트",
  description:
    "첫인상을 바꾸는 헤어 × 이미지메이킹. 1:1 컨설팅, VOD, 전자책부터 기업 강연·교육까지. 건국대 겸임교수 민경이 함께합니다.",
  openGraph: {
    title: "민경이즘 | 25년차 헤어디렉터 · 이미지컨설턴트",
    description:
      "첫인상을 바꾸는 헤어 × 이미지메이킹. 무료 헤어 가이드 받기.",
    type: "website",
    // TODO: 실제 OG 이미지 경로로 교체
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

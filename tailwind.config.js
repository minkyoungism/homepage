/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 민경이즘 디자인 토큰 (gamefik 톤 → 라일락 에디토리얼)
        primary: "#c591e4",        // 라일락 (CTA·강조)
        "primary-deep": "#6b3fa0", // 딥퍼플 (헤드라인 텍스트)
        "primary-soft": "#efe2f8", // 연라일락 (배지·원형 배경)
        accent: "#3ee6a0",         // 민트 (손그림 스퀴글·언더라인)
        ink: "#1f1a2e",            // 본문 텍스트
        "ink-soft": "#6b6577",     // 보조 텍스트
        lavender: "#f6f3fb",       // 섹션 교차 배경
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(107, 63, 160, 0.18)",
        "card-hover": "0 18px 50px -12px rgba(107, 63, 160, 0.30)",
        pill: "0 8px 24px -6px rgba(197, 145, 228, 0.55)",
      },
      backgroundImage: {
        "grad-number": "linear-gradient(90deg, #c591e4 0%, #f4a6d7 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

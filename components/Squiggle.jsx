// 배경 손그림 민트 스퀴글 (장식용). gamefik 레퍼런스의 붓터치 라인 재현.
export default function Squiggle({ className = "", flip = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 120"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M10 20c30 0 40 80 70 80s30-70 60-70 40 60 70 40"
        stroke="#3ee6a0"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

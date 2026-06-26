"use client";

import { useEffect, useRef, useState } from "react";

// TODO: 실제 수치로 교체
const STATS = [
  { value: 25, suffix: "년", label: "헤어 현장 경력" },
  { value: 10, suffix: "년+", label: "대학 강의 경력" },
  { value: 5000, suffix: "명+", label: "누적 교육 인원" },
  { value: 30, suffix: "곳+", label: "출강 기업·기관" },
];

// TODO: 실제 로고 이미지로 교체 (텍스트 → 이미지)
const LOGOS = [
  "건국대학교",
  "교육연수원",
  "○○기업",
  "○○협회",
  "○○방송",
  "○○문화센터",
];

function useCountUp(target, run) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf;
    const duration = 1400;
    let start;
    const step = (t) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return n;
}

function Stat({ value, suffix, label, run }) {
  const n = useCountUp(value, run);
  return (
    <div className="text-center">
      <div className="grad-number text-4xl font-extrabold sm:text-5xl">
        {n.toLocaleString()}
        <span className="text-3xl sm:text-4xl">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-bold text-ink sm:text-base">{label}</div>
    </div>
  );
}

export default function TrustBar() {
  const [run, setRun] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-lavender">
      <div ref={ref} className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <p className="text-center text-lg font-bold text-ink-soft">
          숫자로 증명하는{" "}
          <span className="text-primary-deep">25년의 신뢰</span>
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} run={run} />
          ))}
        </div>

        {/* 로고 마퀴 */}
        <div className="marquee-mask mt-14 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-lg font-bold text-ink/30 grayscale"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

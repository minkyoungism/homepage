"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "소개" },
  { href: "#offers", label: "상품" },
  { href: "#archive", label: "무료 아카이브" },
  { href: "#testimonials", label: "후기" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_4px_24px_-12px_rgba(107,63,160,0.25)] backdrop-blur"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-6">
        {/* 로고 */}
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-lg font-black text-white">
            민
          </span>
          <span className="text-xl font-extrabold tracking-tight text-ink">
            민경이즘
          </span>
        </a>

        {/* 데스크탑 내비 */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[15px] font-semibold text-ink-soft transition-colors hover:text-primary-deep"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* 우측 상시 CTA */}
        <div className="flex items-center gap-2">
          <a href="#lead" className="hidden btn-primary !px-5 !py-2.5 text-sm sm:inline-flex">
            무료자료 받기
          </a>
          {/* 모바일 햄버거 */}
          <button
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-primary-soft md:hidden"
          >
            <div className="space-y-[5px]">
              <span className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <nav className="border-t border-primary-soft bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-semibold text-ink hover:bg-lavender"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#lead"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              무료자료 받기
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Squiggle from "./Squiggle";

const BENEFITS = [
  "내 얼굴형 자가진단법 — 거울 하나로 끝",
  "피해야 할 스타일 vs 어울리는 스타일 정리",
  "일상에서 헤어 실수를 줄이는 3가지 습관",
];

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="lead" className="relative overflow-hidden bg-white">
      <Squiggle className="absolute right-6 top-10 hidden h-24 w-40 opacity-90 lg:block" />
      <div className="section-pad">
        <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-[2rem] border border-primary-soft bg-lavender p-7 shadow-card md:grid-cols-2 md:p-12">
          {/* 좌: 카피 + 이득 */}
          <div>
            <span className="eyebrow">무료 자료 신청</span>
            <h2 className="text-2xl font-extrabold leading-snug text-ink sm:text-3xl">
              이름과 이메일만 남기면,
              <br />
              <span className="text-primary-deep">얼굴형별 헤어 가이드</span>를{" "}
              <span className="squiggle">무료로</span> 보내드립니다
            </h2>

            <ul className="mt-7 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-white">
                    ✓
                  </span>
                  <span className="font-medium text-ink">{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm text-ink-soft">
              스팸 없이, 진짜 도움 되는 자료만 보냅니다. 언제든 구독 해지 가능.
            </p>
          </div>

          {/* 우: 폼 */}
          <div className="rounded-card bg-white p-2 shadow-card">
            <div className="rounded-2xl p-6">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-2xl text-white">
                    ✓
                  </span>
                  <p className="text-xl font-extrabold text-ink">신청이 완료됐어요!</p>
                  <p className="text-ink-soft">
                    입력하신 이메일로 헤어 가이드를 보내드렸습니다.
                    <br />
                    스팸함도 확인해주세요.
                  </p>
                </div>
              ) : (
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="이름"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-[14px] border border-primary-soft px-4 py-3 outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="이메일"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-[14px] border border-primary-soft px-4 py-3 outline-none focus:border-primary"
                  />
                  <label className="flex items-start gap-2 text-sm text-ink-soft">
                    <input
                      type="checkbox"
                      className="mt-1 accent-primary"
                      required
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                    />
                    <span>개인정보 수집·이용에 동의합니다. (필수)</span>
                  </label>
                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      오류가 발생했습니다. 다시 시도해주세요.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full disabled:opacity-60"
                  >
                    {status === "loading" ? "신청 중..." : "무료 자료 받기"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Squiggle from "./Squiggle";

// 무료자료 DB 수집 — 1차 전환 목표 섹션
const BENEFITS = [
  "내 얼굴형 자가진단법 — 거울 하나로 끝",
  "피해야 할 스타일 vs 어울리는 스타일 정리",
  "일상에서 헤어 실수를 줄이는 3가지 습관",
];

export default function LeadForm() {
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

          {/* 우: 스티비 임베드 자리 */}
          <div>
            {/*
              ┌─────────────────────────────────────────────────────────────┐
              │ 스티비(stibee) 연동 — 방식 A (iframe 임베드)                  │
              │ 1) 스티비 → 구독폼 만들기 → 이름/이메일/동의 체크박스 구성     │
              │ 2) 발급된 임베드 코드(iframe)를 아래 placeholder 자리에 교체   │
              │ 3) 구독 즉시 '자동 이메일(웰컴)'에 무료자료 다운로드 링크 첨부 │
              │    → 홈페이지가 아니라 스티비가 자료를 발송함                  │
              │                                                               │
              │ 예시:                                                         │
              │ <iframe src="https://stibee.com/api/v1.0/lists/XXXX/..." ... />│
              └─────────────────────────────────────────────────────────────┘
            */}
            <div className="rounded-card bg-white p-2 shadow-card">
              {/* TODO: 아래 div 전체를 스티비 iframe 임베드 코드로 교체 */}
              <div className="rounded-2xl border-2 border-dashed border-primary/40 p-6">
                <p className="mb-4 text-center text-sm font-bold text-primary-deep">
                  스티비 구독폼 임베드 자리
                </p>

                {/* 디자인 참고용 더미 폼 (스티비 임베드로 교체 시 삭제) */}
                <form
                  className="space-y-3"
                  onSubmit={(e) => e.preventDefault()}
                  aria-label="무료자료 신청 (데모)"
                >
                  <input
                    type="text"
                    placeholder="이름"
                    className="w-full rounded-[14px] border border-primary-soft px-4 py-3 outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="이메일"
                    className="w-full rounded-[14px] border border-primary-soft px-4 py-3 outline-none focus:border-primary"
                  />
                  <label className="flex items-start gap-2 text-sm text-ink-soft">
                    <input type="checkbox" className="mt-1 accent-primary" required />
                    <span>
                      개인정보 수집·이용에 동의합니다. (필수)
                    </span>
                  </label>
                  <button type="submit" className="btn-primary w-full">
                    무료 자료 받기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

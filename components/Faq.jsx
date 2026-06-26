"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "1:1 컨설팅은 어떻게 진행되나요? (시간·장소·비용)",
    a: "사전 진단 후 오프라인 또는 온라인으로 진행됩니다. 진행 시간과 비용은 컨설팅 종류에 따라 안내드리며, 문의 주시면 상세히 답변드립니다.",
  },
  {
    q: "기업 강연 견적은 어떻게 받나요?",
    a: "강연 주제·인원·일정을 문의 폼이나 카카오 채널로 보내주시면 맞춤 견적을 보내드립니다.",
  },
  {
    q: "VOD는 결제 후 언제까지 볼 수 있나요?",
    a: "결제 후 일정 기간 무제한 시청이 가능합니다. (구체적 기간은 상품 페이지 안내 참고) — TODO: 실제 정책 확정",
  },
  {
    q: "지방·온라인 강연도 가능한가요?",
    a: "네, 전국 출강과 온라인(실시간/녹화) 강연 모두 가능합니다.",
  },
  {
    q: "무료자료는 어떤 내용인가요?",
    a: "얼굴형별 헤어 가이드 정리본으로, 자가진단법과 어울리는 스타일 가이드를 담았습니다. 이름·이메일만 남기면 바로 받아보실 수 있습니다.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-primary-soft bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-ink">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 leading-relaxed text-ink-soft">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">자주 묻는 질문</span>
        <h2 className="h-section">
          궁금한 점, <span className="squiggle">여기 있어요</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {FAQS.map((f) => (
          <Item key={f.q} {...f} />
        ))}
      </div>
    </section>
  );
}

const PAINS = [
  {
    emoji: "💭",
    text: "분명 머리를 했는데, 왜 어수선하고 손이 안 가요",
  },
  {
    emoji: "🪞",
    text: "내 얼굴형엔 뭐가 어울리는지 도무지 모르겠어요",
  },
  {
    emoji: "🏢",
    text: "직원들 이미지·서비스 교육, 어디에 맡길지 막막해요",
    biz: true,
  },
  {
    emoji: "🔁",
    text: "거울 앞에서 매일 같은 실수를 반복하고 있어요",
  },
];

export default function Problem() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">고민 공감</span>
        <h2 className="h-section">
          혹시 이런 고민, <span className="squiggle">있으신가요?</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {PAINS.map((p) => (
          <div
            key={p.text}
            className="flex items-start gap-4 rounded-card border border-primary-soft bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lavender text-2xl">
              {p.emoji}
            </span>
            <div>
              {p.biz && (
                <span className="mb-1 inline-block rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-bold text-primary-deep">
                  기업·기관
                </span>
              )}
              <p className="text-lg font-semibold leading-relaxed text-ink">
                “{p.text}”
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-lg font-bold text-ink">
        그 고민, 25년 현장과 강단에서{" "}
        <span className="text-primary-deep">답을 찾아왔습니다.</span>
      </p>
    </section>
  );
}

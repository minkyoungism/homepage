"use client";

// 후기 슬라이더 + 강연 갤러리
// TODO: 실제 후기/사진으로 교체. 사진 없으면 텍스트 후기부터 노출.
const REVIEWS = [
  {
    name: "김○○",
    tag: "1:1 컨설팅",
    body: "얼굴형에 맞는 기준을 처음 알았어요. 미용실 가서 더 이상 헤매지 않아요.",
  },
  {
    name: "이○○",
    tag: "VOD 수강",
    body: "집에서 따라 했는데 진짜 미용실 결이 나와서 놀랐습니다. 강추!",
  },
  {
    name: "○○기업 인사팀",
    tag: "기업 교육",
    body: "직원 만족도가 눈에 띄게 올랐습니다. 현장감 있는 강의였어요.",
  },
  {
    name: "박○○",
    tag: "외부 강연",
    body: "이미지메이킹 특강 이후 발표 자신감이 완전히 달라졌어요.",
  },
];

// TODO: 강연 현장 사진 3~6장으로 교체
const GALLERY = [1, 2, 3, 4, 5, 6];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">후기 · 강연 현장</span>
        <h2 className="h-section">
          결과로 <span className="squiggle">증명합니다</span>
        </h2>
      </div>

      {/* 후기 슬라이더 (가로 스냅 스크롤) */}
      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="w-[300px] shrink-0 snap-start rounded-card border border-primary-soft bg-white p-7 shadow-card sm:w-[360px]"
          >
            <div className="mb-3 text-primary">★★★★★</div>
            <blockquote className="text-lg font-semibold leading-relaxed text-ink">
              “{r.body}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              {/* TODO: 프로필 이미지 */}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft font-bold text-primary-deep">
                {r.name.slice(0, 1)}
              </span>
              <span>
                <span className="block font-bold text-ink">{r.name}</span>
                <span className="block text-sm text-ink-soft">{r.tag}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* 강연 사진 갤러리 */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {GALLERY.map((g) => (
          <div
            key={g}
            className="grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-primary-soft text-sm font-semibold text-primary-deep/40"
          >
            {/* TODO: 강연 현장 사진 교체 */}
            강연 사진 {g}
          </div>
        ))}
      </div>
    </section>
  );
}

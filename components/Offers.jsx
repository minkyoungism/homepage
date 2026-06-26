// 상품 — B2C / B2B 시각적 분리
const B2C = [
  {
    title: "1:1 이미지·헤어 컨설팅",
    desc: "얼굴형·헤어 기반 맞춤 진단. 다신 머리 망치지 않는 기준을 잡아드립니다.",
    cta: "신청하기",
    href: "#contact",
  },
  {
    title: "VOD 온라인 강의",
    desc: "언제 어디서나 따라 하는 실전 스타일링. 집에서 만드는 미용실 퀄리티.",
    cta: "수강하기",
    href: "#contact",
  },
  {
    title: "전자책",
    desc: "핵심만 압축한 실전 가이드. 평생 소장하는 헤어 교과서.",
    cta: "구매하기",
    href: "#contact",
  },
];

const B2B = [
  {
    title: "외부 강연",
    desc: "이미지메이킹 · 퍼스널 브랜딩 특강. 단체·협회·대학 대상.",
    cta: "강연 문의",
    href: "#contact",
  },
  {
    title: "기업 교육",
    desc: "직원 이미지·서비스 역량 교육. 기업·기관 맞춤 커리큘럼.",
    cta: "견적 문의",
    href: "#contact",
  },
];

function Card({ item, tone }) {
  return (
    <div className="group flex flex-col rounded-card border border-primary-soft bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
      <span
        className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${
          tone === "b2c"
            ? "bg-primary-soft text-primary-deep"
            : "bg-accent/20 text-emerald-700"
        }`}
      >
        {tone === "b2c" ? "개인" : "기업·기관"}
      </span>
      <h3 className="text-xl font-extrabold text-ink">{item.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{item.desc}</p>
      <a
        href={item.href}
        className="mt-6 inline-flex items-center gap-1.5 font-bold text-primary-deep transition-transform group-hover:translate-x-1"
      >
        {item.cta} <span aria-hidden>→</span>
      </a>
    </div>
  );
}

export default function Offers() {
  return (
    <section id="offers" className="section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">상품 안내</span>
        <h2 className="h-section">
          당신에게 맞는 <span className="squiggle">시작점</span>
        </h2>
        <p className="mt-4 text-ink-soft">
          개인이든 기업이든, 필요한 만큼만 함께합니다.
        </p>
      </div>

      {/* B2C */}
      <div className="mt-14">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-extrabold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-sm text-white">
            🙋
          </span>
          개인을 위한 상품
        </h3>
        <div className="grid gap-5 md:grid-cols-3">
          {B2C.map((i) => (
            <Card key={i.title} item={i} tone="b2c" />
          ))}
        </div>
      </div>

      {/* B2B */}
      <div className="mt-12">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-extrabold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500 text-sm text-white">
            🏢
          </span>
          기업 · 기관을 위한 상품
        </h3>
        <div className="grid gap-5 md:grid-cols-2">
          {B2B.map((i) => (
            <Card key={i.title} item={i} tone="b2b" />
          ))}
        </div>
      </div>
    </section>
  );
}

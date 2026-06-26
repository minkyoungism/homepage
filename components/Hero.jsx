import Squiggle from "./Squiggle";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute -top-20 right-[-120px] h-[420px] w-[420px] rounded-full bg-primary-soft/60 blur-3xl" />
      <Squiggle className="absolute left-2 top-40 hidden h-28 w-44 opacity-90 md:block" />

      <div className="section-pad grid items-center gap-12 !py-16 md:!py-24 lg:grid-cols-2">
        {/* 좌측 텍스트 */}
        <div className="animate-fade-up">
          <span className="eyebrow">건국대 겸임교수 · 이미지박사 · 25년차 현장 미용교수</span>
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-[3.4rem]">
            머리 하나 바꿨을 뿐인데,
            <br />
            <span className="text-primary-deep">첫인상</span>이{" "}
            <span className="squiggle">달라졌습니다</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            25년간 사람을 바꿔온 단 하나의 공식 — 헤어 × 이미지메이킹.
            <br className="hidden sm:block" />
            개인 이미지 컨설팅부터 기업 강연까지, 현장과 학문을 모두 아는
            전문가가 함께합니다.
          </p>

          {/* 듀얼 CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#lead" className="btn-primary text-base">
              무료 헤어 가이드 받기
            </a>
            <a href="#contact" className="btn-outline text-base">
              강연 · 기업교육 문의
            </a>
          </div>

          {/* 신뢰 한 줄 */}
          <p className="mt-7 text-sm font-medium text-ink-soft">
            건국대 겸임교수 · 이미지박사 · 25년차 현장 미용교수
          </p>
        </div>

        {/* 우측 프로필 사진 */}
        <div className="relative mx-auto w-full max-w-md animate-fade-up">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-primary/25" />
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary-soft shadow-card">
            {/* TODO: 프로필 사진 교체 (밝고 신뢰감 있는 정장/현장 컷) */}
            <div className="grid h-full w-full place-items-center text-primary-deep/40">
              <span className="text-center text-sm font-semibold">
                프로필 사진
                <br />
                (4:5)
              </span>
            </div>
          </div>
          {/* 떠있는 작은 배지 */}
          <div className="absolute -left-4 bottom-10 rounded-2xl bg-white px-4 py-3 shadow-card">
            <p className="text-xs font-bold text-ink-soft">현장 경력</p>
            <p className="text-xl font-extrabold text-primary-deep">25년+</p>
          </div>
        </div>
      </div>
    </section>
  );
}

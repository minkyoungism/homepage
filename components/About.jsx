import Squiggle from "./Squiggle";

// TODO: 실제 이력으로 검증·교체
const CREDENTIALS = [
  "건국대학교 교육대학원 겸임교수 (강의 10년차)",
  "이미지박사 — 건국대 일반대학원 향장미물학",
  "교육학석사 — 건국대 교육대학원 미용교육",
  "MIN BEAUTY HAIR 대표 (Since 2009 · 25년차)",
  "저서 『행복한 성공이미지』",
];

export default function About() {
  return (
    <section id="about" className="bg-lavender">
      <div className="section-pad grid items-center gap-12 lg:grid-cols-2">
        {/* 좌: 사진 */}
        <div className="relative mx-auto w-full max-w-md">
          <Squiggle flip className="absolute -right-6 -top-8 h-20 w-32 opacity-90" />
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-card">
            {/* TODO: 강의/현장 분위기의 다른 컷으로 교체 */}
            <div className="grid h-full w-full place-items-center text-primary-deep/40">
              <span className="text-center text-sm font-semibold">
                강의 · 현장 사진
                <br />
                (4:5)
              </span>
            </div>
          </div>
        </div>

        {/* 우: 스토리 + 자격 */}
        <div>
          <span className="eyebrow">전문가 소개</span>
          <h2 className="h-section">
            왜 이 사람이어야 <span className="text-primary-deep">할까요</span>
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              현장 미용사로 시작해 25년. 수많은 분의 머리를 만지며 깨달은 건,
              <span className="font-semibold text-ink">
                {" "}
                ‘머리’가 결국 그 사람의 첫인상 전체를 바꾼다
              </span>
              는 사실이었습니다.
            </p>
            <p>
              그 깨달음을 학문으로 가져와 박사·겸임교수가 되었고, 이제는 개인
              컨설팅부터 기업 강연까지{" "}
              <span className="font-semibold text-ink">
                현장과 학문을 모두 아는 단 한 사람
              </span>
              으로 함께합니다.
            </p>
          </div>

          {/* 자격 리스트 */}
          <ul className="mt-8 space-y-3">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-black text-white">
                  ✓
                </span>
                <span className="font-medium text-ink">{c}</span>
              </li>
            ))}
          </ul>

          {/* 채널 링크 */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* TODO: 실제 SNS 링크로 교체 */}
            <a href="#" className="text-sm font-bold text-primary-deep underline-offset-4 hover:underline">
              인스타그램 ↗
            </a>
            <a href="#" className="text-sm font-bold text-primary-deep underline-offset-4 hover:underline">
              유튜브 ↗
            </a>
            <a href="#" className="text-sm font-bold text-primary-deep underline-offset-4 hover:underline">
              블로그 ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

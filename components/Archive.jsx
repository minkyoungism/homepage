// 무료 아카이브 — 기존 archive1-beta 사이트 연결
// TODO: 실제 아카이브 URL로 교체
const ARCHIVE_URL = "https://archive1-beta.example.com";

// TODO: 후킹 강한 No.01·03·17 등으로 썸네일 교체
const PREVIEWS = [
  { no: "01", title: "얼굴형별 가르마 황금비율" },
  { no: "03", title: "다음 날 망치지 않는 드라이 순서" },
  { no: "17", title: "면접·발표용 5분 정리 헤어" },
  { no: "19", title: "집에서 미용실 결 만드는 법" },
];

export default function Archive() {
  return (
    <section id="archive" className="bg-lavender">
      <div className="section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">무료 콘텐츠</span>
          <h2 className="h-section">
            미용실에서만 알려주던{" "}
            <span className="text-primary-deep">실전 헤어팁 19</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            ‘주는 사람’의 진심. 핵심 노하우를 무료로 미리 만나보세요.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEWS.map((p) => (
            <a
              key={p.no}
              href={ARCHIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-card bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* TODO: 썸네일 이미지로 교체 */}
              <div className="relative grid aspect-[4/3] place-items-center bg-primary-soft">
                <span className="text-5xl font-black text-primary-deep/30">
                  No.{p.no}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-primary-deep">
                  TIP {p.no}
                </p>
                <p className="mt-1 font-bold leading-snug text-ink">
                  {p.title}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={ARCHIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            전체 아카이브 보기
          </a>
        </div>
      </div>
    </section>
  );
}

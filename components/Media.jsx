// 미디어 & 저서 — Authority 강화
// TODO: 실제 구매 링크 / 유튜브 영상 ID로 교체
const BOOK_BUY_URL = "https://product.kyobobook.co.kr/"; // 교보문고 예시
const YOUTUBE_ID = "dQw4w9WgXcQ"; // TODO: 대표 영상 ID 교체

export default function Media() {
  return (
    <section className="bg-lavender">
      <div className="section-pad grid items-center gap-12 lg:grid-cols-2">
        {/* 저서 */}
        <div>
          <span className="eyebrow">저서 · 미디어</span>
          <h2 className="h-section">
            글로도 증명된 <span className="text-primary-deep">전문성</span>
          </h2>
          <div className="mt-8 flex gap-6">
            {/* TODO: 저서 표지 이미지 교체 */}
            <div className="grid aspect-[3/4] w-36 shrink-0 place-items-center rounded-xl bg-white text-center text-xs font-semibold text-primary-deep/40 shadow-card">
              저서 표지
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xl font-extrabold text-ink">
                『행복한 성공이미지』
              </p>
              <p className="mt-2 leading-relaxed text-ink-soft">
                이미지가 곧 경쟁력인 시대, 누구나 적용할 수 있는 실전 이미지
                전략을 담았습니다.
              </p>
              <a
                href={BOOK_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 w-fit !px-6 !py-3 text-sm"
              >
                구매하러 가기
              </a>
            </div>
          </div>
        </div>

        {/* 유튜브 임베드 */}
        <div>
          <div className="aspect-video overflow-hidden rounded-card bg-black shadow-card">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="민경이즘 대표 영상"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-ink-soft">
            {/* TODO: 영상 설명/채널 링크 교체 */}
            유튜브 채널에서 더 많은 헤어·이미지 콘텐츠를 만나보세요.
          </p>
        </div>
      </div>
    </section>
  );
}

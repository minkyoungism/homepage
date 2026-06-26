// 최종 CTA — 라일락 풀블리드 띠 (gamefik 보라 띠 → 라일락)
// TODO: 실제 네이버폼 / 카카오 오픈채팅 링크로 교체
const LINKS = {
  consult: "https://naver.me/form-1on1",
  biz: "https://naver.me/form-biz",
  kakao: "https://open.kakao.com/o/your-channel",
};

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary">
      {/* 점 패턴 장식 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 2px, transparent 2px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          당신의 인상은 바뀔 수 있습니다.
          <br />
          지금 시작하세요.
        </h2>
        <p className="mt-5 text-lg text-white/85">
          어떤 문의든 편하게 남겨주세요. 가장 빠른 길을 안내해 드립니다.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={LINKS.consult}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white text-base"
          >
            1:1 컨설팅 문의
          </a>
          <a
            href={LINKS.biz}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white text-base"
          >
            기업교육 · 강연 문의
          </a>
          <a
            href={LINKS.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-7 py-3.5 font-bold text-[#3c1e1e] shadow-md transition-transform hover:-translate-y-0.5"
          >
            카카오 오픈채팅 상담
          </a>
        </div>
      </div>
    </section>
  );
}

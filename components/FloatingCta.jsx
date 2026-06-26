"use client";

// TODO: 실제 카카오 오픈채팅 링크로 교체
const KAKAO_URL = "https://open.kakao.com/o/your-channel";

export default function FloatingCta() {
  return (
    <>
      {/* 카카오 채팅 플로팅 (우측 하단 고정) — 데스크탑/모바일 공통 */}
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오 오픈채팅 상담"
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#FEE500] text-2xl shadow-lg transition-transform hover:-translate-y-1 md:bottom-6"
      >
        💬
      </a>

      {/* 모바일 하단 플로팅 2버튼 */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-primary-soft bg-white/95 p-3 backdrop-blur md:hidden">
        <a href="#lead" className="btn-primary flex-1 !py-3 text-sm">
          무료자료 받기
        </a>
        <a href="#contact" className="btn-outline flex-1 !py-3 text-sm">
          상담 문의
        </a>
      </div>
    </>
  );
}

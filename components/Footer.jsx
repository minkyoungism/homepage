export default function Footer() {
  return (
    <footer className="bg-ink pb-20 text-white md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-4">
        {/* 브랜드 */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-lg font-black text-white">
              민
            </span>
            <span className="text-xl font-extrabold">민경이즘</span>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-white/60">
            헤어디렉터 · 이미지컨설턴트 · 건국대 겸임교수.
            <br />
            첫인상을 바꾸는 헤어 × 이미지메이킹.
          </p>
        </div>

        {/* 문의 */}
        <div>
          <h4 className="mb-4 font-bold text-white/90">문의</h4>
          <ul className="space-y-2 text-white/60">
            <li>
              <a href="#contact" className="hover:text-primary">
                기업교육 · 강연
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                1:1 컨설팅
              </a>
            </li>
            <li>
              {/* TODO: 카카오 오픈채팅 링크 */}
              <a href="#contact" className="hover:text-primary">
                카카오 오픈채팅
              </a>
            </li>
          </ul>
        </div>

        {/* 채널 */}
        <div>
          <h4 className="mb-4 font-bold text-white/90">채널</h4>
          <ul className="space-y-2 text-white/60">
            {/* TODO: 실제 링크로 교체 */}
            <li><a href="#" className="hover:text-primary">인스타그램</a></li>
            <li><a href="#" className="hover:text-primary">유튜브</a></li>
            <li><a href="#" className="hover:text-primary">블로그</a></li>
            <li><a href="#" className="hover:text-primary">교보문고 (저서)</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 민경이즘 (MIN BEAUTY HAIR). All rights reserved.</p>
          {/* TODO: 사업자 정보 기입 */}
          <p>대표 ○○○ · 사업자등록번호 000-00-00000</p>
        </div>
      </div>
    </footer>
  );
}

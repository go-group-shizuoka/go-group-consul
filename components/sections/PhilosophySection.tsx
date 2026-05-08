export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-[#1a1a1a] border-b border-[#262626]"
    >
      <div className="max-w-3xl">
        <span className="brand-label">01 Philosophy</span>

        <h2
          className="text-4xl md:text-6xl text-white leading-tight mb-14"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          経営者は、孤独だ。
        </h2>

        <div className="brand-body">
          <p>
            正しいことをしているはずなのに、数字が伴わない。<br />
            良いサービスを作ったのに、人が来ない。<br />
            スタッフのために動いているのに、離職が止まらない。
          </p>

          <p>
            誰にも言えない夜が、ある。
          </p>

          <p>
            私はそういう経営者だった。<br />
            福祉の仕事に誇りを持ちながら、<br />
            経営の壁にぶつかり続けた。
          </p>
        </div>

        {/* 強調ブロック */}
        <div className="mt-14 border-l border-orange-500/60 pl-5">
          <p
            className="text-white text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
          >
            役員は今でも、私一人です。
          </p>
          <p className="text-[#444] text-xs mt-2 leading-loose">
            4施設を運営しながら、すべての責任を一人で背負っている。<br />
            それが、私がこの仕事を続ける理由でもある。
          </p>
        </div>

        {/* ③ */}
        <div className="mt-16 pt-12 border-t border-[#262626]">
          <p
            className="text-[#333] text-base md:text-lg leading-relaxed"
            style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
          >
            守ると決めたから、続けてきた。
          </p>
        </div>
      </div>
    </section>
  );
}

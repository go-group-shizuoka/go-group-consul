export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] border-b border-[#1a1a1a]"
    >
      <div className="max-w-3xl">
        <span className="brand-label">01 Philosophy</span>

        <h2
          className="text-4xl md:text-6xl text-white leading-tight mb-14"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
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
            style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
          >
            役員は今でも、私一人です。
          </p>
          <p className="text-[#444] text-xs mt-2 leading-loose">
            4施設を運営しながら、すべての責任を一人で背負っている。<br />
            それが、私がこの仕事を続ける理由でもある。
          </p>
        </div>

        <div className="w-[1px] h-14 bg-gradient-to-b from-orange-500/40 to-transparent mt-12 ml-1" />
      </div>
    </section>
  );
}

// 代表の独白 — 経歴ではなく、12年間の現場から生まれた言葉を並べる

export default function RepresentativeSection() {
  return (
    <section
      id="representative"
      className="py-32 md:py-56 px-6 md:px-16 lg:px-24 bg-[#1a1a1a]"
    >
      {/* 圧倒的な余白の中に、独白だけを置く */}
      <div className="max-w-2xl">
        <span className="brand-label">代表の独白</span>

        {/* キャッチコピー */}
        <h2
          className="text-3xl md:text-4xl text-[#f7f7f7] leading-[1.8] mb-20 md:mb-28"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          12年間、私はこの場所で、<br />
          命の重さを学び続けてきました。
        </h2>

        {/* 独白 */}
        <div className="space-y-12 text-[#666] text-sm leading-[2.4]"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          <p>
            子どもの泣き声で目が覚めた夜が、何度もあった。<br />
            施設が足りない。人手が足りない。お金が足りない。<br />
            正しいことをしているはずなのに、<br />
            正しさだけでは続かなかった。
          </p>

          <p>
            それでも、やめなかった。<br />
            やめられなかった、というほうが正確かもしれない。
          </p>

          <p>
            12年間、現場に立ち続けて気づいたことがある。<br />
            経営とは、愛情を持続させる技術だということを。<br />
            子どもを守るには、施設を守らなければならない。<br />
            施設を守るには、経営を学ばなければならない。<br />
            それが、私がマーケティングや財務を独学した理由だ。
          </p>

          <p>
            今でも、役員は私一人だ。<br />
            孤独な夜は、今もある。<br />
            それでも、翌朝には現場に立つ。<br />
            それが、私の仕事だ。
          </p>
        </div>

        {/* 区切り */}
        <div className="w-8 h-[1px] bg-orange-500/40 my-16 md:my-20" />

        {/* 署名 — 最小限 */}
        <div>
          <p
            className="text-[#f7f7f7] text-lg tracking-widest mb-1"
            style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
          >
            林 康義
          </p>
          <p className="text-[#2a2a2a] text-[10px] tracking-[0.4em]">
            GO GROUP 代表
          </p>
        </div>
      </div>
    </section>
  );
}

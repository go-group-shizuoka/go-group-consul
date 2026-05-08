export default function StorySection() {
  return (
    <section
      id="story"
      className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-[#1a1a1a] border-b border-[#262626] overflow-hidden"
    >
      {/* 背景テキスト */}
      <div
        className="absolute top-1/2 right-[-2vw] -translate-y-1/2 text-[22vw] font-black text-white/[0.02] select-none pointer-events-none leading-none"
        style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        aria-hidden="true"
      >
        120
      </div>

      <div className="relative max-w-3xl">
        <span className="brand-label">02 Story</span>

        <h2
          className="text-4xl md:text-6xl text-white leading-tight mb-14"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          軽トラック10台と、<br />
          <span className="text-[#333]">120万円から始まった。</span>
        </h2>

        <div className="brand-body">
          <p>
            施設を立ち上げた日、<br />
            道具を積んだ軽トラックが10台並んだ。<br />
            手元にあったのは、120万円だけだった。
          </p>

          <p>
            「なぜ、正しいことをしているのに続けられないのか」<br />
            その問いが、私を経営の世界へ引き込んだ。
          </p>

          <p>
            マーケティング、財務、人事、組織設計。<br />
            福祉の現場で学ぶべきでないと思っていたことを、<br />
            すべて独学で身につけた。
          </p>

          <p>
            そして気づいた。<br />
            経営を学ぶことは、子どもを守ることだと。
          </p>
        </div>

        <div className="w-10 h-[1px] bg-[#2a2a2a] mt-14" />
      </div>
    </section>
  );
}

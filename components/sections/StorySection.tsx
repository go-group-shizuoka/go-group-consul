export default function StorySection() {
  return (
    <section
      id="story"
      className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] border-b border-[#1a1a1a] overflow-hidden"
    >
      {/* 背景テキスト */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.025] select-none pointer-events-none leading-none"
        style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        aria-hidden="true"
      >
        120
      </div>

      <div className="relative max-w-3xl">
        <span className="brand-label">02 Story</span>

        <h2
          className="text-4xl md:text-6xl text-white leading-tight mb-14"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          120万円。<br />
          <span className="text-[#333]">それが、始まりの数字だった。</span>
        </h2>

        <div className="brand-body">
          <p>
            施設を開いたばかりの頃、<br />
            毎月120万円の赤字が続いた。
          </p>

          <p>
            「なぜ、正しいことをしているのに続けられないのか」<br />
            その問いが、私を経営の世界に引き込んだ。
          </p>

          <p>
            マーケティング、財務、人事、組織設計。<br />
            福祉の現場で学ぶべきでないと思っていたことを、<br />
            学ばざるを得なかった。
          </p>

          <p>
            そして気づいた。<br />
            経営を学ぶことは、子どもを守ることだと。
          </p>
        </div>

        {/* 区切り */}
        <div className="w-10 h-[1px] bg-[#2a2a2a] mt-16" />
      </div>
    </section>
  );
}

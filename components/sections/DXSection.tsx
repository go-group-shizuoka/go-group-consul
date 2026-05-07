export default function DXSection() {
  return (
    <section
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#111111] border-b border-[#1a1a1a]"
    >
      <div className="max-w-3xl">
        <span className="brand-label">05 DX</span>

        <h2
          className="text-4xl md:text-6xl text-white leading-tight mb-14"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          DXは、<br />
          効率化のためではない。
        </h2>

        <div className="brand-body">
          <p>
            業務を自動化したいわけではない。<br />
            スタッフの時間を奪わないためだ。
          </p>

          <p>
            記録に追われる時間を減らせば、<br />
            子どもと向き合える時間が増える。
          </p>

          <p>
            私たちがDXを推進するのは、<br />
            テクノロジーに魅せられたからではない。<br />
            <span className="text-white">スタッフが、子どもたちのそばにいられるようにするためだ。</span>
          </p>
        </div>

        {/* 対比 */}
        <div className="mt-16 grid grid-cols-2 gap-px bg-[#1a1a1a]">
          <div className="bg-[#111111] px-6 py-8">
            <p className="text-[#333] text-[10px] tracking-[0.3em] uppercase mb-3">Before</p>
            <p className="text-[#444] text-sm leading-loose">
              記録・報告書作成で<br />
              残業2〜3時間
            </p>
          </div>
          <div className="bg-[#111111] px-6 py-8">
            <p className="text-orange-500 text-[10px] tracking-[0.3em] uppercase mb-3">After</p>
            <p className="text-[#888] text-sm leading-loose">
              子どもとの時間を<br />
              最大化できる
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

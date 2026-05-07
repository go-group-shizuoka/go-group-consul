const stats = [
  { num: "4", unit: "施設", label: "静岡県内展開" },
  { num: "100+", unit: "名", label: "在籍児童数" },
  { num: "20+", unit: "名", label: "専門スタッフ" },
  { num: "4", unit: "事業", label: "多角的な支援体制" },
];

const milestones = [
  { year: "2019", event: "GO HOME 開設（三島市）" },
  { year: "2021", event: "GO ROOM 開設（清水町）" },
  { year: "2022", event: "GO TOWN 1ST 開設（清水町）" },
  { year: "2023", event: "GO TOWN 2ND 開設（清水町）" },
  { year: "2024", event: "DXシステム自社開発開始" },
];

export default function TrackRecordSection() {
  return (
    <section
      id="track-record"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] border-b border-[#1a1a1a]"
    >
      <div className="max-w-5xl">
        <span className="brand-label">06 Track Record</span>

        <h2
          className="text-4xl md:text-5xl text-white leading-tight mb-16"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          数字が、続けてきた証拠だ。
        </h2>

        {/* 実績数字 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0a0a] px-6 py-10 text-center">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span
                  className="text-5xl md:text-6xl text-white"
                  style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
                >
                  {stat.num}
                </span>
                <span className="text-orange-500 text-sm">{stat.unit}</span>
              </div>
              <p className="text-[#444] text-[10px] tracking-[0.3em]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* マイルストーン */}
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className="flex items-start gap-8 py-6 border-t border-[#1a1a1a] group"
            >
              <span className="text-[#333] text-xs tracking-[0.3em] shrink-0 mt-0.5 group-hover:text-orange-500 transition-colors duration-300">
                {m.year}
              </span>
              <span className="text-[#666] text-sm leading-loose">{m.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

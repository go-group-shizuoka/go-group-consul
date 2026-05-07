const stats = [
  { num: "4", unit: "施設", label: "すべて黒字運営" },
  { num: "100+", unit: "名", label: "利用者を継続支援" },
  { num: "12", unit: "年", label: "一度も赤字なし" },
  { num: "0", unit: "件", label: "監査指摘なし" },
];

const milestones = [
  { year: "2013", event: "林 康義、未経験から福祉業界へ" },
  { year: "2019", event: "GO HOME 開設（三島市）— 放課後等デイ・児童発達支援" },
  { year: "2021", event: "GO ROOM 開設（清水町）" },
  { year: "2022", event: "GO TOWN 1ST 開設（清水町）" },
  { year: "2023", event: "GO TOWN 2ND 開設（清水町）— 4施設体制へ" },
  { year: "2024", event: "経営コンサルティング事業を本格化。自社DXシステム開発開始" },
];

export default function TrackRecordSection() {
  return (
    <section
      id="track-record"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#111111] border-b border-[#1a1a1a]"
    >
      <div className="max-w-5xl">
        <span className="brand-label">07 Track Record</span>

        <h2
          className="text-4xl md:text-5xl text-white leading-tight mb-5"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          数字が、続けてきた証拠だ。
        </h2>
        <p className="text-[#444] text-sm mb-16 leading-loose">
          一度も赤字を出さずに、4施設を運営し続けている。
        </p>

        {/* 実績数字 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#111111] px-5 py-10 text-center">
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <span
                  className="text-5xl md:text-6xl text-white"
                  style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
                >
                  {stat.num}
                </span>
                <span className="text-orange-500 text-sm ml-0.5">{stat.unit}</span>
              </div>
              <p className="text-[#3a3a3a] text-[10px] tracking-[0.25em] leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* マイルストーン */}
        <div>
          {milestones.map((m) => (
            <div
              key={m.year}
              className="flex items-start gap-6 md:gap-10 py-5 border-t border-[#1a1a1a] group"
            >
              <span className="text-[#2a2a2a] text-xs tracking-[0.3em] shrink-0 mt-0.5 tabular-nums group-hover:text-orange-500 transition-colors duration-300">
                {m.year}
              </span>
              <span className="text-[#555] text-sm leading-loose">{m.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

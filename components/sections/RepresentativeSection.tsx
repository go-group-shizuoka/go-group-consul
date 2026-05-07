const career = [
  { year: "2013", desc: "未経験から福祉業界へ" },
  { year: "2019", desc: "GO HOME 開設（三島市）— 放課後等デイ・児童発達支援" },
  { year: "2021", desc: "GO ROOM 開設（清水町）" },
  { year: "2022", desc: "GO TOWN 1ST 開設（清水町）" },
  { year: "2023", desc: "GO TOWN 2ND 開設（清水町）— 4施設体制へ" },
  { year: "2024", desc: "経営コンサルティング事業を本格化。自社DXシステム開発開始" },
];

export default function RepresentativeSection() {
  return (
    <section
      id="representative"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] border-b border-[#1a1a1a]"
    >
      <div className="max-w-4xl">
        <span className="brand-label">13 Representative</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* テキスト */}
          <div>
            <h2
              className="text-3xl md:text-4xl text-white leading-tight mb-1"
              style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
            >
              林 康義
            </h2>
            <p className="text-[#333] text-xs tracking-[0.3em] mb-10">
              GO GROUP 代表 / 役員
            </p>

            {/* 代表の言葉 */}
            <div className="pl-4 border-l border-orange-500/50 mb-10">
              <p
                className="text-white text-base md:text-lg leading-relaxed"
                style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
              >
                「子どもを守るために、<br />
                経営を本気で学んだ。」
              </p>
            </div>

            <div className="brand-body mb-12">
              <p>
                孤独な夜が、何度もあった。<br />
                誰にも相談できないまま、<br />
                数字と向き合い続けた。
              </p>
              <p>
                「福祉の人間が、なぜ経営を語るのか」<br />
                そう言われるたびに、私は答えてきた。<br />
                子どもを守り続けるためだ、と。
              </p>
              <p>
                マーケティング、財務、組織設計。<br />
                すべて独学で身につけた。<br />
                それが今、4施設・100名以上を<br />
                支える基盤になっている。
              </p>
              <p>
                役員は、今でも私一人だ。<br />
                それが誇りでもあり、責任でもある。
              </p>
            </div>

            <div className="w-10 h-[1px] bg-[#2a2a2a]" />
          </div>

          {/* キャリア */}
          <div>
            <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase mb-8">Career</p>
            <div className="space-y-px">
              {career.map((item) => (
                <div
                  key={item.year}
                  className="flex items-start gap-6 py-4 border-t border-[#1a1a1a] group"
                >
                  <span className="text-[#2a2a2a] text-xs tracking-[0.3em] shrink-0 tabular-nums mt-0.5 group-hover:text-orange-500 transition-colors duration-300">
                    {item.year}
                  </span>
                  <span className="text-[#555] text-sm leading-loose">{item.desc}</span>
                </div>
              ))}
              <div className="border-t border-[#1a1a1a]" />
            </div>

            {/* 締めの言葉 */}
            <div className="mt-10 pt-8">
              <p className="text-[#333] text-xs leading-loose">
                福祉と経営は、対立しない。<br />
                本物の経営があってこそ、<br />
                子どもたちを守り続けられる。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

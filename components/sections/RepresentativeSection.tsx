const career = [
  "静岡県出身",
  "福祉業界でのキャリアをスタート",
  "2019年 GO HOME（放課後等デイサービス）を創業",
  "経営・マーケティングを独学で習得",
  "2021〜2023年 3施設を追加開設、4施設体制へ",
  "2024年 自社DXシステム開発に着手",
  "現在 4施設を運営しながら経営コンサルティングも展開",
];

export default function RepresentativeSection() {
  return (
    <section
      id="representative"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] border-b border-[#1a1a1a]"
    >
      <div className="max-w-4xl">
        <span className="brand-label">09 Representative</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* テキスト */}
          <div>
            <h2
              className="text-3xl md:text-4xl text-white leading-tight mb-2"
              style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
            >
              林 康義
            </h2>
            <p className="text-[#333] text-xs tracking-[0.3em] mb-10">
              GO GROUP 代表
            </p>

            <div className="brand-body mb-12">
              <p>
                「福祉をやっている人間が、なぜ経営を語るのか」<br />
                そう言われるたびに、私は答えてきた。
              </p>
              <p>
                子どもを守り続けるために、<br />
                経営を学ばなければならなかったからだ。
              </p>
              <p>
                赤字でも続けられた理由は、<br />
                使命があったからではない。<br />
                経営を変えたからだ。
              </p>
            </div>

            <div className="w-10 h-[1px] bg-[#2a2a2a]" />
          </div>

          {/* キャリア */}
          <div>
            <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase mb-8">Career</p>
            <ul className="space-y-5">
              {career.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-[1px] h-4 bg-[#2a2a2a] shrink-0 mt-1" />
                  <span className="text-[#555] text-sm leading-loose">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

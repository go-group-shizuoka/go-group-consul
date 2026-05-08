const pillars = [
  {
    num: "01",
    title: "利用者が増える導線設計",
    desc: "見学→体験→契約の流れを仕組み化。\n来てもらうではなく、選ばれる事業所をつくる。",
  },
  {
    num: "02",
    title: "スタッフが育つ仕組み",
    desc: "採用→教育→定着まで一貫設計。\n「いい人が来ない」ではなく、育つ環境をつくる。",
  },
  {
    num: "03",
    title: "療育とイベントのバランス",
    desc: "「楽しいだけ」で終わらない年間設計。\n保護者が信頼し、子どもが成長する場をつくる。",
  },
  {
    num: "04",
    title: "安定経営の仕組み化",
    desc: "請求・シフト・記録・監査対応を体系化。\n経営者が現場に追われない状態をつくる。",
  },
];

const plans = [
  {
    name: "スポット相談",
    freq: "1回",
    price: "¥50,000〜",
    desc: "まず話を聞きたい方へ。現状の課題を整理します。",
  },
  {
    name: "ライト",
    freq: "月1回訪問",
    price: "月額 ¥50,000",
    desc: "月1回の訪問相談とメール対応。継続的に伴走します。",
  },
  {
    name: "スタンダード",
    freq: "月2回訪問",
    price: "月額 ¥100,000",
    desc: "訪問2回＋書類サポート。実務に踏み込んだ支援。",
    featured: true,
  },
  {
    name: "プレミアム",
    freq: "週1回訪問",
    price: "月額 ¥200,000",
    desc: "専任担当が現場に深く入り込み、フルサポート。",
  },
];

export default function ConsultSection() {
  return (
    <section
      id="consult"
      className="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-[#1a1a1a] border-b border-[#262626]"
    >
      <div className="max-w-5xl">
        <span className="brand-label">08 Consulting</span>

        {/* ⑦ リード */}
        <p
          className="text-[#333] text-sm tracking-wider mb-8 leading-relaxed"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          現場を知らない言葉は、すぐに薄くなる。
        </p>

        <h2
          className="text-4xl md:text-5xl text-white leading-tight mb-5"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          仕組みが、経営を守る。
        </h2>
        <p className="text-[#444] text-sm mb-16 leading-loose max-w-xl">
          「頑張っているのに、うまくいかない」<br />
          その原因は、たいてい仕組みにある。<br />
          GO GROUPが12年かけて現場から作り上げた仕組みを、そのまま導入する。
        </p>

        {/* 4つの柱 */}
        <div className="mb-20">
          <p className="text-[#2a2a2a] text-[10px] tracking-[0.4em] uppercase mb-8">Four Pillars</p>
          <div className="space-y-px">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 border-t border-[#262626]"
              >
                <span className="text-[#222] text-xs tracking-[0.3em] shrink-0 tabular-nums mt-0.5">
                  {p.num}
                </span>
                <div className="flex-1">
                  <p className="text-white text-sm mb-2">{p.title}</p>
                  <p className="text-[#444] text-xs leading-[2]">
                    {p.desc.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < p.desc.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#262626]" />
          </div>
        </div>

        {/* プラン */}
        <div>
          <p className="text-[#2a2a2a] text-[10px] tracking-[0.4em] uppercase mb-8">Plan</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1a1a1a]">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`px-6 py-8 relative ${
                  plan.featured ? "bg-[#131313]" : "bg-[#1a1a1a]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute top-4 right-4 text-[9px] tracking-[0.3em] text-orange-500 uppercase">
                    most popular
                  </span>
                )}
                <p className="text-[#333] text-[10px] tracking-wider mb-1">{plan.freq}</p>
                <p className="text-white text-base mb-1">{plan.name}</p>
                <p
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
                >
                  {plan.price}
                </p>
                <p className="text-[#444] text-xs leading-loose">{plan.desc}</p>
              </div>
            ))}
          </div>

          {/* 無料診断 */}
          <div className="mt-12 border-t border-[#262626] pt-10">
            <p className="text-[#555] text-xs leading-loose mb-6">
              まずは現状を話してください。<br />
              集客・スタッフ・経営の問題を、無料で一緒に整理します。<span className="text-[#333] ml-2">（限定5社）</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-4 text-white text-sm tracking-[0.15em] hover:text-orange-500 transition-colors duration-300 group"
            >
              <span className="w-8 h-[1px] bg-orange-500 group-hover:w-12 transition-all duration-300 shrink-0" />
              <span>無料相談を申し込む</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

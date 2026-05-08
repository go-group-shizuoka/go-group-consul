const inquiryTypes = [
  { label: "施設見学・相談", desc: "利用を検討されている保護者の方へ" },
  { label: "経営コンサルティング", desc: "福祉事業所の経営改善を検討されている方へ" },
  { label: "メディア・取材", desc: "取材・掲載のご依頼はこちら" },
  { label: "採用・働くことへの相談", desc: "一緒に働きたい方へ" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-[#1a1a1a]"
    >
      <div className="max-w-3xl">
        <span className="brand-label">11 Contact</span>

        <h2
          className="text-3xl md:text-5xl text-white leading-tight mb-4"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          話してみてください。
        </h2>
        <p className="text-[#444] text-sm mb-14 leading-loose">
          どんな小さな相談でも、真剣に聞きます。
        </p>

        {/* お問い合わせ種別 */}
        <div className="mb-14">
          {inquiryTypes.map((type, i) => (
            <div
              key={type.label}
              className="flex items-start gap-6 py-5 border-t border-[#262626] last:border-b"
            >
              <span className="text-[#2a2a2a] text-xs tracking-[0.3em] shrink-0 mt-0.5 tabular-nums">
                0{i + 1}
              </span>
              <div>
                <p className="text-[#aaa] text-sm mb-0.5">{type.label}</p>
                <p className="text-[#444] text-xs leading-loose">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 連絡先 */}
        <div className="border-t border-[#262626] pt-10 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* 電話 */}
            <div>
              <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase mb-3">Tel</p>
              <a
                href="tel:0559395566"
                className="block text-white text-2xl tracking-widest hover:text-orange-500 transition-colors duration-300 mb-1"
              >
                055-939-5566
              </a>
              <p className="text-[#333] text-[10px] tracking-wider">平日 9:00〜18:00</p>
            </div>

            {/* 所在地 */}
            <div>
              <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase mb-3">Address</p>
              <p className="text-[#555] text-sm leading-loose">
                静岡県清水町伏見616-1<br />
                BELLSビル
              </p>
            </div>
          </div>
        </div>

        {/* フォームCTA */}
        <a
          href="https://go-group-homepage.vercel.app/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-white text-sm tracking-[0.15em] hover:text-orange-500 transition-colors duration-300 group"
        >
          <span className="w-8 h-[1px] bg-orange-500 group-hover:w-12 transition-all duration-300" />
          <span>お問い合わせフォームへ</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </section>
  );
}

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
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#0a0a0a]"
    >
      <div className="max-w-3xl">
        <span className="brand-label">11 Contact</span>

        <h2
          className="text-4xl md:text-5xl text-white leading-tight mb-5"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          話してみてください。
        </h2>
        <p className="text-[#444] text-sm mb-16 leading-loose">
          どんな小さな相談でも、真剣に聞きます。
        </p>

        {/* お問い合わせ種別 */}
        <div className="space-y-px mb-16">
          {inquiryTypes.map((type, i) => (
            <div
              key={type.label}
              className="flex items-start gap-6 py-6 border-t border-[#1a1a1a]"
            >
              <span className="text-[#222] text-xs tracking-[0.3em] shrink-0 mt-0.5">
                0{i + 1}
              </span>
              <div>
                <p className="text-white text-sm mb-1">{type.label}</p>
                <p className="text-[#444] text-xs leading-loose">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 連絡先 */}
        <div className="border border-[#1a1a1a] p-8 mb-10">
          <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase mb-6">Contact Info</p>
          <div className="space-y-4">
            <div>
              <p className="text-[#444] text-xs tracking-wider mb-1">TEL</p>
              <a
                href="tel:0559436111"
                className="text-white text-xl tracking-wider hover:text-orange-500 transition-colors duration-300"
              >
                055-943-6111
              </a>
            </div>
            <div>
              <p className="text-[#444] text-xs tracking-wider mb-1">所在地</p>
              <p className="text-[#666] text-sm leading-loose">
                静岡県清水町伏見616-1 BELLSビル
              </p>
            </div>
            <div>
              <p className="text-[#444] text-xs tracking-wider mb-1">受付時間</p>
              <p className="text-[#666] text-sm leading-loose">
                平日 9:00〜18:00
              </p>
            </div>
          </div>
        </div>

        {/* フォームCTA */}
        <a
          href="https://go-group-homepage.vercel.app/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white text-sm tracking-[0.2em] hover:text-orange-500 transition-colors duration-300 group border-b border-[#2a2a2a] pb-1 hover:border-orange-500"
        >
          <span>お問い合わせフォームはこちら</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </section>
  );
}

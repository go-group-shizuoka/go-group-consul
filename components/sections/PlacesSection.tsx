import Link from "next/link";

const facilities = [
  {
    name: "GO HOME",
    type: "多機能型（児童発達支援・放課後等デイサービス）",
    address: "三島市",
    desc: "0歳から高校生まで、2つのサービスを1施設で。就学前後も同じスタッフが継続して支援します。",
    href: "https://go-group-homepage.vercel.app/go-home",
  },
  {
    name: "GO ROOM",
    type: "放課後等デイサービス",
    address: "清水町",
    desc: "定員10名の少人数制。落ち着いた環境で、個別支援と宿題サポートを丁寧に行います。",
    href: "https://go-group-homepage.vercel.app/go-room",
  },
  {
    name: "GO TOWN 1ST",
    type: "放課後等デイサービス・保育所等訪問支援",
    address: "清水町",
    desc: "体を動かすプログラムや集団療育が充実。保育所・学校とも連携します。",
    href: "https://go-group-homepage.vercel.app/go-town-1st",
  },
  {
    name: "GO TOWN 2ND",
    type: "放課後等デイサービス",
    address: "清水町",
    desc: "高学年・中高生向けの自立支援施設。生活スキル・進路準備・社会参加体験を提供します。",
    href: "https://go-group-homepage.vercel.app/go-town-2nd",
  },
];

export default function PlacesSection() {
  return (
    <section
      id="facilities"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#111111] border-b border-[#1a1a1a]"
    >
      <div className="max-w-5xl">
        <span className="brand-label">07 Facilities</span>

        <h2
          className="text-4xl md:text-5xl text-white leading-tight mb-5"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          場所が、約束を守る。
        </h2>
        <p className="text-[#444] text-sm mb-16 leading-loose">
          静岡県三島市・清水町を中心に4施設を展開。
        </p>

        {/* Facility list */}
        <div className="space-y-px">
          {facilities.map((facility, i) => (
            <a
              key={facility.name}
              href={facility.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 border-t border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors duration-300 block"
            >
              {/* Number */}
              <span className="text-[#222] text-xs tracking-[0.3em] shrink-0 mt-1">
                0{i + 1}
              </span>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                  <p className="text-orange-500 text-xs tracking-[0.25em] uppercase">
                    {facility.name}
                  </p>
                  <p className="text-[#444] text-[10px] tracking-wider">
                    {facility.address}
                  </p>
                </div>
                <p className="text-[#333] text-[11px] tracking-wider mb-3">
                  {facility.type}
                </p>
                <p className="text-[#555] text-sm leading-loose">{facility.desc}</p>
              </div>

              {/* Arrow */}
              <span className="text-[#333] text-xs group-hover:text-orange-500 transition-colors duration-300 mt-1 shrink-0">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

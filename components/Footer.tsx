import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* ブランド */}
          <div>
            <p className="text-white text-sm tracking-[0.3em] font-light mb-6">GO GROUP</p>
            <p className="text-[#444] text-xs leading-loose mb-6">
              放課後等デイサービス・児童発達支援<br />
              静岡県内4施設運営
            </p>
            <p className="text-[#333] text-xs leading-loose mb-8">
              静岡県清水町伏見616-1 BELLSビル<br />
              TEL:{" "}
              <a href="tel:0559436111" className="hover:text-[#555] transition-colors">
                055-943-6111
              </a>
            </p>
            {/* 店舗サイトQR */}
            <a
              href="https://go-group-homepage.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <Image
                src="/qr_homepage.png"
                alt="GO GROUP 店舗サイト QRコード"
                width={56}
                height={56}
                className="rounded border border-[#2a2a2a] group-hover:border-[#555] transition-colors"
              />
              <div>
                <p className="text-[#333] text-[10px] tracking-wider mb-0.5">店舗サイト</p>
                <p className="text-[#2a2a2a] text-[9px] leading-loose">
                  保護者・ご利用者の方へ
                </p>
              </div>
            </a>
          </div>

          {/* ナビ */}
          <div>
            <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase mb-6">Navigation</p>
            <ul className="space-y-3">
              {[
                { label: "理念", href: "#philosophy" },
                { label: "ストーリー", href: "#story" },
                { label: "施設紹介", href: "#facilities" },
                { label: "実績", href: "#track-record" },
                { label: "代表プロフィール", href: "#representative" },
                { label: "採用情報", href: "#recruit" },
                { label: "お問い合わせ", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#444] text-xs tracking-wider hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 施設 */}
          <div>
            <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase mb-6">Facilities</p>
            <ul className="space-y-3">
              {[
                { name: "GO HOME", desc: "多機能型・三島市" },
                { name: "GO ROOM", desc: "放課後等デイ・清水町" },
                { name: "GO TOWN 1ST", desc: "放課後等デイ・清水町" },
                { name: "GO TOWN 2ND", desc: "放課後等デイ・清水町" },
              ].map((f) => (
                <li key={f.name}>
                  <a
                    href="https://go-group-homepage.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <span className="text-[#555] text-xs tracking-wider group-hover:text-white transition-colors duration-300">
                      {f.name}
                    </span>
                    <span className="block text-[#333] text-[10px] mt-0.5">{f.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2a2a2a] text-xs tracking-wider">
            © 2025 GO GROUP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#2a2a2a] text-xs tracking-wider hover:text-[#555] transition-colors">
              プライバシーポリシー
            </Link>
            <a
              href="https://go-group-homepage.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2a2a2a] text-xs tracking-wider hover:text-[#555] transition-colors"
            >
              店舗サイト
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

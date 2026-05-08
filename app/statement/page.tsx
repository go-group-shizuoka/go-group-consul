import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GO GROUPについて | GO GROUP",
  description: "あなたは、あと何人の人を大切にできますか？ 静かな熱量。綺麗ごとだけでは、12年続けられない。",
};

export default function StatementPage() {
  return (
    <main className="min-h-screen bg-[#111111] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32">
      <div className="max-w-2xl mx-auto w-full">

        {/* 戻るリンク — 最小限 */}
        <Link
          href="/"
          className="inline-block text-[9px] tracking-[0.5em] text-[#222] uppercase mb-24 hover:text-[#444] transition-colors duration-500"
        >
          ← GO GROUP
        </Link>

        {/* 第一層 — メインコピー */}
        <h1
          className="text-3xl md:text-5xl lg:text-6xl text-[#f7f7f7] leading-[1.6] mb-16"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          あなたは、<br />
          あと何人の人を<br />
          大切にできますか？
        </h1>

        {/* 第二層 — ブランドワード */}
        <p
          className="text-orange-500 text-[11px] tracking-[0.8em] uppercase mb-16"
        >
          静かな熱量。
        </p>

        {/* 第三層 — 現場の言葉 */}
        <div
          className="space-y-8 text-[#444] text-sm leading-[2.6] mb-24"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          <p>綺麗ごとだけでは、12年続けられない。</p>
          <p>守ると決めたから、続けてきた。</p>
          <p>"支援"じゃない。人生で関わっている。</p>
        </div>

        {/* 区切り */}
        <div className="w-6 h-[1px] bg-orange-500/30 mb-16" />

        {/* 本文 */}
        <div
          className="space-y-8 text-[#333] text-xs leading-[2.6] max-w-md"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          <p>
            この言葉は、保護者への問いかけでもあり、<br />
            スタッフへの問いかけでもあり、<br />
            経営者である自分自身への問いかけでもある。
          </p>
          <p>
            12年間、GO GROUPはその問いに<br />
            正直に向き合い続けてきた。
          </p>
        </div>

        {/* ナビゲーション */}
        <div className="mt-24 flex flex-col sm:flex-row gap-6 items-start">
          <Link
            href="/#philosophy"
            className="text-[#2a2a2a] text-[10px] tracking-[0.3em] hover:text-[#f7f7f7] transition-colors duration-300"
          >
            理念を読む →
          </Link>
          <Link
            href="/columns"
            className="text-[#2a2a2a] text-[10px] tracking-[0.3em] hover:text-orange-500 transition-colors duration-300"
          >
            現場記録を読む →
          </Link>
          <Link
            href="/#contact"
            className="text-[#2a2a2a] text-[10px] tracking-[0.3em] hover:text-[#f7f7f7] transition-colors duration-300"
          >
            相談する →
          </Link>
        </div>

      </div>
    </main>
  );
}

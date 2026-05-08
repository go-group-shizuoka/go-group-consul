import type { Metadata } from "next";
import Link from "next/link";
import { sortedColumns } from "@/data/columns";

export const metadata: Metadata = {
  title: "現場記録 / 独白 | GO GROUP",
  description: "12年間、現場で見てきたこと、感じてきたこと。言葉少なめに、記録しています。",
};

export default function ColumnsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] pt-32 pb-48 px-6 md:px-16 lg:px-24">
      <div className="max-w-2xl">

        {/* ヘッダー */}
        <Link
          href="/"
          className="inline-block text-[9px] tracking-[0.5em] text-[#2a2a2a] uppercase mb-16 hover:text-[#444] transition-colors duration-300"
        >
          ← GO GROUP
        </Link>

        <h1
          className="text-2xl md:text-3xl text-[#f7f7f7] mb-4"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          現場記録 / 独白
        </h1>
        <p className="text-[#333] text-xs tracking-wider mb-20">
          12年間、現場で見てきたこと。言葉少なめに。
        </p>

        {/* コラム一覧 */}
        <div>
          {sortedColumns.map((col) => (
            <Link
              key={col.slug}
              href={`/columns/${col.slug}`}
              className="group flex flex-col md:flex-row md:items-start gap-2 md:gap-10 py-8 border-t border-[#262626] hover:border-[#333] transition-colors duration-300"
            >
              {/* 日付 */}
              <span className="text-[#2a2a2a] text-[10px] tracking-[0.3em] shrink-0 md:mt-1 group-hover:text-orange-500 transition-colors duration-300 tabular-nums">
                {col.date}
              </span>

              {/* テキスト */}
              <div className="flex-1">
                <p
                  className="text-[#888] text-base mb-2 group-hover:text-[#f7f7f7] transition-colors duration-300"
                  style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
                >
                  {col.title}
                </p>
                <p className="text-[#333] text-xs leading-relaxed group-hover:text-[#444] transition-colors duration-300">
                  {col.lead}
                </p>
              </div>

              {/* 矢印 */}
              <span className="text-[#2a2a2a] text-xs self-center group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300 hidden md:block">
                →
              </span>
            </Link>
          ))}
          <div className="border-t border-[#262626]" />
        </div>

      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { columns } from "@/data/columns";

// 静的ページとして全コラムを事前生成
export async function generateStaticParams() {
  return columns.map((col) => ({ slug: col.slug }));
}

// ページごとのメタデータ
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const col = columns.find((c) => c.slug === slug);
  if (!col) return {};
  return {
    title: `${col.title} | 現場記録 — GO GROUP`,
    description: col.lead,
  };
}

export default async function ColumnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = columns.find((c) => c.slug === slug);
  if (!col) notFound();

  return (
    <main className="min-h-screen bg-[#1a1a1a]">

      {/* 写真エリア（写真がある場合のみ表示） */}
      {col.image && (
        <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
          <Image
            src={col.image}
            alt={col.title}
            fill
            className="object-cover"
            // モノクロ＋コントラスト強め — 「人の肌感」を出す
            style={{ filter: "grayscale(100%) contrast(1.15) brightness(0.85)" }}
            priority
          />
          {/* 下部グラデーション */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a1a]" />
        </div>
      )}

      {/* 本文エリア */}
      <div className={`px-6 md:px-16 lg:px-24 ${col.image ? "pt-16" : "pt-40"} pb-48`}>
        <div className="max-w-xl">

          {/* 戻るリンク */}
          <Link
            href="/columns"
            className="inline-block text-[9px] tracking-[0.5em] text-[#2a2a2a] uppercase mb-16 hover:text-orange-500 transition-colors duration-300"
          >
            ← 現場記録
          </Link>

          {/* 日付 */}
          <p className="text-orange-500 text-[10px] tracking-[0.4em] mb-6">
            {col.date}
          </p>

          {/* タイトル */}
          <h1
            className="text-2xl md:text-3xl text-[#f7f7f7] leading-[1.8] mb-16 md:mb-20"
            style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
          >
            {col.title}
          </h1>

          {/* 本文 — 段落ごとに余白大きめ */}
          <div className="space-y-10">
            {col.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-[#666] text-sm leading-[2.6]"
                style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
              >
                {paragraph.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < paragraph.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>

          {/* 署名 */}
          <div className="mt-20 pt-12 border-t border-[#262626]">
            <p className="text-[#2a2a2a] text-[10px] tracking-[0.4em]">
              林 康義 — GO GROUP
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

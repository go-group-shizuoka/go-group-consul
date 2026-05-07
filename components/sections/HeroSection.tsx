"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-36 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      {/* 背景テキスト装飾 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.015] select-none pointer-events-none whitespace-nowrap"
        style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        aria-hidden="true"
      >
        GO GROUP
      </div>

      {/* 縦線装飾 */}
      <div className="absolute top-0 left-6 md:left-16 lg:left-24 w-[1px] h-full bg-[#1a1a1a]" />

      <div
        className={`relative max-w-4xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* ラベル */}
        <span className="block text-[10px] tracking-[0.5em] text-[#333] uppercase mb-12">
          GO GROUP — Brand Philosophy
        </span>

        {/* メインコピー */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-10"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          子どもを守る。<br />
          <span className="text-orange-500">経営で。</span>
        </h1>

        {/* サブコピー */}
        <p className="text-[#555] text-sm md:text-base leading-loose max-w-xl mb-16">
          放課後等デイサービス・児童発達支援・経営コンサルティング。<br />
          GO GROUPは、福祉と経営の両立を問い続ける。
        </p>

        {/* CTAリンク */}
        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
          <a
            href="#philosophy"
            className="inline-flex items-center gap-3 text-white text-xs tracking-[0.2em] hover:text-orange-500 transition-colors duration-300 group"
          >
            <span>理念を読む</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 text-[#444] text-xs tracking-[0.2em] hover:text-white transition-colors duration-300 group border-b border-[#2a2a2a] pb-1 hover:border-white"
          >
            お問い合わせ
          </Link>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 right-6 md:right-16 lg:right-24 flex flex-col items-center gap-3">
        <span className="text-[9px] tracking-[0.4em] text-[#333] rotate-90 mb-3">scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#333] to-transparent" />
      </div>
    </section>
  );
}

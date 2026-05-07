"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center md:items-end pt-24 pb-20 md:pb-40 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      {/* 縦線 */}
      <div className="absolute top-0 left-6 md:left-16 lg:left-24 w-[1px] h-full bg-[#1a1a1a]" />

      {/* 右端 装飾ライン */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-[#111]" />

      <div
        className={`relative max-w-5xl transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* ラベル */}
        <span className="block text-[9px] tracking-[0.55em] text-[#2a2a2a] uppercase mb-10 md:mb-16">
          GO GROUP — 放課後等デイサービス・経営コンサルティング
        </span>

        {/* メインコピー */}
        <h1
          className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.2] mb-10 md:mb-14"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          人生、現場、<br className="hidden sm:block" />
          責任、<br />
          <span className="text-orange-500">そして本音。</span>
        </h1>

        {/* サブコピー */}
        <p className="text-[#444] text-sm md:text-base leading-[2] max-w-lg mb-14">
          放課後デイを経営するとは、どういうことか。<br />
          12年かけて、そのすべてを仕組みにした。
        </p>

        {/* 実績 インライン */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-14">
          {[
            { num: "4施設", note: "すべて黒字" },
            { num: "100名以上", note: "継続利用" },
            { num: "12年間", note: "赤字なし" },
          ].map((s) => (
            <div key={s.note} className="flex items-baseline gap-2">
              <span className="text-white text-sm font-medium tracking-wider">{s.num}</span>
              <span className="text-[#333] text-[10px] tracking-wider">{s.note}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <a
            href="#philosophy"
            className="inline-flex items-center gap-3 text-white text-xs tracking-[0.2em] hover:text-orange-500 transition-colors duration-300 group"
          >
            <span>読む</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#contact"
            className="text-[#333] text-xs tracking-[0.2em] hover:text-white transition-colors duration-300 border-b border-[#222] pb-0.5 hover:border-[#444]"
          >
            相談する
          </a>
        </div>
      </div>

      {/* スクロール */}
      <div className="absolute bottom-8 right-6 md:right-16 lg:right-24 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#222] to-transparent" />
        <span className="text-[8px] tracking-[0.4em] text-[#222] rotate-90 mt-2">scroll</span>
      </div>
    </section>
  );
}

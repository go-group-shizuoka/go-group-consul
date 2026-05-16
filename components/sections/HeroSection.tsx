"use client";

import { useEffect, useState } from "react";

const headlineWords = [
  { text: "あなたは、", delay: 400 },
  { text: "あと何人の", delay: 900 },
  { text: "人を", delay: 1400 },
  { text: "大切にできますか？", delay: 1900, accent: true },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [wordVisible, setWordVisible] = useState<boolean[]>(
    new Array(headlineWords.length).fill(false)
  );

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    headlineWords.forEach((word, i) => {
      setTimeout(() => {
        setWordVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, word.delay);
    });
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center md:items-end pt-24 pb-20 md:pb-48 px-6 md:px-16 lg:px-24 bg-[#1a1a1a] overflow-hidden">
      <div className="absolute top-0 left-6 md:left-16 lg:left-24 w-[1px] h-full bg-gradient-to-b from-transparent via-[#262626] to-transparent" />

      <div className="relative max-w-4xl">
        {/* ラベル */}
        <span
          className={`block text-[9px] tracking-[0.55em] text-[#2a2a2a] uppercase mb-16 md:mb-24 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          GO GROUP — 放課後等デイサービス・経営コンサルティング
        </span>

        {/* メインコピー */}
        <h1
          className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.7] mb-8 flex flex-wrap"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-1000 ease-out mr-[0.05em] ${
                wordVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              } ${word.accent ? "text-orange-500" : ""}`}
            >
              {word.text}
            </span>
          ))}
        </h1>

        {/* ブランドワード */}
        <p
          className={`text-[#D35400] text-[11px] tracking-[0.6em] uppercase mb-14 md:mb-18 transition-all duration-1000 delay-[2400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          静かな熱量。
        </p>

        {/* サブコピー */}
        <p
          className={`text-[#3a3a3a] text-sm md:text-base leading-[2.4] max-w-md mb-16 transition-all duration-1000 delay-[2600ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          綺麗ごとだけでは、12年続けられない。
        </p>

        {/* 実績 */}
        <div
          className={`flex flex-wrap gap-x-10 gap-y-3 mb-16 transition-all duration-1000 delay-[2800ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { num: "4施設", note: "すべて黒字" },
            { num: "100名以上", note: "継続利用" },
            { num: "12年間", note: "赤字なし" },
          ].map((s) => (
            <div key={s.note} className="flex items-baseline gap-2">
              <span className="text-[#f7f7f7] text-sm font-medium tracking-wider">{s.num}</span>
              <span className="text-[#2a2a2a] text-[10px] tracking-wider">{s.note}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-6 items-start sm:items-center transition-all duration-1000 delay-[3000ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#philosophy"
            className="inline-flex items-center gap-3 text-[#f7f7f7] text-xs tracking-[0.2em] hover:text-orange-500 transition-colors duration-300 group"
          >
            <span>読む</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="/statement"
            className="text-[#2a2a2a] text-xs tracking-[0.2em] hover:text-[#f7f7f7] transition-colors duration-300 border-b border-[#262626] pb-0.5 hover:border-[#444]"
          >
            GO GROUPについて
          </a>
        </div>
      </div>

      {/* スクロール — 最小限 */}
      <div className="absolute bottom-10 left-6 md:left-16 lg:left-24 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#262626] to-transparent" />
      </div>
    </section>
  );
}

"use client";

// ======================================================
// ScrollReveal — スクロールで文字が浮き出すコンポーネント
// section[id] 内の見出し・ラベル・本文を自動検出して
// ビューポートに入ったタイミングでゆっくり表示する
// ======================================================

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // 対象要素のセレクター（Hero以外のsectionを対象）
    const targets = Array.from(
      document.querySelectorAll(
        [
          "section[id] h2",
          "section[id] h3",
          "section[id] .brand-label",
          "section[id] .brand-body",
          "section[id] .reveal-item",
        ].join(", ")
      )
    );

    // 初期状態：非表示にする
    targets.forEach((el) => el.classList.add("will-reveal"));

    // IntersectionObserver：ビューポートに入ったら表示
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target); // 一度表示したら監視解除
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

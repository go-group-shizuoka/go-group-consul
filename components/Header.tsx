"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "理念", href: "#philosophy" },
  { label: "ストーリー", href: "#story" },
  { label: "施設", href: "#facilities" },
  { label: "実績", href: "#track-record" },
  { label: "代表", href: "#representative" },
  { label: "採用", href: "#recruit" },
  { label: "現場記録", href: "/columns", isPage: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#262626]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <Link
            href="/"
            className="text-white text-sm tracking-[0.3em] font-light hover:text-orange-500 transition-colors duration-300"
          >
            GO GROUP
          </Link>

          {/* PCナビ */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.25em] text-[#555] hover:text-orange-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.25em] text-[#555] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://go-group-homepage.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.2em] text-[#444] hover:text-orange-500 transition-colors duration-300"
            >
              店舗サイト →
            </a>
            <Link
              href="#contact"
              className="text-[11px] tracking-[0.2em] border border-[#333] text-[#888] hover:border-orange-500 hover:text-orange-500 px-5 py-2.5 transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </div>

          {/* ハンバーガー */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="メニューを開く"
          >
            <span className={`block w-5 h-[1px] bg-[#888] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[1px] bg-[#888] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1px] bg-[#888] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* モバイルメニュー */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen pb-6" : "max-h-0"}`}>
          <nav className="flex flex-col gap-4 pt-4 border-t border-[#262626]">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.3em] text-[#666] hover:text-orange-500 transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.3em] text-[#666] hover:text-white transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              href="#contact"
              className="text-[11px] tracking-[0.2em] border border-[#333] text-[#888] text-center py-3 mt-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

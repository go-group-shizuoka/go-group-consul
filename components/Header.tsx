"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ③ メニュー開閉時にbodyスクロールを完全に禁止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace("#", "");
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      router.push("/#" + id);
    }
  };

  return (
    <>
      {/* ② ヘッダーバー：z-[10000] でメニューオーバーレイより前面 */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isOpen
            ? "bg-transparent"
            : scrolled
            ? "bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#262626]"
            : "bg-transparent"
        }`}
        style={{ zIndex: 10000 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ロゴ */}
            <Link
              href="/"
              className="text-white text-sm tracking-[0.3em] font-light hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
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
                    className="text-[11px] tracking-[0.25em] text-muted hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-[11px] tracking-[0.25em] text-muted hover:text-heading transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* PC CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://go-group-homepage.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] text-caption hover:text-orange-500 transition-colors duration-300"
              >
                店舗サイト →
              </a>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "#contact")}
                className="text-[11px] tracking-[0.2em] border border-line-strong text-secondary hover:border-orange-500 hover:text-orange-500 px-5 py-2.5 transition-all duration-300"
              >
                お問い合わせ
              </a>
            </div>

            {/* ② ハンバーガー／閉じるボタン：z-[10000] */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <span
                className={`block w-5 h-[1px] bg-[#aaa] transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1px] bg-[#aaa] transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1px] bg-[#aaa] transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ① モバイルメニュー：完全な全画面オーバーレイ（PCでは非表示） */}
      {/* ⑥ visibility + pointer-events で開閉を制御 */}
      <div
        className="md:hidden fixed inset-0 bg-[#151515]"
        style={{
          zIndex: 9999,
          height: "100dvh",
          overflowY: "auto",
          overscrollBehavior: "contain",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
        aria-hidden={!isOpen}
      >
        {/* ④ メニュー内部のみスクロール可能 */}
        <div className="px-8 pt-24 pb-16">
          <nav className="flex flex-col gap-8 border-t border-[#2a2a2a] pt-10">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] tracking-[0.35em] text-primary hover:text-orange-500 transition-colors duration-300 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-[12px] tracking-[0.35em] text-primary hover:text-heading transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              )
            )}

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="text-[11px] tracking-[0.25em] border border-line-strong text-primary text-center py-4 mt-4 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

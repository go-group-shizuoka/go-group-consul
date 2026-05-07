import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GO GROUP | 経営と福祉の本質を問う",
  description:
    "放課後等デイサービス・児童発達支援・経営コンサルティング。GO GROUPは静岡県で4施設を運営しながら、福祉経営の本質を追求しています。",
  keywords: "GO GROUP,放課後等デイサービス,児童発達支援,福祉経営,経営コンサルティング,静岡",
  openGraph: {
    title: "GO GROUP | 経営と福祉の本質を問う",
    description:
      "子どもを守り続けるために、経営を学んだ。静岡県内4施設を運営するGO GROUPの思想と実績。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-[#0a0a0a]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

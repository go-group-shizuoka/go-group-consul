import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | GO GROUP",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-3xl mx-auto">
      <span className="brand-label">Privacy Policy</span>
      <h1
        className="text-3xl md:text-4xl text-white leading-tight mb-10"
        style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
      >
        プライバシーポリシー
      </h1>

      <div className="brand-body space-y-10">
        <section>
          <h2 className="text-white text-lg mb-4" style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}>
            個人情報の取り扱いについて
          </h2>
          <p>
            GO GROUPは、お客様の個人情報を適切に保護・管理し、
            法令に従い取り扱います。
            収集した個人情報は、お問い合わせへの返答・サービス提供・採用選考以外の目的には使用しません。
          </p>
        </section>

        <section>
          <h2 className="text-white text-lg mb-4" style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}>
            情報の第三者提供
          </h2>
          <p>
            法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-white text-lg mb-4" style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}>
            お問い合わせ
          </h2>
          <p>
            個人情報に関するお問い合わせは、下記までご連絡ください。<br />
            TEL: 055-939-5566（平日9:00〜18:00）
          </p>
        </section>
      </div>
    </div>
  );
}

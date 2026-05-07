import Link from "next/link";

export default function RecruitSection() {
  return (
    <section
      id="recruit"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#111111] border-b border-[#1a1a1a]"
    >
      <div className="max-w-3xl">
        <span className="brand-label">10 Join Us</span>

        <h2
          className="text-4xl md:text-6xl text-white leading-tight mb-14"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          綺麗な仕事ではない。<br />
          でも、本物の仕事だ。
        </h2>

        <div className="brand-body mb-14">
          <p>
            うまくいかない日がある。<br />
            報われない日もある。
          </p>

          <p>
            それでも、「この子が笑った」という一瞬が、<br />
            全てを塗り替える。
          </p>

          <p>
            私たちはその一瞬のために働いている。
          </p>
        </div>

        {/* Divider */}
        <div className="w-10 h-[1px] bg-[#2a2a2a] mb-14" />

        <h3
          className="text-xl md:text-2xl text-white mb-6"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          求めるのは、スキルより覚悟。
        </h3>

        <div className="brand-body mb-14">
          <p>
            経験は問わない。<br />
            大切なのは、子どもの前に立てる人間かどうかだ。
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://go-group-homepage.vercel.app/recruit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white text-sm tracking-[0.2em] hover:text-orange-500 transition-colors duration-300 group"
        >
          <span>採用について、話を聞いてみる</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </section>
  );
}

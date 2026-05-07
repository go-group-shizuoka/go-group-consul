export default function GoHomeMeaningSection() {
  return (
    <section
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#111111] border-b border-[#1a1a1a]"
    >
      <div className="max-w-3xl">
        <span className="brand-label">03 Name</span>

        <h2
          className="text-4xl md:text-6xl text-white leading-tight mb-14"
          style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
        >
          「GO HOME」の<br />
          意味を、考えた。
        </h2>

        <div className="brand-body">
          <p>
            施設に来ることが、「帰ってくる」感覚であってほしかった。
          </p>

          <p>
            学校でも家庭でもない、もう一つの居場所。<br />
            ここに来れば、誰かがいる。<br />
            ここに来れば、安心できる。
          </p>

          <p>
            「GO HOME」とは、<br />
            帰る場所を持てなかった子どもたちへの、<br />
            私たちからの答えだ。
          </p>
        </div>

        <div className="mt-16 pl-5 border-l border-orange-500/40">
          <p
            className="text-white text-xl md:text-2xl leading-relaxed"
            style={{ fontFamily: '"Noto Serif JP", Georgia, serif' }}
          >
            「行ってきます」と言える場所を、<br />
            作り続ける。
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ManagementSection() {
  return (
    <section
      className="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-[#1a1a1a] border-b border-[#262626]"
    >
      <div className="max-w-3xl">
        <span className="brand-label">04 Management</span>

        <h2
          className="text-4xl md:text-6xl text-white leading-tight mb-14"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          赤字では、<br />
          子ども達を<br />
          守り続けられない。
        </h2>

        <div className="brand-body">
          <p>
            福祉は、善意だけでは続かない。
          </p>

          <p>
            スタッフに適切な給与を払えなければ、<br />
            良い人材は離れていく。<br />
            施設の設備が老朽化しても、<br />
            修繕する余裕がなければ放置される。
          </p>

          <p>
            最終的に、被害を受けるのは子どもたちだ。
          </p>

          <p>
            「福祉なのに利益を求めるのか」<br />
            そういう声を聞くたびに、私は思う。<br />
            <span className="text-white">利益なき福祉は、続かない福祉だ。</span>
          </p>
        </div>

        <div className="w-[1px] h-24 bg-gradient-to-b from-orange-500 to-transparent mt-16 ml-1" />
      </div>
    </section>
  );
}

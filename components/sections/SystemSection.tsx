const features = [
  {
    id: "01",
    title: "入退室・検温記録",
    desc: "到着・退室時刻と体温を記録。紙の台帳を不要にする。",
  },
  {
    id: "02",
    title: "活動記録・写真共有",
    desc: "当日の活動内容と写真を記録し、保護者へ届ける。",
  },
  {
    id: "03",
    title: "保護者連絡",
    desc: "施設からのお知らせ・個別連絡を一元管理。既読確認あり。",
  },
  {
    id: "04",
    title: "日報・監査対応",
    desc: "入退室・活動を自動集計し、監査用日報を即時出力。",
  },
  {
    id: "05",
    title: "シフト・勤怠管理",
    desc: "スタッフのシフト作成と勤怠記録を一括管理。",
  },
  {
    id: "06",
    title: "施設横断ダッシュボード",
    desc: "4施設のデータをひとつの画面で把握。経営判断を速くする。",
  },
];

export default function SystemSection() {
  return (
    <section
      id="system"
      className="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-[#131313] border-b border-[#262626]"
    >
      <div className="max-w-5xl">
        <span className="brand-label">09 System</span>

        <h2
          className="text-4xl md:text-5xl text-white leading-tight mb-5"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", Georgia, serif' }}
        >
          現場のために、<br />
          自分たちで作った。
        </h2>
        <p className="text-[#444] text-sm mb-16 leading-loose max-w-xl">
          既製品では、現場の実態に合わなかった。<br />
          だから、GO GROUPの業務フローをそのままシステムにした。<br />
          HUGではなく、自分たちの言葉で動くシステムを。
        </p>

        {/* 機能一覧 */}
        <div className="mb-16">
          <p className="text-[#2a2a2a] text-[10px] tracking-[0.4em] uppercase mb-8">Features</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1a1a1a]">
            {features.map((f) => (
              <div key={f.id} className="bg-[#131313] px-6 py-7">
                <div className="flex items-start gap-4">
                  <span className="text-[#222] text-[10px] tracking-[0.3em] shrink-0 tabular-nums mt-0.5">
                    {f.id}
                  </span>
                  <div>
                    <p className="text-white text-sm mb-1.5">{f.title}</p>
                    <p className="text-[#444] text-xs leading-loose">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ステータス */}
        <div className="border-t border-[#262626] pt-10">
          <div className="flex items-start gap-6">
            <div className="shrink-0 mt-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            </div>
            <div>
              <p className="text-[#555] text-xs leading-loose mb-1">
                現在、自社開発中。2024年より着手。
              </p>
              <p className="text-[#333] text-[10px] leading-loose tracking-wider">
                コンサルティング契約者への優先提供を予定しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

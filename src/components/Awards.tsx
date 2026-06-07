const ugrf = [
  {
    edition: "9th",
    year: "2019",
    month: "Dec",
    result: "Participation",
    resultType: "participate",
    project: "Undergraduate Research Forum",
    badge: null,
  },
  {
    edition: "10th",
    year: "2020",
    month: "Aug",
    result: "Participation",
    resultType: "participate",
    project: "Statics Calculator",
    badge: null,
  },
  {
    edition: "11th",
    year: "2021",
    month: "Feb",
    result: "5th Place",
    resultType: "award",
    project: "Smart Green House Control System Using PID",
    badge: "5th",
  },
  {
    edition: "12th",
    year: "2021",
    month: "Aug",
    result: "Finalist",
    resultType: "finalist",
    project: "Smart Green House Control System Using PID & IoT",
    badge: null,
  },
  {
    edition: "13th",
    year: "2022",
    month: "Feb",
    result: "1st Place",
    resultType: "gold",
    project: "Temperature Control System Inside a Smart Greenhouse",
    badge: "1st",
  },
  {
    edition: "14th",
    year: "2022",
    month: "Aug",
    result: "Media Team",
    resultType: "media",
    project: "Egyptian Junior Researcher Competition",
    badge: null,
  },
  {
    edition: "15th",
    year: "2023",
    month: "Jan",
    result: "1st Place",
    resultType: "gold",
    project: "Smart Greenhouse Control System",
    badge: "1st",
  },
  {
    edition: "16th",
    year: "2023",
    month: "Aug",
    result: "2nd Place",
    resultType: "silver",
    project: "Embedded Smart Greenhouse Control System",
    badge: "2nd",
  },
];

const resultStyles: Record<string, string> = {
  gold: "text-[#c8a96e] border-[#c8a96e]/40 bg-[#c8a96e]/5",
  silver: "text-[#a0a0b0] border-[#a0a0b0]/40 bg-[#a0a0b0]/5",
  finalist: "text-[#7a9fc0] border-[#7a9fc0]/40 bg-[#7a9fc0]/5",
  award: "text-[#8fa87a] border-[#8fa87a]/40 bg-[#8fa87a]/5",
  media: "text-[#9a7ac0] border-[#9a7ac0]/40 bg-[#9a7ac0]/5",
  participate: "text-[#444] border-[#2a2a2a] bg-transparent",
};

export default function Awards() {
  return (
    <div className="py-32 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c8a96e]">Recognition</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold leading-tight mt-4 text-[#e8e2d9]">
            UGRF Awards &<br />Competition History
          </h2>
        </div>
        <div className="hidden md:flex flex-col items-end gap-4">
          <div className="flex gap-8">
            {[
              { num: "8", label: "Editions" },
              { num: "2×", label: "1st Place" },
              { num: "5", label: "Yrs Active" },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <p className="font-['Playfair_Display'] text-2xl text-[#c8a96e]">{s.num}</p>
                <p className="text-[10px] tracking-widest uppercase text-[#444] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#333] tracking-widest uppercase">
            Nile University · Egyptian Junior Researcher Competition
          </p>
        </div>
      </div>

      {/* Timeline grid */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-[#1a1a1a] hidden md:block" />

        <div className="flex flex-col gap-0">
          {ugrf.map((item, idx) => (
            <div
              key={item.edition}
              className="group relative grid md:grid-cols-[6.5rem_1fr] gap-0 items-start border-b border-[#111] last:border-0 hover:bg-[#0d0d0b] transition-colors duration-300"
            >
              {/* Year / edition column */}
              <div className="hidden md:flex flex-col items-center pt-6 pb-6 pr-6 gap-1.5">
                <div
                  className={`w-2 h-2 rounded-full ring-4 ring-[#0a0a0a] z-10 transition-colors duration-300 ${
                    item.resultType === "gold"
                      ? "bg-[#c8a96e]"
                      : item.resultType === "silver"
                      ? "bg-[#a0a0b0]"
                      : item.resultType === "finalist"
                      ? "bg-[#7a9fc0]"
                      : item.resultType === "award"
                      ? "bg-[#8fa87a]"
                      : item.resultType === "media"
                      ? "bg-[#9a7ac0]"
                      : "bg-[#2a2a2a]"
                  }`}
                />
                <span className="text-[10px] font-mono text-[#333] group-hover:text-[#444] transition-colors tracking-wider">
                  {item.month} {item.year}
                </span>
              </div>

              {/* Content */}
              <div className="py-6 pl-0 md:pl-8 pr-0 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                {/* Edition badge */}
                <div className="flex-shrink-0 w-14 h-14 border border-[#1a1a1a] group-hover:border-[#222] flex flex-col items-center justify-center transition-colors">
                  <span className="font-['Playfair_Display'] text-lg text-[#c8a96e]/70 leading-none">{item.edition}</span>
                  <span className="text-[9px] tracking-widest uppercase text-[#333] mt-0.5">UGRF</span>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[#e8e2d9] font-['DM_Sans'] text-sm font-medium leading-snug group-hover:text-white transition-colors truncate">
                    {item.project}
                  </p>
                  <p className="text-[#333] text-xs mt-0.5 group-hover:text-[#444] transition-colors">
                    {item.edition} Undergraduate Research Forum · Nile University
                  </p>
                </div>

                {/* Result pill */}
                <div className="flex-shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 border text-xs px-3 py-1 tracking-wider font-mono ${
                      resultStyles[item.resultType]
                    }`}
                  >
                    {(item.resultType === "gold" || item.resultType === "silver") && (
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                    {item.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer callout */}
      <div className="mt-12 border border-[#1a1a1a] p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-[#c8a96e]/20 transition-colors duration-300">
        <div>
          <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-2">5 Years · 8 Editions · Nile University</p>
          <p className="text-[#666] text-sm font-['DM_Sans'] leading-relaxed max-w-lg">
            Consistent participation in the Egyptian Junior Researcher Competition from the 9th to 16th UGRF edition —
            earning two 1st-place wins, a 2nd place, a 5th place, and a Finalist recognition across engineering and IoT projects.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {["🥇 2× First", "🥈 1× Second", "🏅 1× Fifth", "⭐ Finalist"].map((label) => (
            <span key={label} className="text-xs text-[#444] border border-[#1e1e1e] px-3 py-1.5 whitespace-nowrap">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

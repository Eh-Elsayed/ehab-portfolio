const youtubeVideos = [
  {
    title: "RTX 5090 كروت",
    subtitle: "Cooler Master HQ Tour — Taiwan",
    url: "https://www.youtube.com/watch?v=kJgzGJjj-WU",
    id: "kJgzGJjj-WU",
  },
  {
    title: "VIVO V50 مراجعة كاملة",
    subtitle: "Full Review — Underwater Photography",
    url: "https://www.youtube.com/watch?v=lMyIS-QWAow",
    id: "lMyIS-QWAow",
  },
  {
    title: "RTX 5080 FE مراجعة",
    subtitle: "New Gen GPU — Forget Raw Performance",
    url: "https://www.youtube.com/watch?v=NBAEgpbsf_w",
    id: "NBAEgpbsf_w",
  },
  {
    title: "Insta 360 X4",
    subtitle: "Camera or Drone? | Full Review",
    url: "https://www.youtube.com/watch?v=k_0u2aO2akc",
    id: "k_0u2aO2akc",
  },
  {
    title: "Razer Gaming اكسسوارات",
    subtitle: "Essential Accessories for Your Build",
    url: "https://www.youtube.com/watch?v=HlszCQchHMM",
    id: "HlszCQchHMM",
  },
  {
    title: "RTX 5000 أول نظرة",
    subtitle: "CES — All New Cards + MSI Surprises",
    url: "https://www.youtube.com/watch?v=hfdYbSx9fyQ",
    id: "hfdYbSx9fyQ",
  },
  {
    title: "Batman Gaming Setup",
    subtitle: "Full Themed Build — Does It Matter?",
    url: "https://www.youtube.com/watch?v=ylwk13VsNmM",
    id: "ylwk13VsNmM",
  },
  {
    title: "تجميعه قبل RTX 5000",
    subtitle: "Most Powerful Mid-Range Gaming Build",
    url: "https://www.youtube.com/watch?v=fzFX5Wz9plU",
    id: "fzFX5Wz9plU",
  },
];

const productReviews: { name: string; url: string; cat: string; gallery?: string }[] = [
  { name: "ASUS ROG Azoth Extreme", url: "https://arabhardware.net/reviews/asus-rog-azoth-extreme-review", cat: "Keyboard", gallery: "gallery-asus-rog-azoth" },
  { name: "ROG Keris II Ace", url: "https://arabhardware.net/reviews/rog-keris-ii-ace-review", cat: "Mouse" },
  { name: "Razer Kraken V4 Pro", url: "https://arabhardware.net/reviews/razer-kraken-v4-pro-review", cat: "Headset" },
  { name: "ASUS ZenBook S14 2024", url: "https://arabhardware.net/reviews/asus-zenbook-s14-2024-review", cat: "Laptop" },
  { name: "Intel Core Ultra 9 285K", url: "https://arabhardware.net/reviews/intel-core-ultra-9-285k-review", cat: "CPU" },
  { name: "ROG Maximus Z890 Hero", url: "https://arabhardware.net/reviews/rog-maximus-z890-hero-review", cat: "Motherboard" },
  { name: "Ryzen 7 9800X3D", url: "https://arabhardware.net/reviews/ryzen-7-9800x3d-review", cat: "CPU" },
  { name: "Deepcool Mystique 360", url: "https://arabhardware.net/reviews/deepcool-mystique-360-review", cat: "Cooling" },
  { name: "Gigabyte RTX 5070 Series", url: "https://arabhardware.net/reviews/gigabyte-rtx-5070-series-reviewe", cat: "GPU" },
  { name: "Gigabyte Radeon RX 9070", url: "https://arabhardware.net/reviews/gigabyte-amd-radeon-rx-9070", cat: "GPU" },
  { name: "Razer BlackWidow V4 Pro 75", url: "https://arabhardware.net/reviews/razer-blackwidow-v4-pro-75-review", cat: "Keyboard" },
  { name: "Synology BeeStation", url: "https://arabhardware.net/reviews/synology-beestation-review", cat: "NAS" },
];

export default function Portfolio() {
  return (
    <div className="bg-[#080808] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#c8a96e]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c8a96e]">Creative Work</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold leading-tight mt-4 text-[#e8e2d9]">
              Content &<br />Photography
            </h2>
          </div>
          <a
            href="https://arabhardware.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-xs text-[#555] hover:text-[#c8a96e] transition-colors tracking-widest uppercase"
          >
            Arabhardware.net
            <span>→</span>
          </a>
        </div>

        {/* Behance Photography Showcase */}
        <div id="gallery-asus-rog-azoth" className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.25em] uppercase text-[#555]">
              Behance — Product Photography
            </span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
            <a
              href="https://www.behance.net/gallery/242268755/ASUS-ROG-Azoth-Extreme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#444] hover:text-[#c8a96e] transition-colors tracking-widest uppercase flex items-center gap-1.5 flex-shrink-0"
            >
              View on Behance
              <svg viewBox="0 0 24 24" className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>

          {/* Project label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="border border-[#c8a96e]/30 px-3 py-1">
              <span className="text-xs text-[#c8a96e] tracking-widest uppercase">ASUS ROG Azoth Extreme</span>
            </div>
            <span className="text-xs text-[#333]">Keyboard · Product Photography · 18 shots</span>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
            {Array.from({ length: 18 }, (_, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isFeature = i === 0 || i === 2;
              return (
                <a
                  key={num}
                  href="https://www.behance.net/gallery/242268755/ASUS-ROG-Azoth-Extreme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden bg-[#111] block ${isFeature ? "md:col-span-2" : ""}`}
                  style={{ aspectRatio: isFeature ? "16/9" : "4/3" }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/asus-rog-azoth/${num}.jpg`}
                    alt={`ASUS ROG Azoth Extreme — shot ${i + 1}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] font-mono text-white/60 bg-black/50 px-1.5 py-0.5 backdrop-blur-sm">
                      {num} / 18
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* YouTube Videos */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.25em] uppercase text-[#555]">
              YouTube — Arabic Tech Content
            </span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {youtubeVideos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#c8a96e]/25 transition-all duration-300 block"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300 group-hover:scale-105"
                    style={{ transition: "opacity 0.3s, transform 0.5s" }}
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#c8a96e]/0 border border-[#c8a96e]/0 flex items-center justify-center group-hover:bg-[#c8a96e]/20 group-hover:border-[#c8a96e]/40 transition-all duration-300">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#c8a96e] opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <p className="text-[#e8e2d9] text-xs font-['DM_Sans'] leading-snug group-hover:text-white transition-colors line-clamp-1">
                    {video.title}
                  </p>
                  <p className="text-[#444] text-xs mt-1 line-clamp-1 group-hover:text-[#666] transition-colors">
                    {video.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Product Photography */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.25em] uppercase text-[#555]">
              Product Photography & Reviews
            </span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {productReviews.map((review) =>
              review.gallery ? (
                // Special card: has both a review link and a scroll-to-gallery button
                <div
                  key={review.url}
                  className="group flex flex-col justify-between p-4 bg-[#0a0a0a] border border-[#c8a96e]/25 hover:border-[#c8a96e]/50 hover:bg-[#0d0d0b] transition-all duration-300"
                >
                  <div>
                    <span className="text-[#c8a96e]/60 text-xs tracking-widest uppercase">
                      {review.cat}
                    </span>
                    <p className="text-[#e8e2d9] text-sm font-['DM_Sans'] mt-1 leading-snug">
                      {review.name}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#1a1a1a]">
                    <button
                      onClick={() => document.getElementById(review.gallery!)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      className="text-[9px] tracking-widest uppercase text-[#c8a96e]/70 hover:text-[#c8a96e] transition-colors flex items-center gap-1"
                    >
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                        <circle cx="12" cy="13" r="4"/>
                      </svg>
                      18 Photos ↑
                    </button>
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#444] hover:text-[#c8a96e]/60 transition-colors"
                    >
                      Review →
                    </a>
                  </div>
                </div>
              ) : (
              <a
                key={review.url}
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-4 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#c8a96e]/20 hover:bg-[#0d0d0b] transition-all duration-300"
              >
                <div>
                  <span className="text-[#444] text-xs tracking-widest uppercase group-hover:text-[#c8a96e]/60 transition-colors">
                    {review.cat}
                  </span>
                  <p className="text-[#888] text-sm font-['DM_Sans'] mt-1 group-hover:text-[#e8e2d9] transition-colors leading-snug">
                    {review.name}
                  </p>
                </div>
                <span className="text-xs text-[#333] group-hover:text-[#c8a96e]/40 transition-colors mt-3 self-end">
                  →
                </span>
              </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

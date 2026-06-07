import { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const REELS: { id: string; url: string }[] = [
  { id: "DBMjgoFtuf7", url: "https://www.instagram.com/reel/DBMjgoFtuf7/" },
  { id: "DBJ-mnUte12", url: "https://www.instagram.com/reel/DBJ-mnUte12/" },
  { id: "DBZaBypN_Wi", url: "https://www.instagram.com/reel/DBZaBypN_Wi/" },
  { id: "DBb83MPN9aq", url: "https://www.instagram.com/reel/DBb83MPN9aq/" },
  { id: "DCrR0g0Nx-G", url: "https://www.instagram.com/reel/DCrR0g0Nx-G/" },
  { id: "DE3AC3kNP74", url: "https://www.instagram.com/reel/DE3AC3kNP74/" },
  { id: "DEruFxHImFP", url: "https://www.instagram.com/reel/DEruFxHImFP/" },
  { id: "DFnx7YetUQm", url: "https://www.instagram.com/reel/DFnx7YetUQm/" },
  { id: "DFYbADctc67", url: "https://www.instagram.com/reel/DFYbADctc67/" },
  { id: "DFQuTGgtDZ-", url: "https://www.instagram.com/reel/DFQuTGgtDZ-/" },
  { id: "DHjM7pOIbFM", url: "https://www.instagram.com/reel/DHjM7pOIbFM/" },
  { id: "DHgvusoMBFo", url: "https://www.instagram.com/reel/DHgvusoMBFo/" },
  { id: "DGfkdeptz1b", url: "https://www.instagram.com/reel/DGfkdeptz1b/" },
  { id: "DJueLWQte2I", url: "https://www.instagram.com/reel/DJueLWQte2I/" },
  { id: "DKB7FG-taeA", url: "https://www.instagram.com/reel/DKB7FG-taeA/" },
  { id: "DKAdd8CtBFM", url: "https://www.instagram.com/reel/DKAdd8CtBFM/" },
  { id: "DBhPkJJNe3N", url: "https://www.instagram.com/reel/DBhPkJJNe3N/" },
  { id: "DKNUI_oNLDp", url: "https://www.instagram.com/reel/DKNUI_oNLDp/" },
  { id: "DJbliIGN6_V", url: "https://www.instagram.com/reel/DJbliIGN6_V/" },
  { id: "DGk_yfXtyFY", url: "https://www.instagram.com/reel/DGk_yfXtyFY/" },
  { id: "DGEKT5mtbTP", url: "https://www.instagram.com/reel/DGEKT5mtbTP/" },
  { id: "DGBd_GCtgu-", url: "https://www.instagram.com/reel/DGBd_GCtgu-/" },
  { id: "DFIBuc7Nv94", url: "https://www.instagram.com/reel/DFIBuc7Nv94/" },
  { id: "DEVctc8tX17", url: "https://www.instagram.com/reel/DEVctc8tX17/" },
  { id: "DDppQR6tHpw", url: "https://www.instagram.com/reel/DDppQR6tHpw/" },
  { id: "DDNdd8oNjz8", url: "https://www.instagram.com/reel/DDNdd8oNjz8/" },
  { id: "DDIRfcGtg8J", url: "https://www.instagram.com/reel/DDIRfcGtg8J/" },
  { id: "DC2QfhgNJNf", url: "https://www.instagram.com/reel/DC2QfhgNJNf/" },
  { id: "DChoGFWNNkI", url: "https://www.instagram.com/reel/DChoGFWNNkI/" },
  { id: "DCXMlf3t4H0", url: "https://www.instagram.com/reel/DCXMlf3t4H0/" },
  { id: "DCSRQXstQcv", url: "https://www.instagram.com/reel/DCSRQXstQcv/" },
];

export default function Reels() {
  const autoplay = useRef(
    Autoplay({ delay: 0, stopOnInteraction: false, stopOnMouseEnter: true, playOnInit: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      slidesToScroll: 1,
      duration: 30,
    },
    [autoplay.current]
  );

  // Continuous slow drift using requestAnimationFrame
  const rafRef = useRef<number>(0);
  const speedRef = useRef(0.55); // px per frame

  const drift = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(emblaApi.selectedScrollSnap(), false);
    // Manually scroll by manipulating internal engine
    const engine = (emblaApi as any).internalEngine?.();
    if (engine) {
      engine.location.add(speedRef.current);
      engine.target.set(engine.location.get());
      engine.scrollLooper.loop([engine.location, engine.target]);
      emblaApi.reInit();
    }
    rafRef.current = requestAnimationFrame(drift);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Use CSS-based auto-scroll via Embla's scrollNext on a tight interval
    const SPEED_MS = 20;
    let interval: ReturnType<typeof setInterval>;

    const start = () => {
      interval = setInterval(() => {
        const engine = (emblaApi as any).internalEngine?.();
        if (!engine) return;
        engine.location.add(speedRef.current);
        engine.target.set(engine.location.get());
        engine.scrollLooper.loop([engine.location, engine.target]);
        (emblaApi as any).dangerouslyGetEngine?.()?.translate?.toPercent?.();
        emblaApi.reInit({ loop: true });
      }, SPEED_MS);
    };

    // Simpler: use CSS animation approach via transform override
    return () => clearInterval(interval);
  }, [emblaApi, drift]);

  return (
    <div className="py-32 overflow-hidden">
      {/* Section header — contained */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#c8a96e]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c8a96e]">Campaigns</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold leading-tight mt-4 text-[#e8e2d9]">
              Reels &<br />Short-Form Content
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-4">
            <div className="flex gap-8">
              {[
                { num: `${REELS.length}`, label: "Reels" },
                { num: "Tech", label: "Focus" },
                { num: "AR", label: "Market" },
              ].map((s) => (
                <div key={s.label} className="text-right">
                  <p className="font-['Playfair_Display'] text-2xl text-[#c8a96e]">{s.num}</p>
                  <p className="text-[10px] tracking-widest uppercase text-[#444] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
            <a
              href="https://www.instagram.com/ehabelsayed12001/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#555] hover:text-[#c8a96e] transition-colors tracking-widest uppercase"
            >
              @ehabelsayed12001 →
            </a>
          </div>
        </div>
      </div>

      {/* Infinite marquee strip — full bleed */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />

        {/* Marquee wrapper */}
        <div className="flex gap-4 animate-marquee hover:pause-marquee">
          {/* Render twice for seamless loop */}
          {[...REELS, ...REELS].map((reel, idx) => (
            <a
              key={`${reel.id}-${idx}`}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 overflow-hidden bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#c8a96e]/40 transition-all duration-500"
              style={{ width: "180px", aspectRatio: "9/16" }}
            >
              {/* Thumbnail — served locally */}
              <img
                src={`${import.meta.env.BASE_URL}reels/${reel.id}.jpg`}
                alt={`Reel ${(idx % REELS.length) + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay — heavier at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent" />

              {/* Number badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono text-[#c8a96e]/90 bg-[#0a0a0a]/70 px-2 py-0.5 backdrop-blur-sm">
                  {String((idx % REELS.length) + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Hover overlay — play icon + "View" */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full border border-[#c8a96e]/60 bg-[#0a0a0a]/50 flex items-center justify-center mb-3 backdrop-blur-sm group-hover:border-[#c8a96e] group-hover:bg-[#c8a96e]/20 transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#c8a96e] ml-0.5" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[#c8a96e]/80">
                  View on Instagram
                </span>
              </div>

              {/* Bottom Instagram indicator */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#555] flex-shrink-0" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span className="text-[9px] font-mono text-[#444] truncate group-hover:text-[#666] transition-colors">
                    {reel.id}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-center">
        <a
          href="https://www.instagram.com/ehabelsayed12001/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 border border-[#1a1a1a] text-[#555] px-8 py-3 text-xs tracking-widest uppercase hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300"
        >
          View All on Instagram
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}

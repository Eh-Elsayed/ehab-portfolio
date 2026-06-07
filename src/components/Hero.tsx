import { useEffect, useRef, useState } from "react";

const roles = [
  "Mechatronics Engineer",
  "Robotics Simulation Engineer",
  "Game Engine Developer",
  "IoT Specialist",
  "System Designer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Animated grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const gridSize = 60;
      time += 0.008;

      // Draw animated grid
      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          const dist = Math.sqrt((x - w / 2) ** 2 + (y - h / 2) ** 2);
          const wave = Math.sin(dist * 0.015 - time * 2) * 0.5 + 0.5;
          const alpha = wave * 0.12 + 0.03;

          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 169, 110, ${alpha})`;
          ctx.fill();
        }
      }

      // Draw circuit lines
      ctx.strokeStyle = "rgba(200, 169, 110, 0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]" />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-[40vw] h-full opacity-5"
        style={{
          background: "linear-gradient(135deg, transparent 60%, #c8a96e 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c8a96e]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c8a96e]">
                Based in Naples, Italy
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 tracking-tight">
              Ehab
              <br />
              <span className="text-[#c8a96e]">Elsayed</span>
            </h1>

            <div className="flex items-center gap-3 h-10 mb-8">
              <span className="text-[#888] text-sm tracking-widest uppercase font-mono">
                {displayed}
                <span className="animate-pulse text-[#c8a96e]">|</span>
              </span>
            </div>

            <p className="text-[#888] text-base leading-relaxed max-w-md mb-10 font-['DM_Sans']">
              Mechatronics Engineer bridging the physical and digital — from autonomous robots
              and CubeSat payloads to Unreal Engine simulations and real-time IoT systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("experience")}
                className="group flex items-center gap-3 bg-[#c8a96e] text-[#0a0a0a] px-6 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-[#d4b97e] transition-all duration-300"
              >
                View Work
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-3 border border-[#333] text-[#888] px-6 py-3 text-sm tracking-widest uppercase hover:border-[#c8a96e] hover:text-[#c8a96e] transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right — stats */}
          <div className="hidden lg:flex flex-col gap-6 items-end">
            {[
              { num: "5+", label: "Years Engineering" },
              { num: "8+", label: "Roles & Positions" },
              { num: "4", label: "Hackathon Awards" },
              { num: "2", label: "Research Centers" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-end gap-4 group cursor-default"
              >
                <span className="text-[#555] text-sm tracking-widest uppercase font-['DM_Sans'] group-hover:text-[#888] transition-colors">
                  {stat.label}
                </span>
                <span className="font-['Playfair_Display'] text-5xl text-[#2a2a2a] group-hover:text-[#c8a96e]/30 transition-colors leading-none">
                  {stat.num}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest uppercase text-[#444]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#444] to-transparent" />
        </div>
      </div>
    </div>
  );
}

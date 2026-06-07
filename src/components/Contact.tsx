export default function Contact() {
  return (
    <div className="py-32 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c8a96e]">Contact</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold leading-tight mt-4 text-[#e8e2d9]">
            Let's build<br />
            something<br />
            <span className="text-[#333]">remarkable.</span>
          </h2>

          <p className="text-[#555] font-['DM_Sans'] text-base leading-relaxed mt-8 max-w-sm">
            Whether you need a robotics engineer, a simulation developer, or a systems designer —
            I'm available for full-time roles, freelance projects, and research collaborations.
          </p>

          <div className="flex flex-col gap-4 mt-10">
            <a
              href="mailto:Eh.Bayoumy@gmail.com"
              className="group flex items-center gap-4 text-[#888] hover:text-[#e8e2d9] transition-colors"
            >
              <span className="text-xs tracking-widest uppercase text-[#444] w-24">Email</span>
              <span className="font-['DM_Sans'] group-hover:text-[#c8a96e] transition-colors">
                Eh.Bayoumy@gmail.com
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform text-[#444] group-hover:text-[#c8a96e]">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ehab-el-sayed/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[#888] hover:text-[#e8e2d9] transition-colors"
            >
              <span className="text-xs tracking-widest uppercase text-[#444] w-24">LinkedIn</span>
              <span className="font-['DM_Sans'] group-hover:text-[#c8a96e] transition-colors">
                Ehab El-Sayed
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform text-[#444] group-hover:text-[#c8a96e]">→</span>
            </a>
            <a
              href="https://www.instagram.com/ehabelsayed12001/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[#888] hover:text-[#e8e2d9] transition-colors"
            >
              <span className="text-xs tracking-widest uppercase text-[#444] w-24">Instagram</span>
              <span className="font-['DM_Sans'] group-hover:text-[#c8a96e] transition-colors">
                @ehabelsayed12001
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform text-[#444] group-hover:text-[#c8a96e]">→</span>
            </a>
            <div className="flex items-center gap-4 text-[#888]">
              <span className="text-xs tracking-widest uppercase text-[#444] w-24">Phone</span>
              <span className="font-['DM_Sans']">+39 351 306 1625</span>
            </div>
            <div className="flex items-center gap-4 text-[#888]">
              <span className="text-xs tracking-widest uppercase text-[#444] w-24">Location</span>
              <span className="font-['DM_Sans']">Naples, Italy</span>
            </div>
          </div>
        </div>

        {/* Right — CTA card */}
        <div className="relative">
          <div className="bg-[#0f0e0c] border border-[#2a2218] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#c8a96e]/10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#c8a96e]/10" />

            <h3 className="font-['Playfair_Display'] text-3xl text-[#e8e2d9] mb-3">
              Available for Hire
            </h3>
            <p className="text-[#555] font-['DM_Sans'] text-sm leading-relaxed mb-8">
              Open to full-time engineering roles, simulation & game-tech contracts,
              and research collaborations across robotics, autonomous systems, and IoT.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Autonomous Systems & Robotics",
                "Unreal Engine 5 Simulation",
                "Embedded Systems & IoT",
                "System Design & UI/UX",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#c8a96e] rounded-full flex-shrink-0" />
                  <span className="text-[#666] text-sm font-['DM_Sans']">{item}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/in/ehab-el-sayed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-[#2a2218] text-[#555] py-2.5 text-xs tracking-widest uppercase hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/ehabelsayed12001/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-[#2a2218] text-[#555] py-2.5 text-xs tracking-widest uppercase hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300"
              >
                Instagram
              </a>
            </div>

            <a
              href="mailto:Eh.Bayoumy@gmail.com"
              className="group w-full flex items-center justify-between bg-[#c8a96e] text-[#0a0a0a] px-6 py-4 hover:bg-[#d4b97e] transition-all duration-300"
            >
              <span className="text-sm tracking-widest uppercase font-semibold">
                Start a Conversation
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1a1a1a] mt-24 pt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[#333] text-xs font-['DM_Sans']">
          © 2026 Ehab Elsayed — Mechatronics Engineer
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/ehab-el-sayed/" target="_blank" rel="noopener noreferrer" className="text-[#2a2a2a] text-xs hover:text-[#444] transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/ehabelsayed12001/" target="_blank" rel="noopener noreferrer" className="text-[#2a2a2a] text-xs hover:text-[#444] transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  );
}

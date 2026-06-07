const projects = [
  {
    num: "01",
    title: "Autonomous Greenhouse Robot",
    subtitle: "Graduation Project",
    desc: "ROS-based autonomous robot for efficient navigation and real-time data acquisition in vertical greenhouse environments. Optimized plant monitoring and maintenance through intelligent path planning.",
    tags: ["ROS", "Python", "Autonomous Navigation", "Embedded Systems"],
    highlight: true,
  },
  {
    num: "02",
    title: "Embedded Smart Greenhouse Control",
    subtitle: "16th UGRF · 2nd Place",
    desc: "Automated control system for irrigation, temperature, and humidity regulation using embedded hardware and IoT sensors. Awarded 2nd Place at the 4th Egyptian Junior Researcher Competition — 16th UGRF Special Edition, Nile University, August 2023.",
    tags: ["Arduino", "IoT", "Sensors", "Automation"],
    highlight: false,
  },
  {
    num: "03",
    title: "Self-Balancing Robot",
    subtitle: "Engineering Project",
    desc: "Programmed Arduino Nano and gyroscope for real-time balance control using PID algorithms. Ensures precise balance during dynamic motion with continuous feedback loops.",
    tags: ["Arduino", "PID Control", "IMU", "C++"],
    highlight: false,
  },
  {
    num: "04",
    title: "Automatic Railway Crossing Gate",
    subtitle: "Embedded Systems Project",
    desc: "Smart railway gate control using Embedded C and Raspberry Pi. Integrated BLYNK mobile app for real-time state monitoring and direct technician interaction.",
    tags: ["Raspberry Pi", "Embedded C", "IoT", "BLYNK"],
    highlight: false,
  },
  {
    num: "05",
    title: "PLC Villa Elevator System",
    subtitle: "Industrial Automation",
    desc: "Designed PLC program using Ladder Logic for a two-floor elevator system. Prepared complete I/O connection diagram, wiring diagram, and implementation using Allen-Bradley and RS Logix.",
    tags: ["PLC", "Ladder Logic", "Allen-Bradley", "RS Logix 500"],
    highlight: false,
  },
  {
    num: "06",
    title: "CubeSat Payload System",
    subtitle: "Egyptian Space Agency",
    desc: "Implemented hardware and software updates for the Payload subsystem in the Space-Keys CubeSat project. Part of Egypt's national space engineering program.",
    tags: ["CubeSat", "Embedded Systems", "Aerospace", "Space Tech"],
    highlight: true,
  },
];

export default function Projects() {
  return (
    <div className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c8a96e]">Projects</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold leading-tight mt-4 text-[#e8e2d9]">
            What I've Built
          </h2>
        </div>
        <p className="hidden md:block text-[#444] text-sm max-w-xs text-right font-['DM_Sans']">
          From CubeSats to robot simulations — engineering that ships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
        {projects.map((project) => (
          <div
            key={project.num}
            className={`relative p-8 group transition-all duration-300 cursor-default ${
              project.highlight
                ? "bg-[#0f0e0c]"
                : "bg-[#0a0a0a]"
            } hover:bg-[#0f0f0d]`}
          >
            {/* Hover accent */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#c8a96e]/15 transition-all duration-300 pointer-events-none" />

            <div className="flex items-start justify-between mb-6">
              <span className="font-['Playfair_Display'] text-4xl text-[#c8a96e]/50 group-hover:text-[#c8a96e] transition-colors leading-none" style={{ textShadow: 'var(--tw-group-hover, 0 0 20px rgba(200,169,110,0.3))' }}>
                {project.num}
              </span>
              {project.highlight && (
                <span className="text-xs text-[#c8a96e]/60 border border-[#c8a96e]/20 px-2 py-0.5">
                  Featured
                </span>
              )}
            </div>

            <div className="mb-1">
              <span className="text-xs tracking-widest uppercase text-[#444] group-hover:text-[#555] transition-colors">
                {project.subtitle}
              </span>
            </div>

            <h3 className="text-[#e8e2d9] font-semibold font-['DM_Sans'] text-lg mb-3 group-hover:text-white transition-colors">
              {project.title}
            </h3>

            <p className="text-[#555] text-sm leading-relaxed font-['DM_Sans'] mb-6 group-hover:text-[#666] transition-colors">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#444] border border-[#1e1e1e] px-2 py-0.5 group-hover:border-[#2e2e2e] group-hover:text-[#555] transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

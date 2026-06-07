const experiences = [
  {
    role: "Intern Research Assistant",
    company: "PRISMA Lab",
    companyUrl: "https://prisma.dieti.unina.it/",
    type: "Intern",
    period: "May 2026 – Present",
    location: "Naples, Italy",
    desc: "Working on the assembly and testing of the Solo 12 quadruped robot, supporting hardware setup, integration, and experimental robotics activities.",
    tags: ["Quadruped Robotics", "Hardware Integration", "Solo 12", "Experimental Robotics"],
    current: true,
  },
  {
    role: "Game Engine Engineer",
    company: "Sahure-Labs",
    companyUrl: "https://www.sahurelabs.com/",
    type: "Part-Time",
    period: "April 2026 – Present",
    location: "Remote",
    desc: "Developing Unreal Engine 5 plug-in extensions for simulation and interactive capabilities for internal development pipelines.",
    tags: ["Unreal Engine 5", "C++", "Simulation"],
    current: true,
  },
  {
    role: "System Design Engineer & UI/UX Designer",
    company: "Egyptian Endowments Ministry",
    companyUrl: "https://awkafonline.gov.eg/",
    type: "Full-Time",
    period: "Jun 2025 – Nov 2025",
    location: "Egypt",
    desc: "Developed and optimized multiple new software systems for internal ministry use. Designed full UX journeys for web and mobile applications used by thousands of civil servants.",
    tags: ["System Design", "UI/UX", "Web Apps", "Mobile"],
    current: false,
  },
  {
    role: "IoT Instructor",
    company: "Samsung Innovation Campus",
    companyUrl: undefined as string | undefined,
    type: "Contract",
    period: "Aug – Oct 2025",
    location: "Egypt",
    desc: "Delivered hands-on training on IoT concepts, embedded systems, and cloud integration. Mentored participants through full project lifecycle from ideation to deployment.",
    tags: ["IoT", "Embedded Systems", "Cloud", "Teaching"],
    current: false,
  },
  {
    role: "Robotics Simulation Engineer",
    company: "Open Robot Combat (ORC)",
    companyUrl: undefined as string | undefined,
    type: "Full-Time",
    period: "Jul 2024 – May 2025",
    location: "Remote",
    desc: "Developed and optimized autonomous robot algorithms using Unreal Engine 5. Designed and built virtual levels and training maps for robot AI development.",
    tags: ["Unreal Engine 5", "Robotics", "Autonomous Systems", "Level Design"],
    current: false,
  },
  {
    role: "Videographer · Photographer · Video Editor",
    company: "Arabhardware",
    companyUrl: "https://arabhardware.net",
    type: "One-Man Crew",
    period: "Sep 2024 – Jun 2025",
    location: "Egypt",
    desc: "Sole content creator handling the full production pipeline — on-site videography and product photography, video editing, and post-production for tech reviews and event coverage published on Arabhardware.net and YouTube.",
    tags: ["Videography", "Photography", "Video Editing", "Content Production", "Tech Media"],
    current: false,
  },
  {
    role: "Aerospace – Mechatronics Engineer",
    company: "Egyptian Space Agency (EGSA)",
    companyUrl: "https://egsa.gov.eg/",
    type: "Full-Time",
    period: "May – Oct 2024",
    location: "Egypt",
    desc: "Implemented hardware and software updates in the Payload subsystem for the Space-Keys project, focused on CubeSat satellite development.",
    tags: ["CubeSat", "Payload Systems", "Embedded", "Aerospace"],
    current: false,
  },
  {
    role: "Junior Research Assistant",
    company: "Smart Engineering Systems Research Center (SESC)",
    companyUrl: "https://sesc.nu.edu.eg/",
    type: "Intern",
    period: "Oct – Dec 2024",
    location: "Nile University",
    desc: "Conducted research on Digital Twin technology and its applications across various industrial sectors. Prepared detailed research proposals aimed at securing international funding opportunities.",
    tags: ["Digital Twin", "Research", "Funding Proposals", "Industrial Applications"],
    current: false,
  },
  {
    role: "Junior Research Assistant",
    company: "Nanoelectronics Integrated Systems Research Center (NISC)",
    companyUrl: "https://nisc.nu.edu.eg/",
    type: "Intern",
    period: "Feb – Apr 2024",
    location: "Nile University",
    desc: "Modeled and designed mechanical parts for a continuous glucose monitoring system based on a Microneedle sensing project.",
    tags: ["Mechanical Design", "Microneedle", "Glucose Monitoring", "CAD"],
    current: false,
  },
  {
    role: "Photography Junior Teaching Assistant",
    company: "Nile University",
    companyUrl: "https://www.nu.edu.eg/",
    type: "Part-Time",
    period: "Oct – Dec 2023",
    location: "Egypt",
    desc: "Conducted lectures on Adobe Lightroom and photo editing techniques. Supported the NU marketing team in covering events, MOUs, and social media campaigns.",
    tags: ["Adobe Lightroom", "Photography", "Teaching", "Content Creation"],
    current: false,
  },
  {
    role: "Model Based Design Intern",
    company: "Innovation Hub",
    companyUrl: "https://drive.google.com/file/d/1gIGhTZHThQzsWjVgG1Y-T-qCmvezJ2LW/view",
    type: "Intern",
    period: "Jul – Sep 2023",
    location: "Egypt",
    desc: "Designed several mini model-based projects focused on automotive safety functions. Collaborated with a multidisciplinary team to deliver comprehensive reports on practical applications in mechatronics engineering.",
    tags: ["Model-Based Design", "Automotive Safety", "MATLAB", "Mechatronics"],
    current: false,
  },
];

export default function Experience() {
  return (
    <div className="bg-[#080808] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#c8a96e]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c8a96e]">Experience</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold leading-tight mt-4 text-[#e8e2d9]">
              Where I've<br />Built Things
            </h2>
            <p className="text-[#555] text-sm mt-4 font-['DM_Sans'] leading-relaxed">
              From satellite systems to game engines — a track record of shipping real work.
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1a1a1a]" />
              <div className="space-y-0">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-8 pb-10 group">
                    <div className={`absolute left-[-4px] top-1 w-2 h-2 rounded-full border transition-all duration-300 ${
                      exp.current
                        ? "bg-[#c8a96e] border-[#c8a96e] shadow-[0_0_8px_#c8a96e]"
                        : "bg-[#0a0a0a] border-[#333] group-hover:border-[#c8a96e]/50"
                    }`} />

                    <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 group-hover:border-[#c8a96e]/20 transition-all duration-300 group-hover:bg-[#0d0d0d]">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-[#e8e2d9] font-semibold font-['DM_Sans']">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="text-xs px-2 py-0.5 bg-[#c8a96e]/10 text-[#c8a96e] border border-[#c8a96e]/20">
                                Current
                              </span>
                            )}
                          </div>
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#c8a96e] text-sm mt-0.5 hover:text-[#d4b97e] transition-colors inline-flex items-center gap-1"
                            >
                              {exp.company}
                              <svg viewBox="0 0 24 24" className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                              </svg>
                            </a>
                          ) : (
                            <p className="text-[#c8a96e] text-sm mt-0.5">{exp.company}</p>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-[#555] text-xs font-mono">{exp.period}</p>
                          <p className="text-[#444] text-xs mt-0.5">{exp.location} · {exp.type}</p>
                        </div>
                      </div>

                      <p className="text-[#666] text-sm leading-relaxed font-['DM_Sans'] mb-4">
                        {exp.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="text-xs text-[#555] border border-[#1e1e1e] px-2 py-0.5 group-hover:border-[#2a2a2a] group-hover:text-[#666] transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

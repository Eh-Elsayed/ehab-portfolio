interface NavProps {
  activeSection: string;
  scrollY: number;
}

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "portfolio", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navigation({ activeSection, scrollY }: NavProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrollY > 80 ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-['Playfair_Display'] text-lg tracking-tight text-[#e8e2d9] hover:text-[#c8a96e] transition-colors"
        >
          EE
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm tracking-[0.12em] uppercase transition-all duration-300 ${
                activeSection === item.id ? "text-[#c8a96e]" : "text-[#888] hover:text-[#e8e2d9]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a
          href="mailto:Eh.Bayoumy@gmail.com"
          className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase border border-[#c8a96e]/40 text-[#c8a96e] px-4 py-2 hover:bg-[#c8a96e]/10 transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

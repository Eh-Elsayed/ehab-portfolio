const skills = {
  "Programming": ["Python", "C++", "C", "ROS", "Ladder Logic", "MATLAB"],
  "3D & Design": ["Unreal Engine 5", "Fusion 360", "SolidWorks", "AutoCAD", "Adobe Suite"],
  "Embedded & IoT": ["ESP32", "Raspberry Pi", "Arduino", "PLC Systems"],
  "Fabrication": ["3D Printing", "CNC", "Laser Cutting", "Altium Designer"],
  "PM & Tools": ["Git/GitHub", "Asana", "Coda IO", "Microsoft Project"],
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Section label */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c8a96e]">About</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold leading-tight mt-4 text-[#e8e2d9]">
            Engineer.<br />Creator.<br />Builder.
          </h2>
        </div>

        {/* Main content */}
        <div className="lg:col-span-9 space-y-12">
          <div className="space-y-5 text-[#888] font-['DM_Sans'] text-base leading-relaxed max-w-2xl">
            <p>
              I'm a Mechatronics Engineer currently pursuing my Master's in Autonomous Vehicle
              Engineering at the{" "}
              <span className="text-[#e8e2d9]">University of Naples Federico II</span> — 
              where ancient history meets cutting-edge aerospace research.
            </p>
            <p>
              My work spans the full spectrum: from programming{" "}
              <span className="text-[#e8e2d9]">CubeSat payloads</span> for Egypt's space
              agency, to building Unreal Engine 5 simulation environments for combat robots,
              to designing software systems used daily by thousands of Egyptian civil servants.
            </p>
            <p>
              I believe the most interesting problems live at the intersection of hardware
              and software — where code becomes physical, and machines start to think.
            </p>
          </div>

          {/* Education */}
          <div className="border-t border-[#1a1a1a] pt-8">
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#555] mb-6">Education</h3>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-1 bg-[#c8a96e]/30 rounded-full relative">
                  <div className="absolute top-0 left-0 w-full h-8 bg-[#c8a96e] rounded-full" />
                </div>
                <div>
                  <p className="text-[#e8e2d9] font-semibold font-['DM_Sans']">
                    MSc — Autonomous Vehicle Engineering
                  </p>
                  <p className="text-[#c8a96e] text-sm mt-1">University of Naples Federico II</p>
                  <p className="text-[#555] text-sm mt-0.5">Sep 2025 – June 2027 · Naples, Italy</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-1 bg-[#1a1a1a] rounded-full relative">
                  <div className="absolute top-0 left-0 w-full h-5 bg-[#333] rounded-full" />
                </div>
                <div>
                  <p className="text-[#e8e2d9] font-semibold font-['DM_Sans']">
                    BEng — Mechanical Engineering, Mechatronics
                  </p>
                  <p className="text-[#666] text-sm mt-1">Nile University</p>
                  <p className="text-[#555] text-sm mt-0.5">Sep 2019 – Feb 2024 · Egypt</p>
                  <p className="text-[#666] text-sm mt-1 italic">
                    Graduation Project: Autonomous Robot for Vertical Greenhouses (ROS)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="border-t border-[#1a1a1a] pt-8">
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#555] mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-[#666] bg-[#111] border border-[#222] px-2.5 py-1 hover:border-[#c8a96e]/30 hover:text-[#888] transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="border-t border-[#1a1a1a] pt-8">
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#555] mb-6">Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { place: "2nd", event: "Future of Data Center Techathon", detail: "Smart Greenhouse Control System, 2022" },
                { place: "1st", event: "Benha Hackathon — Utilities Track", detail: "Smart Cities powered by AWS, 2022" },
                { place: "1st", event: "Benha University Hackathon", detail: "Best Solution for Smart Cities" },
                { place: "×4", event: "Nile University UGRF", detail: "Undergraduate Research Forum, 2019–2023" },
              ].map((award) => (
                <div
                  key={award.event}
                  className="flex gap-4 p-4 bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#c8a96e]/20 transition-colors"
                >
                  <span className="font-['Playfair_Display'] text-3xl text-[#c8a96e]/20 leading-none flex-shrink-0">
                    {award.place}
                  </span>
                  <div>
                    <p className="text-[#e8e2d9] text-sm font-['DM_Sans']">{award.event}</p>
                    <p className="text-[#555] text-xs mt-1">{award.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

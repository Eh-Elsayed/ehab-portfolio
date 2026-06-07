import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import Reels from "./components/Reels";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import "./index.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["hero", "about", "experience", "projects", "portfolio", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#e8e2d9] min-h-screen overflow-x-hidden">
      <Navigation activeSection={activeSection} scrollY={scrollY} />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="reels"><Reels /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

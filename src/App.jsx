import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/skills";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import CertificateView from "./pages/CertificateView";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-white min-h-screen scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <nav className="bg-slate-900 px-6 md:px-12 py-4 flex justify-between items-center fixed w-full z-50">
        <h1 className="text-xl md:text-2xl font-bold text-cyan-400">
          Dipesh Maurya
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-300">
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#certificates" className="hover:text-cyan-400">
            Certificates
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-800 flex flex-col items-center gap-6 py-6 md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#certificates" onClick={() => setMenuOpen(false)}>
              Certificates
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* ================= PAGE CONTENT ================= */}
      <div className="pt-20">
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="skills">
          <Skills />
        </div>

        {/* ✅ Certificates Added Properly */}
        <div id="certificates">
          <Certificates />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

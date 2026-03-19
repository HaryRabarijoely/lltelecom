import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
            <img
                src={logo}
                alt="LL Telecom"
                className="h-10 w-auto object-contain"
            />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white">
            Accueil
          </button>
          <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white">
            Services
          </button>
          <button className="hover:text-white">
            Projets
          </button>
          <button className="hover:text-white">
            Contact
          </button>
        </div>

        {/* CTA button */}
        <button className="hidden md:block px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-sm font-medium rounded-xl shadow-lg shadow-cyan-500/30">
          Demander un devis
        </button>

        {/* Mobile icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>
      </nav>
    </header>
  );
}
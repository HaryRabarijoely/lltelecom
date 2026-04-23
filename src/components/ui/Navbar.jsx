import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">
            <img
                src={logo}
                alt="LL Telecom"
                className="h-10 w-auto object-contain"
            />
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <button onClick={() => scrollTo("accueil")}>Accueil</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("projets")}>Projets</button>
          <button onClick={() => scrollTo("process")}>Process</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>

        {/* CTA */}
        <button className="hidden md:block px-5 py-2 bg-cyan-500 rounded-xl">
          Devis
        </button>

        {/* BURGER */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-6 flex flex-col gap-4 text-gray-300">
          <a href="#" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Projets</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>

          <button className="mt-4 px-5 py-2 bg-cyan-500 rounded-xl">
            Devis
          </button>
        </div>
      )}
    </nav>
  );
}
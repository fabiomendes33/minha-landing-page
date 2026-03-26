"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - PORTFÓLIO no lugar do Fabio.dev */}
        <a
          href="#"
          className="text-2xl md:text-3xl font-black text-white tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text"
        >
          PORTFÓLIO
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm font-semibold">
          <a
            href="#features"
            className="hover:text-white transition-all duration-200"
          >
            Habilidades
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-all duration-200"
          >
            Projetos
          </a>
          <a
            href="#about"
            className="hover:text-white transition-all duration-200"
          >
            Sobre
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-all duration-200"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/10 py-6">
            <div className="flex flex-col gap-4 text-center text-gray-300 text-lg font-semibold">
              <a href="#features" className="hover:text-white transition">
                Habilidades
              </a>
              <a href="#projects" className="hover:text-white transition">
                Projetos
              </a>
              <a href="#about" className="hover:text-white transition">
                Sobre
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contato
              </a>
              <a
                href="#contact"
                className="px-8 py-3 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl w-fit hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                Contratar →
              </a>
            </div>
          </div>
        )}

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 shadow-xl shadow-purple-500/25"
        >
          Contratar →
        </a>
      </div>
    </nav>
  );
}

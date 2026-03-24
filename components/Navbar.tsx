"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-white font-extrabold text-xl tracking-tight">
          Fabio<span className="text-purple-400">.</span>dev
        </span>
        <div className="hidden md:flex gap-8 text-gray-300 text-sm font-medium">
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
        </div>
        <a
          href="#contact"
          className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-xl hover:opacity-90 transition shadow-lg shadow-purple-500/25"
        >
          Contratar →
        </a>
      </div>
    </nav>
  );
}

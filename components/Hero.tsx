"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            🚀 Novidade — Lançamento 2025
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Seu Título{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Impactante
            </span>{" "}
            Aqui
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Descrição clara e objetiva do seu produto ou serviço. Foque no
            benefício principal para o cliente em 1-2 linhas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-500/25">
              Começar Agora — Grátis
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              Ver Demonstração →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

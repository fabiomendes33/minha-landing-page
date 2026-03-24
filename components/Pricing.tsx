"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";

const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "20+", label: "Projetos entregues" },
  { value: "10+", label: "Clientes atendidos" },
  { value: "100%", label: "Comprometimento" },
];

const info = [
  { icon: MapPin, text: "Ituiutaba, Minas Gerais — BR" },
  { icon: GraduationCap, text: "Análise e Desenvolvimento de Sistemas" },
  { icon: Briefcase, text: "Freelancer & Desenvolvimento de Produtos" },
  { icon: Heart, text: "Apaixonado por tecnologia e inovação" },
];

export default function Pricing() {
  return (
    <section id="about" className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
              👨‍💻 Sobre mim
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Olá, sou{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Fabio Mendes
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Analista de Sistemas e desenvolvedor full-stack baseado em
              Ituiutaba, MG. Especializado em criar aplicações web modernas com
              React, Next.js e FastAPI — do design ao deploy.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Fundador da{" "}
              <strong className="text-white">TechNote Soluções</strong>,
              desenvolvo sistemas de gestão sob medida para pequenas e médias
              empresas, com foco em usabilidade e resultados reais.
            </p>
            <ul className="space-y-3">
              {info.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <item.icon className="w-5 h-5 text-purple-400 shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center hover:border-purple-500/30 transition"
              >
                <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

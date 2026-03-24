"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Database, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Moderno",
    desc: "React, Next.js, TypeScript e Tailwind CSS para interfaces rápidas e responsivas.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Backend Robusto",
    desc: "APIs escaláveis com FastAPI e Python, integradas a bancos relacionais e NoSQL.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Deploy & Infra",
    desc: "Projetos publicados na Vercel, Railway e VPS com CI/CD via GitHub Actions.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cpu,
    title: "Sistemas de Gestão",
    desc: "Desenvolvimento de ERPs, CRMs e sistemas de chamados sob medida para empresas.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    desc: "Layouts que funcionam perfeitamente em mobile, tablet e desktop.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    desc: "Otimização de código, lazy loading e métricas de Core Web Vitals no verde.",
    color: "from-violet-500 to-indigo-500",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 bg-gray-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            💼 O que eu faço
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Habilidades &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções completas do design ao deploy, com foco em qualidade e
            entrega.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "TechNote Soluções",
    tag: "SaaS · Gestão de TI",
    desc: "Sistema profissional de manutenção e reparo de notebooks com dashboard, gestão de clientes e tickets em tempo real.",
    tech: ["Next.js", "FastAPI", "Python", "Tailwind"],
    color: "from-purple-600/20 to-indigo-600/20",
    border: "border-purple-500/30",
    link: "https://fabiomendes33.github.io/technote-solucoes",
    github: "https://github.com/fabiomendes33/technote-solucoes",
  },
  {
    title: "PizzaMaster Pro v2.0",
    tag: "Sistema Comercial · Alimentício",
    desc: "Sistema comercial completo para pizzarias, restaurantes e negócios alimentícios com controle de pedidos e cardápio.",
    tech: ["HTML", "JavaScript", "CSS", "PLpgSQL"],
    color: "from-orange-600/20 to-red-600/20",
    border: "border-orange-500/30",
    link: "https://github.com/fabiomendes33/pizzamaster-pro",
    github: "https://github.com/fabiomendes33/pizzamaster-pro",
  },
  {
    title: "Reservas de Hotéis",
    tag: "Frontend · Web App",
    desc: "Sistema de reservas de hotéis com páginas de login, consulta de disponibilidade e confirmação de reservas.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-cyan-600/20 to-blue-600/20",
    border: "border-cyan-500/30",
    link: "https://fabiomendes33.github.io/RESERVAS-DE-HOTEIS/",
    github: "https://github.com/fabiomendes33/RESERVAS-DE-HOTEIS",
  },
  {
    title: "Minha Landing Page",
    tag: "Frontend · SaaS",
    desc: "Landing page de alta conversão com design moderno, animações Framer Motion, seção de preços e formulário de contato.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-pink-600/20 to-rose-600/20",
    border: "border-pink-500/30",
    link: "https://fabiomendes33.github.io/minha-landing-page/",
    github: "https://github.com/fabiomendes33/minha-landing-page",
  },
  {
    title: "API de Gestão",
    tag: "Backend · REST API",
    desc: "API RESTful completa com autenticação JWT, CRUD de usuários e itens, documentação automática Swagger e SQLite.",
    tech: ["FastAPI", "Python", "JWT", "SQLAlchemy"],
    color: "from-green-600/20 to-emerald-600/20",
    border: "border-green-500/30",
    link: "https://github.com/fabiomendes33/api-gestao",
    github: "https://github.com/fabiomendes33/api-gestao",
  },
];

export default function Testimonials() {
  return (
    <section
      id="projects"
      className="py-32 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
            🚀 Projetos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Trabalhos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Recentes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projetos reais desenvolvidos com foco em performance e experiência
            do usuário.
          </p>
        </motion.div>

        {/* Grid 3 + 2 centralizado */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group flex flex-col p-6 bg-gradient-to-br ${project.color} rounded-2xl border ${project.border} hover:border-white/30 transition-all`}
            >
              <span className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                {project.tag}
              </span>
              <h3 className="text-white font-bold text-xl mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Ver projeto
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition"
                >
                  <Code2 className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Linha 2 — 2 cards centralizados */}
        <div className="grid md:grid-cols-2 gap-6 md:max-w-3xl md:mx-auto">
          {projects.slice(3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group flex flex-col p-6 bg-gradient-to-br ${project.color} rounded-2xl border ${project.border} hover:border-white/30 transition-all`}
            >
              <span className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                {project.tag}
              </span>
              <h3 className="text-white font-bold text-xl mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Ver projeto
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition"
                >
                  <Code2 className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

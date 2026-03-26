const projectsTop = [
  {
    category: "SAAS · GESTÃO DE TI",
    title: "TechNote Soluções",
    description:
      "Sistema profissional de manutenção e reparo de notebooks com dashboard, gestão de clientes e tickets em tempo real.",
    techs: ["Next.js", "FastAPI", "Python", "Tailwind"],
    liveUrl: "#",
    codeUrl: "https://github.com/fabiomendes33",
    cardClass:
      "from-violet-500/10 to-fuchsia-500/10 border-violet-500/20 hover:border-violet-400/50 hover:shadow-violet-500/20",
  },
  {
    category: "SISTEMA COMERCIAL · ALIMENTÍCIO",
    title: "PizzaMaster Pro v2.0",
    description:
      "Sistema comercial completo para pizzarias, restaurantes e negócios alimentícios com controle de pedidos e cardápio.",
    techs: ["HTML", "JavaScript", "CSS", "PLpgSQL"],
    liveUrl: "#",
    codeUrl: "https://github.com/fabiomendes33",
    cardClass:
      "from-rose-500/10 to-orange-500/10 border-rose-500/20 hover:border-rose-400/50 hover:shadow-rose-500/20",
  },
  {
    category: "FRONTEND · WEB APP",
    title: "Reservas de Hotéis",
    description:
      "Sistema de reservas de hotéis com páginas de login, consulta de disponibilidade e confirmação de reservas.",
    techs: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    codeUrl: "https://github.com/fabiomendes33",
    cardClass:
      "from-sky-500/10 to-cyan-500/10 border-sky-500/20 hover:border-sky-400/50 hover:shadow-sky-500/20",
  },
];

const projectsBottom = [
  {
    category: "FRONTEND · SAAS",
    title: "Minha Landing Page",
    description:
      "Landing page de alta conversão com design moderno, animações, seção de preços e formulário de contato.",
    techs: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://minha-landing-page-cyan.vercel.app/",
    codeUrl: "https://github.com/fabiomendes33",
    cardClass:
      "from-pink-500/10 to-fuchsia-500/10 border-pink-500/20 hover:border-pink-400/50 hover:shadow-pink-500/20",
  },
  {
    category: "BACKEND · REST API",
    title: "API de Gestão",
    description:
      "API RESTful completa com autenticação JWT, CRUD de usuários e itens, documentação automática Swagger e SQLite.",
    techs: ["Python", "FastAPI", "JWT", "SQLite"],
    liveUrl: "#",
    codeUrl: "https://github.com/fabiomendes33",
    cardClass:
      "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-emerald-500/20",
  },
];

type Project = {
  category: string;
  title: string;
  description: string;
  techs: string[];
  liveUrl: string;
  codeUrl: string;
  cardClass: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`rounded-3xl border bg-gradient-to-br ${project.cardClass} bg-slate-900/70 backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      <p className="text-xs md:text-sm font-semibold tracking-wide text-gray-400 uppercase mb-5">
        {project.category}
      </p>

      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

      <p className="text-gray-300 leading-8 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-3 mb-8">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          ↗ Ver projeto
        </a>

        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white border border-white/10 transition hover:bg-white/10"
        >
          {"</>"} GitHub
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-4 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-5">
            Projetos em destaque
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            PROJETOS REAIS
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Alguns dos sistemas e aplicações que desenvolvi para gestão,
            automação de processos e presença digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsTop.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsBottom.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

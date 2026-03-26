export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-[#0b1220] via-slate-900 to-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Título Principal Focado na Profissão */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent mb-4 leading-tight tracking-tight">
          DESENVOLVEDOR FULL STACK
        </h1>

        {/* Subtítulo específico */}
        <h2 className="text-lg md:text-2xl text-gray-300 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
          Construindo aplicações modernas e escaláveis de ponta a ponta.
          Especialista em{" "}
          <span className="text-white font-bold">Interfaces (Frontend)</span>,{" "}
          <span className="text-white font-bold">APIs (Backend)</span>,{" "}
          <span className="text-white font-bold">Dados</span> e{" "}
          <span className="text-white font-bold">DevOps</span>.
        </h2>

        {/* MURO DE TECNOLOGIAS (Skills Massivas) */}
        <div className="max-w-5xl mx-auto mb-14 space-y-3">
          {/* Linha 1: Front-end */}
          <div className="flex flex-wrap justify-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-wider">
            <span className="text-gray-400 my-auto mr-2">FRONT-END:</span>
            <span className="px-3 py-1.5 bg-sky-500/10 text-sky-400 backdrop-blur rounded-md border border-sky-500/20 hover:bg-sky-500/20 transition">
              HTML5/CSS3
            </span>
            <span className="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 backdrop-blur rounded-md border border-yellow-500/20 hover:bg-yellow-500/20 transition">
              JavaScript ES6+
            </span>
            <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 backdrop-blur rounded-md border border-blue-500/20 hover:bg-blue-500/20 transition">
              TypeScript
            </span>
            <span className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 backdrop-blur rounded-md border border-cyan-500/20 hover:bg-cyan-500/20 transition">
              React.js
            </span>
            <span className="px-3 py-1.5 bg-white/10 text-white backdrop-blur rounded-md border border-white/20 hover:bg-white/20 transition">
              Next.js
            </span>
            <span className="px-3 py-1.5 bg-teal-500/10 text-teal-400 backdrop-blur rounded-md border border-teal-500/20 hover:bg-teal-500/20 transition">
              Tailwind CSS
            </span>
            <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 backdrop-blur rounded-md border border-purple-500/20 hover:bg-purple-500/20 transition">
              Redux / Context
            </span>
          </div>

          {/* Linha 2: Back-end */}
          <div className="flex flex-wrap justify-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-wider">
            <span className="text-gray-400 my-auto mr-2">BACK-END:</span>
            <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 backdrop-blur rounded-md border border-emerald-500/20 hover:bg-emerald-500/20 transition">
              Node.js
            </span>
            <span className="px-3 py-1.5 bg-gray-500/10 text-gray-300 backdrop-blur rounded-md border border-gray-500/20 hover:bg-gray-500/20 transition">
              Express.js
            </span>
            <span className="px-3 py-1.5 bg-red-500/10 text-red-400 backdrop-blur rounded-md border border-red-500/20 hover:bg-red-500/20 transition">
              NestJS
            </span>
            <span className="px-3 py-1.5 bg-green-600/10 text-green-500 backdrop-blur rounded-md border border-green-600/20 hover:bg-green-600/20 transition">
              FastAPI
            </span>
            <span className="px-3 py-1.5 bg-yellow-600/10 text-yellow-500 backdrop-blur rounded-md border border-yellow-600/20 hover:bg-yellow-600/20 transition">
              Python
            </span>
            <span className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 backdrop-blur rounded-md border border-indigo-500/20 hover:bg-indigo-500/20 transition">
              RESTful APIs
            </span>
            <span className="px-3 py-1.5 bg-pink-500/10 text-pink-400 backdrop-blur rounded-md border border-pink-500/20 hover:bg-pink-500/20 transition">
              GraphQL
            </span>
            <span className="px-3 py-1.5 bg-orange-600/10 text-orange-500 backdrop-blur rounded-md border border-orange-600/20 hover:bg-orange-600/20 transition">
              JWT
            </span>
          </div>

          {/* Linha 3: Banco de Dados e DevOps */}
          <div className="flex flex-wrap justify-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-wider">
            <span className="text-gray-400 my-auto mr-2">DADOS & DEVOPS:</span>
            <span className="px-3 py-1.5 bg-blue-600/10 text-blue-500 backdrop-blur rounded-md border border-blue-600/20 hover:bg-blue-600/20 transition">
              PostgreSQL
            </span>
            <span className="px-3 py-1.5 bg-green-500/10 text-green-400 backdrop-blur rounded-md border border-green-500/20 hover:bg-green-500/20 transition">
              MongoDB
            </span>
            <span className="px-3 py-1.5 bg-red-600/10 text-red-500 backdrop-blur rounded-md border border-red-600/20 hover:bg-red-600/20 transition">
              Redis
            </span>
            <span className="px-3 py-1.5 bg-cyan-600/10 text-cyan-500 backdrop-blur rounded-md border border-cyan-600/20 hover:bg-cyan-600/20 transition">
              Docker
            </span>
            <span className="px-3 py-1.5 bg-orange-500/10 text-orange-400 backdrop-blur rounded-md border border-orange-500/20 hover:bg-orange-500/20 transition">
              AWS (S3/EC2)
            </span>
            <span className="px-3 py-1.5 bg-white/10 text-white backdrop-blur rounded-md border border-white/20 hover:bg-white/20 transition">
              CI/CD & Git Actions
            </span>
            <span className="px-3 py-1.5 bg-violet-500/10 text-violet-400 backdrop-blur rounded-md border border-violet-500/20 hover:bg-violet-500/20 transition">
              Jest / Cypress
            </span>
            <span className="px-3 py-1.5 bg-zinc-700/50 text-zinc-300 backdrop-blur rounded-md border border-zinc-600/50 hover:bg-zinc-600/50 transition">
              Vercel / Netlify
            </span>
          </div>
        </div>

        {/* Números */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 text-center max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
            <div className="text-3xl md:text-5xl text-purple-400 font-black mb-1">
              50+
            </div>
            <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
              Projetos Entregues
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
            <div className="text-3xl md:text-5xl text-emerald-400 font-black mb-1">
              10+
            </div>
            <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
              Anos de Experiência
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
            <div className="text-3xl md:text-5xl text-blue-400 font-black mb-1">
              20+
            </div>
            <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
              Clientes Satisfeitos
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5534999999999?text=Olá,%20gostaria%20de%20conversar%20sobre%20uma%20vaga/projeto%20Full%20Stack!"
            className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>

          <div className="flex gap-3">
            <a
              href="https://github.com/fabiomendes33"
              className="px-6 py-4 bg-slate-800/80 backdrop-blur rounded-xl hover:bg-slate-700 font-semibold text-white border border-white/10 hover:border-white/30 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/fabiomendes33"
              className="px-6 py-4 bg-[#0A66C2]/20 backdrop-blur rounded-xl hover:bg-[#0A66C2]/40 font-semibold text-[#0A66C2] hover:text-white border border-[#0A66C2]/30 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

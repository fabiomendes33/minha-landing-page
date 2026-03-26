import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-400">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white font-semibold mb-1">© 2026 Fabio Mendes</p>
            <p className="text-xs">Desenvolvedor Full Stack Freelancer</p>
          </div>

          {/* Links Úteis */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs md:text-sm">
            <Link
              href="/projetos"
              className="hover:text-white transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="/servicos"
              className="hover:text-white transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              className="hover:text-white transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Redes Sociais (sem ícones por enquanto) */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/fabiomendes33"
              className="px-4 py-2 bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 border border-white/10 hover:border-white/30 transition-all duration-300 text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/fabiomendes33"
              className="px-4 py-2 bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 border border-white/10 hover:border-white/30 transition-all duration-300 text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:fabiomendes33@gmail.com"
              className="px-4 py-2 bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 border border-white/10 hover:border-white/30 transition-all duration-300 text-xs"
            >
              Email
            </a>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-xs text-gray-500">
            Feito com ❤️ em Ituiutaba, MG • TechNote Soluções
          </p>
        </div>
      </div>
    </footer>
  );
}

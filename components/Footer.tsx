export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          © 2025 <span className="text-white font-semibold">Fabio Mendes</span>{" "}
          — Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-gray-300 transition">
            Habilidades
          </a>
          <a href="#projects" className="hover:text-gray-300 transition">
            Projetos
          </a>
          <a href="#about" className="hover:text-gray-300 transition">
            Sobre
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

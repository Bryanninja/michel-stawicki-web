import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gray/80">
      <nav className="mx-auto px-12 py-4 flex items-center justify-between">
        {/* Logo Oficial */}
        <Link
          href="/"
          className="opacity-90 hover:opacity-100 transition-opacity"
        >
          <img
            src="/logo.svg"
            alt="Michel Stawicki Financial Structure"
            className="h-8 md:h-10 w-44"
          />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/atuacao"
            className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
          >
            Atuação
          </Link>
          <Link
            href="/experiencia"
            className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
          >
            Experiência
          </Link>

          {/* Botão Branco Fiel ao Design */}
          <Link
            href="/conversa-estrategica"
            className="font-sans text-sm bg-brand-white text-brand-black px-6 py-2.5 hover:bg-brand-gray hover:text-brand-white transition-all duration-300 font-medium"
          >
            Conversa estratégica
          </Link>
        </div>

        {/* Botão Menu Mobile (Hamburguer) */}
        <button className="md:hidden text-brand-white p-2 hover:text-brand-gray transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </header>
  );
}

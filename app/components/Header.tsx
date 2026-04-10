"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";

export default function Header({ lang, dict }: { lang: string; dict: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  // Lógica do Switcher de Idioma
  const toggleLanguage = () => {
    const newPath =
      lang === "pt"
        ? pathname.replace(/^\/pt/, "/en")
        : pathname.replace(/^\/en/, "/pt");

    router.push(newPath || (lang === "pt" ? "/en" : "/pt"));
  };

  // NOVA LÓGICA UNIVERSAL: Rolar para o topo se clicar no link da aba atual
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    // Tira a barra do final (se existir) para comparar as URLs certinho
    const currentPath =
      pathname.endsWith("/") && pathname !== "/"
        ? pathname.slice(0, -1)
        : pathname;
    const targetPath =
      href.endsWith("/") && href !== "/" ? href.slice(0, -1) : href;

    // Se estiver na mesma página (ou for a home padrão)
    if (
      currentPath === targetPath ||
      (href === `/${lang}` && pathname === "/")
    ) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMenu(); // Fecha o menu mobile de qualquer forma
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gray/80">
        <nav className="mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo Oficial */}
          <Link
            href={`/${lang}`}
            prefetch={false}
            onClick={(e) => handleNavClick(e, `/${lang}`)}
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
              href={`/${lang}`}
              prefetch={false}
              onClick={(e) => handleNavClick(e, `/${lang}`)}
              className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
            >
              {dict.header.home}
            </Link>
            <Link
              href={`/${lang}/atuacao`}
              prefetch={false}
              onClick={(e) => handleNavClick(e, `/${lang}/atuacao`)}
              className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
            >
              {dict.header.atuacao}
            </Link>
            <Link
              href={`/${lang}/experiencia`}
              prefetch={false}
              onClick={(e) => handleNavClick(e, `/${lang}/experiencia`)}
              className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
            >
              {dict.header.experiencia}
            </Link>

            {/* Separador, Botão de Idioma e CTA */}
            <div className="flex items-center gap-6 border-l border-brand-white/20 pl-6">
              <button
                onClick={toggleLanguage}
                className="font-sans text-xs tracking-[0.15em] text-brand-white/50 hover:text-brand-white transition-colors uppercase"
              >
                {lang === "pt" ? "EN" : "PT"}
              </button>

              {/* Botão Conversa Estratégica (Desktop) */}
              <div
                onClickCapture={(e) =>
                  handleNavClick(e, `/${lang}/conversa-estrategica`)
                }
              >
                <Button
                  className="!py-2"
                  variant="white"
                  href={`/${lang}/conversa-estrategica`}
                >
                  {dict.header.conversa}
                </Button>
              </div>
            </div>
          </div>

          {/* Área Mobile: Switcher de Idioma + Menu Hamburguer */}
          <div className="flex items-center gap-5 md:hidden">
            <button
              onClick={toggleLanguage}
              className="font-sans text-xs tracking-[0.1em] text-brand-white/60 hover:text-brand-white transition-colors uppercase"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-white p-1 hover:text-brand-gray transition-colors focus:outline-none"
            >
              {isOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay Mobile */}
      <div
        className={`fixed inset-0 bg-brand-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 transition-opacity duration-300 md:hidden z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href={`/${lang}`}
          onClick={(e) => handleNavClick(e, `/${lang}`)}
          className="font-sans text-2xl text-brand-white hover:text-brand-gray transition-colors"
        >
          {dict.header.home}
        </Link>
        <Link
          href={`/${lang}/atuacao`}
          onClick={(e) => handleNavClick(e, `/${lang}/atuacao`)}
          className="font-sans text-2xl text-brand-white hover:text-brand-gray transition-colors"
        >
          {dict.header.atuacao}
        </Link>
        <Link
          href={`/${lang}/experiencia`}
          onClick={(e) => handleNavClick(e, `/${lang}/experiencia`)}
          className="font-sans text-2xl text-brand-white hover:text-brand-gray transition-colors"
        >
          {dict.header.experiencia}
        </Link>

        {/* Botão Conversa Estratégica (Mobile) */}
        <div
          className="mt-4"
          onClickCapture={(e) =>
            handleNavClick(e, `/${lang}/conversa-estrategica`)
          }
        >
          <Button
            className="py-2.5"
            variant="white"
            href={`/${lang}/conversa-estrategica`}
          >
            {dict.header.conversa}
          </Button>
        </div>
      </div>
    </>
  );
}

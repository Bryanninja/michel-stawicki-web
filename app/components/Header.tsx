"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // EFEITO PARA TRAVAR O SCROLL DO BODY
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup: garante que o scroll volte se o componente for desmontado
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* 1. O HEADER ORIGINAL FICA AQUI (z-50 para ficar sempre no topo) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gray/80">
        <nav className="mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo Oficial */}
          <Link
            href="/"
            prefetch={false}
            onClick={closeMenu}
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
              prefetch={false}
              className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/atuacao"
              prefetch={false}
              className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
            >
              Atuação
            </Link>
            <Link
              href="/experiencia"
              prefetch={false}
              className="font-sans text-sm text-brand-white/80 hover:text-brand-white transition-colors"
            >
              Experiência
            </Link>

            <Button
              className="!py-2"
              variant="white"
              href="/conversa-estrategica"
            >
              Conversa estratégica
            </Button>
          </div>

          {/* Botão Menu Mobile (Hamburguer / X) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-white p-2 hover:text-brand-gray transition-colors focus:outline-none"
          >
            {isOpen ? (
              <svg
                width="32"
                height="32"
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
                width="32"
                height="32"
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
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-brand-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 transition-opacity duration-300 md:hidden z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="font-sans  text-2xl text-brand-white hover:text-brand-gray transition-colors"
        >
          Home
        </Link>
        <Link
          href="/atuacao"
          onClick={closeMenu}
          className="font-sans text-2xl text-brand-white hover:text-brand-gray transition-colors"
        >
          Atuação
        </Link>
        <Link
          href="/experiencia"
          onClick={closeMenu}
          className="font-sans  text-2xl text-brand-white hover:text-brand-gray transition-colors"
        >
          Experiência
        </Link>

        <div onClick={closeMenu} className="mt-4">
          <Button
            className="py-2.5"
            variant="white"
            href="/conversa-estrategica"
          >
            Conversa estratégica
          </Button>
        </div>
      </div>
    </>
  );
}

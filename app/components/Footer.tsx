import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gray/10 pt-20 pb-8 w-full">
      <Container>
        <FadeIn>
          {/* Top Section: Logo, Contato e Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            {/* Coluna 1 e 2: Logo e E-mail (Ocupa metade do espaço no desktop) */}
            <div className="md:col-span-2 flex flex-col items-start">
              <Link
                href="/"
                prefetch={false}
                className="mb-6 opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/logo.svg"
                  alt="Michel Stawicki Financial Structure"
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
              <a
                href="mailto:relacionamento@msfinancialstructure.com"
                className="font-sans text-brand-white/70 hover:text-brand-white text-sm md:text-base transition-colors font-light"
              >
                relacionamento@msfinancialstructure.com
              </a>
            </div>

            {/* Coluna 3: Links Rápidos */}
            <div>
              <h3 className="font-sans font-medium text-lg text-brand-white mb-6">
                Links Rápidos
              </h3>
              <ul className="flex flex-col gap-4">
                {["Home", "Atuação", "Experiência", "Contato"].map((item) => (
                  <li key={item}>
                    <Link
                      prefetch={false}
                      href={
                        item === "Home"
                          ? "/"
                          : `/${item
                              .toLowerCase()
                              .normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, "")}`
                      }
                      className="font-sans text-brand-white/70 hover:text-brand-white text-sm transition-colors font-light"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Nossas Redes */}
            <div>
              <h3 className="font-sans font-medium text-lg text-brand-white mb-6">
                Nossas Redes
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-brand-white/70 hover:text-brand-white text-sm transition-colors font-light"
                  >
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:relacionamento@msfinancialstructure.com"
                    className="font-sans text-brand-white/70 hover:text-brand-white text-sm transition-colors font-light"
                  >
                    E-mail
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/michel.financeiramente/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-brand-white/70 hover:text-brand-white text-sm transition-colors font-light"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Direitos Autorais e Políticas */}
          <div className="border-t  border-brand-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-sans text-brand-white/50 text-xs font-light tracking-wide">
              Copyright © 2026 Michel Stawicki. Todos os direitos reservados.
            </p>

            <Link
              href="/termos"
              className="font-sans text-brand-white/50 hover:text-brand-white text-xs transition-colors tracking-wide"
            >
              Termos de Uso e Política de Privacidade
            </Link>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}

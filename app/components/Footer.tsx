import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Footer({ dict, lang }: { dict: any; lang: string }) {
  return (
    <footer className="bg-brand-black border-t border-brand-gray/10 pt-20 pb-8 w-full">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            <div className="md:col-span-2 flex flex-col items-start">
              <Link
                href={`/${lang}`}
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

            <div>
              <h3 className="font-sans font-medium text-lg text-brand-white mb-6">
                {dict.footer.linksRapidos}
              </h3>
              <ul className="flex flex-col gap-4">
                {["Home", "Atuação", "Experiência", "Contato"].map(
                  (item, i) => {
                    let href = `/${lang}`;
                    if (item === "Atuação") href = `/${lang}/atuacao`;
                    if (item === "Experiência") href = `/${lang}/experiencia`;
                    if (item === "Contato")
                      href = `/${lang}/conversa-estrategica`;

                    // Traduz o label baseado no dict do header (já que as palavras são as mesmas)
                    const label =
                      i === 0
                        ? dict.header.home
                        : i === 1
                          ? dict.header.atuacao
                          : i === 2
                            ? dict.header.experiencia
                            : dict.header.conversa;

                    return (
                      <li key={item}>
                        <Link
                          prefetch={false}
                          href={href}
                          className="font-sans text-brand-white/70 hover:text-brand-white text-sm transition-colors font-light"
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-medium text-lg text-brand-white mb-6">
                {dict.footer.redes}
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/michel-stawicki/"
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

          <div className="border-t border-brand-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-sans text-brand-white/50 text-xs font-light tracking-wide">
              {dict.footer.direitos}
            </p>
            <Link
              href={`/${lang}/termos`}
              className="font-sans text-brand-white/50 hover:text-brand-white text-xs transition-colors tracking-wide"
            >
              {dict.footer.termos}
            </Link>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}

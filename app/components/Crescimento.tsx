"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Crescimento({ dict }: { dict: any }) {
  return (
    <section
      id="growth"
      className="bg-brand-black w-full py-24 border-b border-brand-gray/10"
    >
      <Container>
        {/* Cabeçalho */}
        <div className="mb-16 max-w-3xl">
          <FadeIn>
            <h2 className="font-sans font-medium text-4xl md:text-5xl text-brand-white mb-6 tracking-tight">
              {dict.crescimento.titulo}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-lg text-brand-white/70 leading-relaxed font-light">
              {dict.crescimento.subtitulo}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 items-stretch">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden group bg-brand-gray/10">
              <img
                src="/crescimento-1.jpg"
                alt="Painel Financeiro"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="md:col-span-2 relative h-[400px] md:h-[500px] overflow-hidden group bg-brand-gray/10">
              <img
                src="/crescimento-2.jpg"
                alt="Michel Stawicki analisando dados"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </FadeIn>

        {/* Rodapé */}
        <div className="max-w-4xl">
          <FadeIn delay={0.5}>
            <p className="font-sans text-brand-white/80 leading-relaxed font-light text-lg">
              <strong className="text-brand-white font-medium">
                Michel Stawicki
              </strong>{" "}
              {dict.crescimento.rodape1}
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

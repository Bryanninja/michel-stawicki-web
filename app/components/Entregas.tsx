"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Entregas({ dict }: { dict: any }) {
  // Puxamos os itens direto do JSON agora
  const itens = dict.entregas.itens;

  return (
    <>
      <section className="bg-brand-black pb-16 overflow-hidden">
        <Container>
          <div className="max-w-4xl">
            <FadeIn>
              <h2 className="font-sans font-medium text-3xl md:text-5xl text-brand-white mb-6 tracking-tight">
                {dict.entregas.titulo}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-sans text-brand-white/70 text-lg md:text-xl font-light">
                {dict.entregas.subtitulo}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <div className="w-full h-px bg-white/10" aria-hidden="true" />

      <section className="bg-surface relative overflow-hidden flex flex-col lg:block">
        <div className="w-full h-[400px] lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45%] xl:w-[40%] z-0 order-last lg:order-none">
          <FadeIn>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/atuacao-tablet.jpg"
                alt="Dashboards financeiros"
                className="w-full h-full object-cover filter grayscale-[10%] brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent lg:bg-gradient-to-r lg:from-surface/80 pointer-events-none" />
            </div>
          </FadeIn>
        </div>

        <Container className="relative z-10 order-first lg:order-none">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 py-16 md:py-24 lg:py-32 lg:pr-12 xl:pr-24">
              <div className="space-y-10 md:space-y-12">
                {itens.map((item: any, index: number) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="flex gap-6 md:gap-8 items-start group">
                      <div className="w-12 h-12 md:w-14 md:h-14 border border-white/40 flex items-center justify-center bg-brand-white/5 shrink-0 transition-all duration-500 group-hover:bg-brand-white/10">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="pt-1 flex-1">
                        <h4 className="font-sans font-medium text-brand-white text-xl md:text-2xl mb-2 tracking-tight">
                          {item.t}
                        </h4>
                        <p className="font-sans text-brand-white/50 text-base md:text-lg font-light leading-relaxed">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";

const BentoGrid = ({ dict }: { dict: any }) => {
  const b = dict.experienciaPage.bento;

  return (
    <section className="mb-24">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mx-auto">
            {/* CARD 1: Fusões (Top Left) */}
            <div className="md:col-span-7 bg-[#333333] p-10 flex items-center gap-8 min-h-[220px] border border-white/5">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-surface-hover font-serif text-4xl font-bold">
                  $
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 text-sm uppercase tracking-[0.2em] font-light mb-2">
                  {b.c1_span}
                </span>
                <h3 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
                  {b.c1_h3}
                </h3>
              </div>
            </div>

            {/* CARD 2: Ciclo Financeiro (Right - Span 2 Rows) */}
            <div className="md:col-span-5 md:row-span-2 bg-[#1a1a1a] p-10 border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-white text-sm font-medium tracking-wide mb-14 opacity-90">
                {b.c2_titulo}
              </span>

              <div className="space-y-12 w-full ">
                {/* Bloco -55% */}
                <div className="flex items-center justify-center gap-8">
                  <span className="text-5xl font-sans font-bold text-white tracking-tighter">
                    -55%
                  </span>
                  {/* A BARRINHA DE SEPARAÇÃO */}
                  <div className="h-20 w-[1px] bg-white/20 shrink-0" />
                  <div className="text-left">
                    <span className="text-white font-bold text-lg block leading-none mb-1">
                      {b.c2_prazo}
                    </span>
                    <span className="text-white/50 text-base font-light block leading-tight">
                      {b.c2_rec}
                    </span>
                  </div>
                </div>

                {/* Bloco +24% */}
                <div className="flex items-center justify-center gap-8">
                  <span className="text-5xl font-sans font-bold text-white tracking-tighter">
                    +24%
                  </span>
                  {/* A BARRINHA DE SEPARAÇÃO */}
                  <div className="h-20 w-[1px] bg-white/20 shrink-0" />
                  <div className="text-left">
                    <span className="text-white font-bold text-lg block leading-none mb-1">
                      {b.c2_prazo}
                    </span>
                    <span className="text-white/50 text-base font-light block leading-tight">
                      {b.c2_pag}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Operações (Middle Left) */}
            <div className="md:col-span-3 bg-surface p-8 border border-white/5 flex items-center justify-center text-center">
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {b.c3_p1} <br />
                <strong className="text-white font-bold text-lg">
                  {b.c3_strong}
                </strong>{" "}
                {b.c3_p2}
              </p>
            </div>

            {/* CARD 4: Envio USD (Middle Center) */}
            <div className="md:col-span-4 bg-surface p-8 border border-white/5 flex items-center justify-center text-center">
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {b.c4_p1}
                <strong className="text-white font-bold">
                  {b.c4_strong}
                </strong>{" "}
                {b.c4_p2} <br /> {b.c4_p3}
              </p>
            </div>

            {/* CARD 5: EBITDA Crescimento (Bottom Left) */}
            <div className="md:col-span-5 bg-surface p-12 border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-6xl font-sans font-bold text-[#a3d672] mb-4">
                +45%
              </span>
              <p className="text-white/80 text-sm uppercase tracking-widest font-bold  leading-tight">
                {b.c5_titulo}
                <span className="block mt-2 text-sm text-white/40 lowercase font-light tracking-normal">
                  {b.c5_sub}
                </span>
              </p>
            </div>

            {/* CARD 6: EBITDA Reestruturação (Bottom Right - SEM ÍCONE) */}
            <div className="md:col-span-7 bg-surface p-12 border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-6xl font-sans font-bold text-[#a3d672] mb-4">
                +40%
              </span>
              <p className="text-white/80 text-sm uppercase tracking-widest font-bold leading-tight">
                {b.c6_titulo}
                <span className="block mt-2 text-sm text-white/40 lowercase font-light tracking-normal">
                  {b.c6_sub}
                </span>
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default BentoGrid;

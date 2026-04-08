"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";

const BentoGrid = () => {
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
                  Fusões de quase
                </span>
                <h3 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
                  USD 3 bilhões.
                </h3>
              </div>
            </div>

            {/* CARD 2: Ciclo Financeiro (Right - Span 2 Rows) */}
            <div className="md:col-span-5 md:row-span-2 bg-[#1a1a1a] p-10 border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-white text-sm font-medium tracking-wide mb-14 opacity-90">
                Reequilíbrio do Ciclo Financeiro
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
                      no prazo
                    </span>
                    <span className="text-white/50 text-base font-light block leading-tight">
                      de recebimento.
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
                      no prazo
                    </span>
                    <span className="text-white/50 text-base font-light block leading-tight">
                      de pagamento.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Operações (Middle Left) */}
            <div className="md:col-span-3 bg-surface p-8 border border-white/5 flex items-center justify-center text-center">
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Operações de <br />
                <strong className="text-white font-bold text-lg">
                  USD 1,8 bilhões
                </strong>{" "}
                anuais.
              </p>
            </div>

            {/* CARD 4: Envio USD (Middle Center) */}
            <div className="md:col-span-4 bg-surface p-8 border border-white/5 flex items-center justify-center text-center">
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Envio de{" "}
                <strong className="text-white font-bold">USD 50 milhões</strong>{" "}
                à <br /> controladora sob restrição cambial.
              </p>
            </div>

            {/* CARD 5: EBITDA Crescimento (Bottom Left) */}
            <div className="md:col-span-5 bg-surface p-12 border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-6xl font-sans font-bold text-[#a3d672] mb-4">
                +45%
              </span>
              <p className="text-white/80 text-sm uppercase tracking-widest font-bold  leading-tight">
                Crescimento no EBITDA
                <span className="block mt-2 text-sm text-white/40 lowercase font-light tracking-normal">
                  (por unidade produzida em três anos)
                </span>
              </p>
            </div>

            {/* CARD 6: EBITDA Reestruturação (Bottom Right - SEM ÍCONE) */}
            <div className="md:col-span-7 bg-surface p-12 border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="text-6xl font-sans font-bold text-[#a3d672] mb-4">
                +40%
              </span>
              <p className="text-white/80 text-sm uppercase tracking-widest font-bold leading-tight">
                Reestruturação operacional
                <span className="block mt-2 text-sm text-white/40 lowercase font-light tracking-normal">
                  do EBITDA anual
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

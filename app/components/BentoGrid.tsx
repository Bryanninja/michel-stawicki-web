import Container from "./Container";

const BentoGrid = () => {
  return (
    <section className=" mb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4  mx-auto">
          {/* CARD 1: Fusões (Ocupa 7 colunas) */}
          <div className="md:col-span-7 bg-[#262626] p-8 flex flex-col justify-center gap-6 border border-brand-gray/10 min-h-[280px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-white flex items-center justify-center text-brand-black font-bold text-xl">
                $
              </div>
              <div className="text-brand-white/60 text-sm uppercase tracking-widest font-light">
                Fusões de quase
              </div>
            </div>
            <div className="text-4xl md:text-6xl font-sans font-medium text-brand-white">
              USD 3 bilhões.
            </div>
          </div>

          {/* CARD 2: Ciclo Financeiro (Ocupa 5 colunas e 2 linhas de altura!) */}
          <div className="md:col-span-5 md:row-span-2 bg-surface p-8 border border-brand-gray/20 flex flex-col items-center justify-center">
            <div className="text-brand-white/60 text-xs uppercase tracking-widest mb-12 text-center">
              Reequilíbrio do Ciclo Financeiro
            </div>
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-5xl font-sans font-medium text-brand-white tracking-tighter">
                  -55%
                </span>
                <div className="border-l border-brand-white/20 pl-4">
                  <span className="text-brand-white/50 text-sm leading-tight block">
                    no prazo
                    <br />
                    de recebimento.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-5xl font-sans font-medium text-brand-white tracking-tighter">
                  +24%
                </span>
                <div className="border-l border-brand-white/20 pl-4">
                  <span className="text-brand-white/50 text-sm leading-tight block">
                    no prazo
                    <br />
                    de pagamento.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Operações (Sob o Card 1) */}
          <div className="md:col-span-3 bg-surface p-8 border border-brand-gray/20 flex flex-col justify-center text-center">
            <p className="text-brand-white/60 text-base leading-relaxed font-light">
              Operações de <br />
              <strong className="text-brand-white font-medium text-lg">
                USD 1,8 bilhões
              </strong>{" "}
              anuais.
            </p>
          </div>

          {/* CARD 4: Envio USD (Sob o Card 1) */}
          <div className="md:col-span-4 bg-surface p-8 border border-brand-gray/20 flex flex-col justify-center text-center">
            <p className="text-brand-white/60 text-base leading-relaxed font-light">
              Envio de{" "}
              <strong className="text-brand-white font-medium">
                USD 50 milhões
              </strong>{" "}
              à controladora sob restrição cambial.
            </p>
          </div>

          {/* CARD 5: EBITDA 1 (Larga embaixo) */}
          <div className="md:col-span-6 bg-surface p-14 border border-brand-gray/20 flex flex-col items-center justify-center text-center gap-4">
            <span className="text-6xl font-sans font-medium text-[#8bc34a]">
              +45%
            </span>
            <p className="text-brand-white/70 text-base uppercase tracking-wide font-light max-w-xs">
              Crescimento no EBITDA <br />
              <span className="text-xs opacity-50 lowercase">
                (por unidade produzida em três anos)
              </span>
            </p>
          </div>

          {/* CARD 6: EBITDA 2 (Larga embaixo) */}
          <div className="md:col-span-6 bg-surface p-14 border border-brand-gray/20 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="opacity-80">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl font-sans font-medium text-[#8bc34a] mb-2">
                +40%
              </div>
              <p className="text-brand-white/70 text-base uppercase tracking-wide font-light">
                Reestruturação operacional <br />
                <span className="text-xs opacity-50 lowercase">
                  do EBITDA anual
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BentoGrid;

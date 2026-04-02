import Button from "./Button";

export default function Estrutura() {
  const cards = [
    {
      icon: "/icon-1.svg",
      text: "Reorganização da lógica\nde rentabilidade",
      span: "md:col-span-2", // Ocupa 2 colunas de 6 (1/3 da tela)
    },
    {
      icon: "/icon-2.svg",
      text: "Redefinição dos\ninstrumentos de decisão",
      span: "md:col-span-2",
    },
    {
      icon: "/icon-3.svg",
      text: "Reequilíbrio estrutural do\nciclo financeiro",
      span: "md:col-span-2",
    },
    {
      icon: "/icon-4.svg",
      text: "Critérios claros na\nalocação de capital",
      span: "md:col-span-3", // Ocupa 3 colunas de 6 (Metade da tela)
    },
    {
      icon: "/icon-5.svg",
      text: "Alinhamento entre estrutura financeira e\nambição de crescimento",
      span: "md:col-span-3",
    },
  ];

  return (
    <section className="bg-surface w-full py-24 border-b border-brand-gray/10">
      <div className="max-w-360 mx-auto px-6">
        {/* Cabeçalho alinhado à esquerda como no design */}
        <div className="mb-12 max-w-2xl">
          <h2 className="font-sans font-medium text-4xl md:text-5xl leading-tight text-brand-white mb-4 tracking-tight">
            Estrutura que Sustenta Decisões Financeiras
          </h2>
          <p className="font-sans text-brand-white/70 text-lg leading-relaxed font-light">
            Quando a complexidade aumenta, pontos isolados deixam de ser
            <br className="hidden md:block" />o problema. O que precisa evoluir
            é a base
          </p>
        </div>

        {/* Grid Bento Assimétrico (6 colunas virtuais para fazer o 3 em cima e 2 embaixo) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative bg-surface-hover/70 border border-brand-gray/20 p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-surface-hover ${card.span}`}
            >
              {/* Barra Branca Lateral (Aparece no Hover para dar o efeito do design) */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Ícone Grande */}
              <div className="mb-8">
                <img
                  src={card.icon}
                  alt="Ícone"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Texto com quebra de linha respeitada */}
              <p className="font-sans text-brand-white/80 group-hover:text-brand-white transition-colors text-base md:text-lg leading-snug whitespace-pre-line font-light">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Botão Inferior Centralizado */}
        <div className="mt-16 flex justify-center">
          <Button href="/atuacao" variant="outline">
            Saiba mais sobre a metodologia
          </Button>
        </div>
      </div>
    </section>
  );
}

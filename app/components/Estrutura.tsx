import Button from "./Button";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Estrutura({ dict, lang }: { dict: any; lang: string }) {
  const cards = [
    {
      icon: "/icon-1.svg",
      text: dict.estrutura.cards[0],
      span: "md:col-span-2",
    },
    {
      icon: "/icon-2.svg",
      text: dict.estrutura.cards[1],
      span: "md:col-span-2",
    },
    {
      icon: "/icon-3.svg",
      text: dict.estrutura.cards[2],
      span: "md:col-span-2",
    },
    {
      icon: "/icon-4.svg",
      text: dict.estrutura.cards[3],
      span: "md:col-span-3",
    },
    {
      icon: "/icon-5.svg",
      text: dict.estrutura.cards[4],
      span: "md:col-span-3",
    },
  ];

  return (
    <section className="bg-surface w-full py-24 border-b border-brand-gray/10">
      <Container>
        <div className="mb-12 max-w-2xl">
          <FadeIn>
            <h2 className="font-sans font-medium text-4xl md:text-5xl leading-tight text-brand-white mb-4 tracking-tight">
              {dict.estrutura.titulo}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-brand-white/70 text-lg leading-relaxed font-light">
              {dict.estrutura.subtitulo1}
              <br className="hidden md:block" /> {dict.estrutura.subtitulo2}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group relative bg-surface-hover/70 border border-brand-gray/20 p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-surface-hover ${card.span}`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="mb-8">
                  <img
                    src={card.icon}
                    alt="Ícone"
                    className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <p className="font-sans text-brand-white/80 group-hover:text-brand-white transition-colors text-base md:text-lg leading-snug whitespace-pre-line font-light">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-16 flex justify-center">
          <FadeIn delay={0.5}>
            <Button href={`/${lang}/atuacao`} variant="outline">
              {dict.estrutura.botao}
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

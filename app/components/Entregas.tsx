import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Entregas() {
  const itens = [
    {
      t: "Solução estruturada para o momento atual",
      d: "Intervenção alinhada à fase específica do negócio.",
    },
    {
      t: "Evolução estrutural da área financeira",
      d: "Processos e critérios organizados para absorver maior complexidade.",
    },
    {
      t: "Clareza decisória",
      d: "Instrumentos que permitem decisões com previsibilidade.",
    },
    {
      t: "Organização financeira disciplinada",
      d: "Base estruturada de capital, governança e indicadores.",
    },
  ];

  return (
    <section className="bg-surface border-t border-brand-gray/10 py-24">
      <Container>
        <div className="mb-16">
          <FadeIn>
            <h2 className="font-sans font-medium text-3xl md:text-4xl text-brand-white mb-4">
              O Que a Intervenção Entrega?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-brand-white/50">
              Ao final do processo, a empresa passa a operar com:
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {itens.map((item) => (
                <div key={item.t} className="flex gap-6 items-start group">
                  <div className="mt-1 w-8 h-8 border border-brand-white flex items-center justify-center shrink-0 group-hover:bg-brand-white group-hover:text-brand-black transition-all">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-brand-white text-xl mb-1">
                      {item.t}
                    </h4>
                    <p className="font-sans text-brand-white/50 text-base font-light">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-full min-h-[400px] relative">
              <img
                src="/atuacao-tablet.jpg"
                className="w-full h-full object-cover filter grayscale-[20%]"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

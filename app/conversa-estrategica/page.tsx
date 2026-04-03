import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import Faq from "../components/Faq";
import FadeIn from "../components/FadeIn";

export default function ConversaEstrategica() {
  const cards = [
    { icon: "/icon-target.svg", title: "Modelo geração de resultado" },
    { icon: "/icon-chart.svg", title: "Estrutura de capital" },
    { icon: "/icon-sync.svg", title: "Ciclo financeiro" },
    { icon: "/icon-pie.svg", title: "Grau de maturidade organizacional" },
    { icon: "/icon-trend.svg", title: "Prioridades de crescimento" },
  ];

  return (
    <>
      <Header />
      <main className="bg-brand-black min-h-screen">
        {/* SECTION 1: HERO + FORM (DARK) */}
        <section
          id="contactForm"
          className="pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5"
        >
          <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <FadeIn>
                <h1 className="font-sans font-medium text-4xl md:text-6xl text-brand-white mb-8 leading-tight tracking-tight">
                  Toda intervenção começa com clareza.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="font-sans text-brand-white/70 text-lg md:text-xl font-light leading-relaxed">
                  Um encontro estruturado para compreender o momento da empresa,
                  seus objetivos e os desafios que impactam sua estrutura
                  financeira.
                </p>
              </FadeIn>
            </div>

            <div className="flex justify-center lg:justify-end">
              <FadeIn delay={0.6}>
                <ContactForm />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* SECTION 2: GRID DE ENTENDIMENTO (WHITE) */}
        <section className="bg-brand-white py-24 md:py-32">
          <Container>
            <FadeIn>
              <h2 className="font-sans font-medium text-3xl md:text-5xl text-brand-black mb-16 max-w-2xl leading-tight">
                O foco é entendimento consistente da dinâmica do negócio
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* Grid 3 em cima, 2 embaixo (Estilo Bento) */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-16">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`bg-[#E5E5E5] p-10 border border-surface/5 flex flex-col gap-8 min-h-[240px] transition-all hover:bg-[#D4D4D4] 
                    ${index < 3 ? "md:col-span-2" : "md:col-span-3"}`}
                  >
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-12 h-12 opacity-80"
                    />
                    <p className="font-sans font-medium text-xl text-brand-black max-w-[180px]">
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="max-w-3xl">
              <FadeIn delay={0.4}>
                <p className="font-sans text-brand-black/70 text-lg leading-relaxed mb-8">
                  A partir dessa análise, avaliamos alinhamento e potencial
                  escopo de atuação. Se houver convergência, definimos próximos
                  passos de forma objetiva.
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <Button href="#contactForm" variant="solid">
                  Agendar Conversa Estratégica
                </Button>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* SECTION 3: QUOTE FINAL */}
        <section className="bg-surface-hover py-12 border-t border-white/5">
          <Container className="text-center">
            <FadeIn delay={0.6}>
              <p className="font-serif text-brand-white/80 text-xl md:text-2xl">
                ”Estrutura começa com clareza.”
              </p>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Faq />
      <Footer />
    </>
  );
}

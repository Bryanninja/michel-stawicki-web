import Header from "../components/Header";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Entregas from "../components/Entregas";
import Faq from "../components/Faq";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";

export default function Atuacao() {
  const metodo = [
    {
      title: "Análise Estruturada",
      text: "Compreensão aprofundada do modelo de geração de resultado, estrutura de capital, ciclo financeiro, governança decisória e maturidade da equipe.",
    },
    {
      title: "Definição de Escopo",
      text: "Delimitação clara do foco da intervenção, priorizando impacto estrutural e coerência com o momento da empresa.",
    },
    {
      title: "Construção Estrutural",
      text: "Implementação assistida, organização de rotinas, definição de critérios e transferência de padrão.",
    },
    {
      title: "Consolidação",
      text: "Validação das entregas e alinhamento do novo padrão operacional.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-brand-black min-h-screen">
        <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-brand-black">
          <div className="absolute w-full h-dvh inset-0 z-0">
            <img
              src="/atuacao-hero-full.jpg"
              alt="Michel"
              className="object-cover h-dvh w-full object-center md:object-[center_20%]"
            />
            <div className="absolute inset-0 md:bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
          </div>
          <Container className="relative z-10 w-full h-full">
            <div className="absolute bottom-12 right-6 md:bottom-24 md:right-12 text-right">
              <FadeIn delay={0.2}>
                <p className="font-serif text-left leading-tight text-brand-white text-xl md:text-3xl font-light opacity-80">
                  Michel Stawicki –<br />
                  Financial Structure.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <section className="max-w-3xl mx-auto px-6 py-24 text-center">
          <FadeIn>
            <h2 className="font-sans font-medium text-3xl md:text-5xl text-brand-white mb-8 tracking-tight">
              Intervenções em estrutura
              <br className="hidden md:block" /> financeira exigem método.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-brand-white/60 text-pretty text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed">
              A situação é conduzida de forma estruturada, com foco em
              diagnóstico claro, definição objetiva de escopo e fortalecimento
              da base organizacional
            </p>
          </FadeIn>
        </section>

        <FadeIn delay={0.3}>
          {/* MÉTODO GRID */}
          <section className=" pb-32">
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metodo.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface p-10 md:p-14 border border-brand-gray/20 hover:bg-surface-hover transition-all duration-300"
                >
                  <h3 className="font-sans font-medium text-2xl text-brand-white mb-6">
                    {item.title}
                  </h3>
                  <p className="font-sans text-brand-white/60 leading-relaxed font-light text-base md:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </Container>
          </section>
        </FadeIn>

        <Entregas />

        <Cta
          variant="left"
          showLogo
          title={
            <>
              Estrutura financeira sólida permite{" "}
              <b>crescimento com previsibilidade, disciplina e consistência.</b>
            </>
          }
        />
      </main>
      <Faq />
      <Footer />
    </>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import BentoGrid from "../components/BentoGrid";
import Faq from "../components/Faq";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";

export default function Experiencia() {
  return (
    <>
      <Header />
      <main className="bg-brand-black min-h-screen pt-32 pb-20">
        {/* 1. Hero: Texto de Impacto + Foto 1 */}
        <section className=" mb-6">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <FadeIn>
                <h1 className="font-sans font-medium text-3xl md:text-5xl text-brand-white leading-tight tracking-tight">
                  Ao longo de mais de 30 anos, Michel Stawicki atuou em
                  ambientes onde decisões financeiras tinham impacto estrutural
                  profundo.
                </h1>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <div className="w-full max-w-360 mx-auto aspect-[16/9]  overflow-hidden">
                <img
                  src="/experiencia-hero.jpg"
                  alt="Michel Stawicki"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* 2. Trajetória: Foto 2 + Texto Lateral */}
        <section className="mb-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-360 mx-auto">
              <FadeIn>
                <div className="aspect-auto overflow-hidden">
                  <img
                    src="/experiencia-2.jpg"
                    alt="Trajetória Michel"
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                </div>
              </FadeIn>
              <div className="max-w-lg">
                <FadeIn delay={0.2}>
                  <p className="font-sans text-brand-white/70 text-lg md:text-2xl leading-relaxed font-light">
                    Sua trajetória foi construída sob cenários de crescimento
                    acelerado, restrição de liquidez, reestruturações
                    operacionais e integração corporativa.
                  </p>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Título das Operações */}
        <section className="mb-16 text-center">
          <Container>
            <FadeIn delay={0.2}>
              <h2 className="font-sans font-medium text-3xl md:text-5xl text-brand-white mb-6">
                Atuou em operações que alcançaram
              </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="font-sans text-brand-white/50 text-lg max-w-2xl mx-auto">
                USD 1,8 bilhões anuais e participou de processos de fusão
                envolvendo quase USD 3 bilhões em faturamento combinado. Entre
                as iniciativas conduzidas:
              </p>
            </FadeIn>
          </Container>
        </section>

        <BentoGrid />
      </main>
      <Cta
        variant="left"
        showLogo
        title={
          <>
            Resultados decorrentes de estrutura, método e disciplina. Hoje,
            aplica essa lógica a empresas que{" "}
            <b>desejam fortalecer sua base financeira</b> e sustentar
            crescimento com consistência.
          </>
        }
      />
      <Faq />
      <Footer />
    </>
  );
}

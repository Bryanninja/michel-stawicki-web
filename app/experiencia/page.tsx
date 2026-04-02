import Header from "../components/Header";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import BentoGrid from "../components/BentoGrid";
import Faq from "../components/Faq";

export default function Experiencia() {
  return (
    <>
      <Header />
      <main className="bg-brand-black min-h-screen pt-32 pb-20">
        {/* 1. Hero: Texto de Impacto + Foto 1 */}
        <section className="max-w-[1440px] mx-auto px-6 mb-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-sans font-medium text-3xl md:text-5xl text-brand-white leading-tight tracking-tight">
              Ao longo de mais de 30 anos, Michel Stawicki atuou em ambientes
              onde decisões financeiras tinham impacto estrutural profundo.
            </h1>
          </div>

          <div className="w-full max-w-360 mx-auto aspect-[16/9]  overflow-hidden">
            <img
              src="/experiencia-hero.jpg"
              alt="Michel Stawicki"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
        </section>

        {/* 2. Trajetória: Foto 2 + Texto Lateral */}
        <section className="max-w-[1440px] mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-360 mx-auto">
            <div className="aspect-auto overflow-hidden">
              <img
                src="/experiencia-2.jpg"
                alt="Trajetória Michel"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            <div className="max-w-lg">
              <p className="font-sans text-brand-white/70 text-lg md:text-2xl leading-relaxed font-light">
                Sua trajetória foi construída sob cenários de crescimento
                acelerado, restrição de liquidez, reestruturações operacionais e
                integração corporativa.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Título das Operações */}
        <section className="max-w-[1440px] mx-auto px-6 mb-16 text-center">
          <h2 className="font-sans font-medium text-3xl md:text-5xl text-brand-white mb-6">
            Atuou em operações que alcançaram
          </h2>
          <p className="font-sans text-brand-white/50 text-lg max-w-2xl mx-auto">
            USD 1,8 bilhões anuais e participou de processos de fusão envolvendo
            quase USD 3 bilhões em faturamento combinado. Entre as iniciativas
            conduzidas:
          </p>
        </section>

        <BentoGrid />
      </main>
      <Cta
        title="Resultados decorrentes de estrutura, método e disciplina. Hoje, aplica essa lógica a empresas que desejam fortalecer sua base financeira e sustentar crescimento com consistência."
        showLogo={true}
      />
      <Faq />
      <Footer />
    </>
  );
}

import { getDictionary } from "../../getDictionary";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cta from "../../components/Cta";
import BentoGrid from "../../components/BentoGrid";
import Faq from "../../components/Faq";
import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function Experiencia({
  params,
}: {
  params: Promise<{ lang: "pt" | "en" }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="bg-brand-black min-h-screen pt-32 pb-20">
        {/* 1. Hero: Texto de Impacto + Foto 1 */}
        <section className=" mb-6">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <FadeIn>
                <h1 className="font-sans font-medium text-3xl md:text-5xl text-brand-white leading-tight tracking-tight">
                  {dict.experienciaPage.hero_titulo}
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
                    {dict.experienciaPage.trajetoria_texto}
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
                {dict.experienciaPage.operacoes_titulo}
              </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="font-sans text-brand-white/50 text-lg max-w-2xl mx-auto">
                {dict.experienciaPage.operacoes_texto}
              </p>
            </FadeIn>
          </Container>
        </section>

        <BentoGrid dict={dict} />
      </main>
      <Cta
        lang={lang}
        dict={dict}
        variant="left"
        showLogo
        title={
          <>
            {dict.experienciaPage.cta_p1}
            <b>{dict.experienciaPage.cta_bold}</b>
            {dict.experienciaPage.cta_p2}
          </>
        }
      />
      <Faq dict={dict} />
      <Footer lang={lang} dict={dict} />
    </>
  );
}

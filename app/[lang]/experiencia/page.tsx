import { Metadata } from "next";
import { getDictionary } from "../../getDictionary";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cta from "../../components/Cta";
import BentoGrid from "../../components/BentoGrid";
import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";

type Props = {
  params: Promise<{ lang: "pt" | "en" }>;
};

// --- SEO PARA PÁGINA DE EXPERIÊNCIA ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const isPt = lang === "pt";

  return {
    title: isPt ? "Experiência e Trajetória" : "Experience and Trajectory",
    description: isPt
      ? "Conheça a trajetória de Michel Stawicki: mais de 30 anos liderando operações financeiras globais e estruturando empresas de sucesso."
      : "Discover Michel Stawicki's journey: over 30 years leading global financial operations and structuring successful companies.",
    alternates: {
      canonical: `https://msfinancialstructure.com/${lang}/experiencia`,
      languages: {
        "pt-BR": "https://msfinancialstructure.com/pt/experiencia",
        "en-US": "https://msfinancialstructure.com/en/experiencia",
      },
    },
    openGraph: {
      url: `https://msfinancialstructure.com/${lang}/experiencia`,
      title: isPt
        ? "Experiência e Trajetória | MS Financial"
        : "Experience & Trajectory | MS Financial",
      description: isPt
        ? "30 anos de expertise financeira a serviço do seu negócio."
        : "30 years of financial expertise at your business's service.",
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function Experiencia({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  // Definição para uso nos Alts das imagens
  const isPt = lang === "pt";

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
                  alt={
                    isPt
                      ? "Michel Stawicki - Especialista Financeiro"
                      : "Michel Stawicki - Financial Specialist"
                  }
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
                    alt={
                      isPt
                        ? "Histórico Profissional Michel Stawicki"
                        : "Michel Stawicki Professional History"
                    }
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

      <Footer lang={lang} dict={dict} />
    </>
  );
}

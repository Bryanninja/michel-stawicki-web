import { Metadata } from "next";
import { getDictionary } from "../../getDictionary";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Entregas from "../../components/Entregas";
import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";
import Cta from "../../components/Cta";

// Definindo a interface para o método para acabar com o erro de "any"
interface MetodoItem {
  t: string;
  d: string;
}

type Props = {
  params: Promise<{ lang: "pt" | "en" }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const isPt = lang === "pt";

  return {
    title: isPt ? "Metodologia e Atuação" : "Expertise and Methodology",
    description: isPt
      ? "Conheça o método exclusivo de estruturação financeira que traz clareza e disciplina para o crescimento da sua empresa."
      : "Discover the exclusive financial structuring method that brings clarity and discipline to your business growth.",
    alternates: {
      canonical: `https://msfinancialstructure.com/${lang}/atuacao`,
      languages: {
        "pt-BR": "https://msfinancialstructure.com/pt/atuacao",
        "en-US": "https://msfinancialstructure.com/en/atuacao",
      },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function Atuacao({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  // Definindo isPt aqui dentro também para a imagem
  const isPt = lang === "pt";

  // Tipando o array do método corretamente
  const metodo: MetodoItem[] = dict.atuacaoPage.metodo;

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="bg-brand-black min-h-screen">
        <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-brand-black">
          <div className="absolute w-full h-dvh inset-0 z-0">
            <img
              src="/atuacao-hero-full.jpg"
              alt={
                isPt
                  ? "Michel Stawicki - Atuação Profissional"
                  : "Michel Stawicki - Professional Expertise"
              }
              className="object-cover h-dvh w-full object-center md:object-[center_20%]"
            />
            <div className="absolute inset-0 md:bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
          </div>
          <Container className="relative z-10 w-full h-full">
            <div className="absolute bottom-12 right-6 md:bottom-24 md:right-12 text-right">
              <FadeIn delay={0.2}>
                <p className="font-serif text-left leading-tight text-brand-white text-xl md:text-3xl font-light opacity-80">
                  {dict.atuacaoPage.hero.kicker1}
                  <br />
                  {dict.atuacaoPage.hero.kicker2}
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-24 text-center">
          <FadeIn>
            <h2 className="font-sans font-medium text-3xl md:text-5xl text-brand-white mb-8 tracking-tight">
              {dict.atuacaoPage.intro.titulo1}
              <br className="hidden md:block" />{" "}
              {dict.atuacaoPage.intro.titulo2}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-brand-white/60 text-pretty text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed">
              {dict.atuacaoPage.intro.descricao}
            </p>
          </FadeIn>
        </section>

        <FadeIn delay={0.3}>
          <section className=" pb-32">
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metodo.map((item, index) => (
                <div
                  key={index}
                  className="bg-surface p-10 md:p-14 border border-brand-gray/20 hover:bg-surface-hover transition-all duration-300"
                >
                  <h3 className="font-sans font-medium text-2xl text-brand-white mb-6">
                    {item.t}
                  </h3>
                  <p className="font-sans text-brand-white/60 leading-relaxed font-light text-base md:text-lg">
                    {item.d}
                  </p>
                </div>
              ))}
            </Container>
          </section>
        </FadeIn>

        <Entregas dict={dict} />

        <Cta
          lang={lang}
          dict={dict}
          variant="left"
          showLogo
          title={
            <>
              {dict.atuacaoPage.cta.tituloNormal}
              <b>{dict.atuacaoPage.cta.tituloBold}</b>
            </>
          }
        />
      </main>

      <Footer lang={lang} dict={dict} />
    </>
  );
}

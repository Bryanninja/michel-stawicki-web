import { getDictionary } from "../../getDictionary";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cta from "../../components/Cta";
import Entregas from "../../components/Entregas";
import Faq from "../../components/Faq";
import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function Atuacao({
  params,
}: {
  params: Promise<{ lang: "pt" | "en" }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const metodo = dict.atuacaoPage.metodo;

  return (
    <>
      <Header lang={lang} dict={dict} />
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
                  {dict.atuacaoPage.hero.kicker1}
                  <br />
                  {dict.atuacaoPage.hero.kicker2}
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* INTRO */}
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
          {/* MÉTODO GRID */}
          <section className=" pb-32">
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metodo.map((item: any, index: number) => (
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
      <Faq dict={dict} />
      <Footer lang={lang} dict={dict} />
    </>
  );
}

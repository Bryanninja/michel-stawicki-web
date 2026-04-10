// Arquivo: app/[lang]/page.tsx
import { getDictionary } from "../getDictionary";
import Header from "../components/Header";
import AtuacaoGlobal from "../components/AtuaçãoGlobal";
import Crescimento from "../components/Crescimento";
import Cta from "../components/Cta";
import Estrutura from "../components/Estrutura";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InterventionDetail from "../components/InterventionDetail";
import QuoteSection from "../components/QuoteSection";

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

// 1. Avisamos ao TypeScript que params agora é uma Promise
export default async function Home({
  params,
}: {
  params: Promise<{ lang: "pt" | "en" }>;
}) {
  // 2. DESEMPACOTAMOS a Promise com o 'await'
  const resolvedParams = await params;
  const lang = resolvedParams.lang; // Agora temos o "pt" ou "en" de forma segura!

  // 3. Lemos o arquivo json correspondente
  const dict = await getDictionary(lang);

  return (
    <>
      {/* 4. Passamos a variável 'lang' limpa para o Header */}
      <Header lang={lang} dict={dict} />

      <main>
        <Hero dict={dict} />
        <QuoteSection dict={dict} />
        <Crescimento dict={dict} />
        <Estrutura lang={lang} dict={dict} />
        <InterventionDetail dict={dict} />
        <AtuacaoGlobal lang={lang} dict={dict} />
        <Cta
          lang={lang}
          dict={dict}
          title={
            <>
              {dict.homeCta.titulo1} <br className="hidden md:block" />{" "}
              {dict.homeCta.titulo2}
            </>
          }
          description={dict.homeCta.descricao}
        />

        <Footer lang={lang} dict={dict} />
      </main>
    </>
  );
}

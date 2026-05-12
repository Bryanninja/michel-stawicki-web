import { Metadata } from "next";
import { getDictionary } from "../getDictionary";
import Header from "../components/Header";
import AtuacaoGlobal from "../components/AtuaçãoGlobal";
import Crescimento from "../components/Crescimento";
import Cta from "../components/Cta";
import Estrutura from "../components/Estrutura";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InterventionDetail from "../components/InterventionDetail";
import QuoteSection from "../components/QuoteSection";

type Props = {
  params: Promise<{ lang: "pt" | "en" }>;
};

// --- IMPLEMENTAÇÃO DE SEO MONSTRO ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Títulos e descrições estratégicos baseados no idioma
  const isPt = lang === "pt";

  return {
    title: isPt
      ? "Estrategista Financeiro para Negócios"
      : "Financial Strategist for Businesses",
    description: isPt
      ? "Mais de 30 anos de experiência transformando a gestão financeira de pequenas e médias empresas com clareza e disciplina."
      : "Over 30 years of experience transforming small and medium business financial management with clarity and discipline.",

    // Essencial para o Google não achar que o conteúdo é duplicado
    alternates: {
      canonical: `https://msfinancialstructure.com/${lang}`,
      languages: {
        "pt-BR": "https://msfinancialstructure.com/pt",
        "en-US": "https://msfinancialstructure.com/en",
      },
    },
    openGraph: {
      url: `https://msfinancialstructure.com/${lang}`,
      title: isPt
        ? "Michel Stawicki | MS Financial Structure"
        : "Michel Stawicki | MS Financial Structure",
      description: isPt
        ? "Estrutura financeira para sustentar crescimento com disciplina."
        : "Financial structure to sustain growth with discipline.",
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function Home({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <>
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

// Arquivo: src/app/page.tsx
import Header from "../app/components/Header";
import AtuacaoGlobal from "./components/AtuaçãoGlobal";
import Crescimento from "./components/Crescimento";
import Cta from "./components/Cta";
import Estrutura from "./components/Estrutura";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InterventionDetail from "./components/InterventionDetail";
import QuoteSection from "./components/QuoteSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuoteSection />
        <Crescimento />
        <Estrutura />
        <InterventionDetail />
        <AtuacaoGlobal />
        <Cta
          title={
            <>
              Toda intervenção <br className="hidden md:block" />
              começa com clareza.
            </>
          }
          description="A Conversa Estratégica é um encontro estruturado para compreender a dinâmica do negócio e os desafios que impactam sua estrutura financeira."
        />
        <Faq />
        <Footer />
      </main>
    </>
  );
}

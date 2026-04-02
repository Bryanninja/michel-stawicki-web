// Arquivo: src/app/page.tsx
import Header from "../app/components/Header";
import AtuacaoGlobal from "./components/AtuaçãoGlobal";
import Crescimento from "./components/Crescimento";
import Cta from "./components/Cta";
import Estrutura from "./components/Estrutura";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Crescimento />
        <Estrutura />
        <AtuacaoGlobal />
        <Cta
          title="Toda intervenção começa com clareza."
          description="A Conversa Estratégica é um encontro estruturado para compreender o momento da empresa e seus objetivos."
        />
        <Faq />
        <Footer />
      </main>
    </>
  );
}

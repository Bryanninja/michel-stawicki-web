// Arquivo: src/app/page.tsx
import Header from "../app/components/Header";
import Crescimento from "./components/Crescimento";
import Estrutura from "./components/Estrutura";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Crescimento />
        <Estrutura />
      </main>
    </>
  );
}

"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";

export default function QuoteSection() {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden border-y border-brand-gray/5">
      <div
        className="absolute top-6 right-10 flex gap-1.5 opacity-80"
        aria-hidden="true"
      >
        <div className="w-1.5 h-1.5 bg-brand-black" />
        <div className="w-1.5 h-1.5 bg-brand-black" />
        <div className="w-1.5 h-1.5 bg-brand-black" />
      </div>

      <Container>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center px-4">
            {/* Citação Principal */}
            <h2 className="font-sans font-medium text-2xl md:text-3xl text-brand-black leading-tight mb-5 tracking-tight">
              "Empresas crescem. À medida que a escala{" "}
              <br className="hidden sm:block" /> aumenta, a complexidade se
              intensifica".
            </h2>

            {/* Slogan/Assinatura em Serifado */}
            <p className="font-serif text-lg md:text-2xl text-brand-black/80 ">
              "Estrutura precede crescimento"
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

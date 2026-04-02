"use client";

import { useState } from "react";

export default function Faq() {
  // Estado para controlar qual pergunta está aberta
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como é definido o escopo da intervenção na minha empresa?",
      answer:
        "A intervenção não segue pacotes de prateleira. Toda atuação é estritamente orientada pelo momento estrutural da empresa. Primeiro realizamos a Conversa Estratégica para compreender o grau de maturidade da equipe; só então desenhamos uma intervenção cirúrgica com foco no fortalecimento da sua base.",
    },
    {
      question:
        "Qual é o momento ideal para buscar essa reestruturação financeira?",
      answer:
        "O momento crítico surge quando o crescimento do negócio ultrapassa a capacidade da estrutura atual. À medida que a escala aumenta, pontos isolados deixam de ser o problema. Se a sua operação atingiu um nível onde a falta de clareza trava o crescimento, é o momento de evoluir a base.",
    },
    {
      question: "Quais são as entregas reais ao final do processo?",
      answer:
        "Mais do que relatórios, a intervenção entrega evolução estrutural. Ao final do processo, a empresa passa a operar com organização financeira disciplinada e instrumentos reais de gestão que permitem decisões com previsibilidade para sustentar o próximo ciclo de crescimento.",
    },
    {
      question: "Como funciona a Conversa Estratégica e qual o próximo passo?",
      answer:
        "É um encontro estruturado focado no entendimento consistente da dinâmica do seu negócio. Analisamos seu modelo de geração de resultado, ciclo financeiro e prioridades. A partir dessa análise, avaliamos o alinhamento. Se houver convergência, definimos os próximos passos de forma objetiva.",
    },
  ];

  return (
    <section className="bg-surface w-full py-24 border-b border-brand-gray/10">
      <div className="max-w-[1440px] mx-auto px-6 max-w-4xl">
        <h2 className="font-sans font-medium text-3xl md:text-4xl text-brand-white mb-12 tracking-tight">
          Ficou com alguma dúvida?
        </h2>

        <div className="flex flex-col border-t border-brand-gray/20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-brand-gray/20">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
              >
                <span className="font-sans text-brand-white group-hover:text-brand-white/80 transition-colors md:text-lg pr-4">
                  {faq.question}
                </span>

                {/* Ícone de Seta com rotação animada */}
                <svg
                  className={`w-5 h-5 text-brand-white/50 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Corpo da Resposta animado */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-sans text-brand-white/70 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

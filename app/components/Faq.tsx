"use client";

import { useState } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "A intervenção substitui a minha equipe financeira atual?",
      answer:
        "Não. A intervenção não visa substituir, mas capacitar e reestruturar. Atuamos em conjunto com a sua liderança financeira atual, fornecendo a eles novos critérios, processos e instrumentos decisórios para que consigam lidar com a nova complexidade da operação.",
    },
    {
      question: "Qual é a duração média de um projeto de intervenção?",
      answer:
        "A duração é estritamente orientada pelo momento estrutural da empresa. Diferente de consultorias tradicionais com pacotes de horas fixos, nosso foco é a consolidação definitiva da base financeira. O cronograma exato e os marcos de entrega são desenhados apenas após a Conversa Estratégica e o diagnóstico inicial.",
    },
    {
      question: "A metodologia se aplica ao meu setor específico de atuação?",
      answer:
        "Sim. A lógica de geração de caixa, estrutura de capital e reequilíbrio de ciclo financeiro são universais. A vivência em ambientes industriais, corporativos e de projetos permite adaptar os princípios da arquitetura financeira às particularidades e desafios regulatórios de qualquer mercado.",
    },
    {
      question:
        "O trabalho envolve a execução ou apenas a entrega de um plano?",
      answer:
        "A atuação vai além do diagnóstico. O método inclui a implementação assistida: construímos a estrutura lado a lado com a sua gestão, organizamos as rotinas e validamos as entregas na prática. O objetivo final é a transferência real de padrão operacional, e não a entrega de um relatório teórico.",
    },
  ];

  return (
    <section className="bg-surface w-full py-24 border-b border-brand-gray/10">
      <Container>
        <FadeIn>
          <h2 className="font-sans font-medium text-3xl md:text-4xl text-brand-white mb-12 tracking-tight">
            Esclarecendo a Intervenção.
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-brand-gray/20">
          <FadeIn delay={0.2}>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-brand-gray/20">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="font-sans text-brand-white group-hover:text-brand-white/80 transition-colors md:text-lg pr-4">
                    {faq.question}
                  </span>

                  <svg
                    className={`w-5 h-5 text-brand-white/50 transform transition-transform duration-300 shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
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
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

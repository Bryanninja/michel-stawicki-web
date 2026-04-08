"use client";
import { useState } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function Faq({ dict }: { dict: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = dict.faq.perguntas;

  return (
    <section className="bg-surface w-full py-24 border-b border-brand-gray/10">
      <Container>
        <FadeIn>
          <h2 className="font-sans font-medium text-3xl md:text-4xl text-brand-white mb-12 tracking-tight">
            {dict.faq.titulo}
          </h2>
        </FadeIn>
        <div className="flex flex-col border-t border-brand-gray/20">
          <FadeIn delay={0.2}>
            {faqs.map((faq: any, index: number) => (
              <div key={index} className="border-b border-brand-gray/20">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="font-sans text-brand-white group-hover:text-brand-white/80 transition-colors md:text-lg pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-brand-white/50 transform transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
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
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="font-sans text-brand-white/70 font-light leading-relaxed">
                    {faq.a}
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

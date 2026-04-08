"use client";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function InterventionDetail({ dict }: { dict: any }) {
  return (
    <section className="bg-brand-black py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <FadeIn>
            <div className="relative bg-surface h-full p-10 md:p-20 flex items-center border border-white/5 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-4 md:w-6 bg-surface-hover" />
              <div className="relative z-10">
                <p className="font-sans text-lg md:text-xl font-light text-pretty text-brand-white/90 leading-relaxed">
                  {dict.intervention.texto}
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative h-full min-h-[400px] overflow-hidden shadow-2xl">
              <img
                src="/reuniao-michel.webp"
                alt="Michel Stawicki"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-black/10 pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

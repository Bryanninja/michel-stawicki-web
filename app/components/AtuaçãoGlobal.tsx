import Link from "next/link";
import Button from "./Button";
import FadeIn from "./FadeIn";

export default function AtuacaoGlobal() {
  return (
    <section className="relative bg-brand-black w-full flex flex-col items-center pb-24">
      <div className="max-w-2xl absolute z-20 mx-auto px-6 w-full flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="font-sans font-medium text-4xl md:text-5xl text-brand-white mb-6 tracking-tight">
            Atuação Global
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="font-sans text-brand-white/80 text-lg max-w-3xl font-light leading-relaxed">
            <strong className="font-medium text-brand-white">
              Mais de 30 anos de atuação
            </strong>{" "}
            em finanças em ambientes industriais, corporativos e de projetos no{" "}
            <strong className="font-medium text-brand-white">
              Brasil, Argentina e África.
            </strong>
          </p>
        </FadeIn>
      </div>

      <div className="relative w-full mt-6 md:mt-24 lg:mt-32 h-dvh z-10">
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-brand-black to-transparent z-10 pointer-events-none"></div>

        <img
          src="/atuacao-michel.jpg"
          alt="Michel Stawicki"
          className="w-full h-full object-cover filter grayscale-[15%] opacity-90"
        />

        {/* Gradiente inferior - Mais suave para a transição do card */}
        {/* <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-brand-black to-transparent z-10 pointer-events-none"></div> */}
      </div>

      <div className="relative z-30 w-full px-6 -mt-32 flex flex-col items-center gap-10">
        <FadeIn delay={0.3}>
          <div className="bg-surface/90 backdrop-blur-md border border-white/10 p-8 lg:px-24 lg:py-10 max-w-7xl w-full shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Texto de Apoio */}
              <div className="max-w-lg text-center md:text-left">
                <p className="font-sans text-brand-white/80 text-base text-pretty md:text-lg leading-relaxed font-light">
                  Trajetória associada à construção deliberada de estruturas
                  financeiras robustas. Hoje essa experiência é aplicada a{" "}
                  <b className="text-brand-white">
                    empresas que desejam fortalecer sua estrutura financeira
                  </b>{" "}
                  e elevar o padrão de suas decisões estratégicas
                </p>
              </div>

              {/* Stat "30+" */}
              <div className="bg-white/5 border border-white/10 py-8 px-12 flex flex-col items-center justify-center min-w-[240px]">
                <span className="font-serif font-bold text-6xl md:text-7xl text-brand-white mb-1">
                  30+
                </span>
                <span className="font-sans text-brand-white/70 text-sm md:text-lg font-light">
                  Anos de Experiência
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* O Botão agora fica naturalmente sobre o fundo preto da seção */}
        <FadeIn delay={0.4}>
          <Button href="/experiencia" variant="outline">
            Ver Trajetória Completa e Resultados
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

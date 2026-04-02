import Link from "next/link";
import Button from "./Button";

export default function AtuacaoGlobal() {
  return (
    <section className="bg-brand-black w-full pt-24 flex flex-col items-center">
      {/* 1. Cabeçalho e Botão */}
      <div className="max-w-2xl absolute z-10 mx-auto px-6 w-full flex flex-col items-center text-center">
        <h2 className="font-sans font-medium text-4xl md:text-5xl text-brand-white mb-6 tracking-tight">
          Atuação Global
        </h2>
        <p className="font-sans text-brand-white/80 text-lg max-w-3xl font-light leading-relaxed mb-8">
          <strong className="font-medium text-brand-white">
            Mais de 30 anos de atuação
          </strong>{" "}
          em finanças em ambientes industriais, corporativos e de projetos no{" "}
          <strong className="font-medium text-brand-white">
            Brasil, Argentina e África...
          </strong>
        </p>

        <Button href="/experiencia" variant="outline">
          Ver Trajetória completa e Resultados
        </Button>
      </div>

      {/* 2. Imagem com Gradiente Superior */}
      <div className="relative w-full mt-40 h-full">
        {/* Gradiente esfumando do preto (brand-black) para transparente */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-brand-black to-transparent z-1 pointer-events-none"></div>

        <img
          src="/atuacao-michel.jpg"
          alt="Michel Stawicki"
          className="w-full h-dvh object-cover filter grayscale-[15%] opacity-90"
        />
      </div>

      {/* 3. Barra Sólida Inferior (Ancoragem) */}
      <div className="w-full bg-surface border-t border-brand-gray/10 py-8 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Card "30+" */}
          <div className="bg-surface-hover border border-brand-gray/20 rounded-lg py-8 px-12 flex flex-col items-center justify-center min-w-[280px]">
            <span className="font-serif font-bold text-6xl md:text-7xl text-brand-white mb-1">
              30+
            </span>
            <span className="font-sans text-brand-white/70 text-sm md:text-lg font-light">
              Anos de Experiência
            </span>
          </div>

          {/* Texto de Apoio */}
          <div className="max-w-md text-center md:text-left">
            <p className="font-sans text-brand-white/80 text-base md:text-lg leading-relaxed font-light">
              Hoje essa experiência é aplicada a empresas que desejam fortalecer
              sua estrutura financeira e elevar o padrão de suas decisões
              estratégicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

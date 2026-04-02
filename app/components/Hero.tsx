import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-michel.jpg"
          alt="Michel Stawicki Consultor Financeiro"
          className="w-full h-full object-cover object-[75%_top]"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
      </div>

      <Container className="relative z-10 w-full  h-full flex flex-col justify-center">
        <div className="pt-24 md:pt-0"></div>

        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-white text-brand-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold font-sans">
              $
            </div>
            <span className="font-sans text-brand-white/90 text-sm tracking-wide">
              Consultor Financeiro
            </span>
          </div>

          <h1 className="font-sans font-medium text-4xl md:text-5xl leading-[1.1] text-brand-white mb-6 tracking-tight">
            Michel Stawicki
            <br />
            Financial Structure
          </h1>

          <p className="font-sans text-lg text-brand-white/80 max-w-sm leading-relaxed font-light">
            Estrutura financeira para sustentar crescimento com disciplina,
            clareza e consistência
          </p>
        </div>

        {/* Badge Bottom com Link e Animação */}
        <a href="#growth" className="group">
          <div className="absolute bottom-12 left-6 md:left-auto">
            <div className="inline-flex items-center gap-2 border border-brand-white/30 px-3 py-1.5 hover:bg-brand-white/10 transition-all cursor-pointer">
              {/* Seta com animação de "quicar" no hover do link */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-white group-hover:translate-y-1 transition-transform duration-300"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              <span className="font-serif text-sm text-brand-white">Role</span>
            </div>
          </div>
        </a>
      </Container>
    </section>
  );
}

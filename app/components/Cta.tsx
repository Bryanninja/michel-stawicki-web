import Button from "./Button";

interface CtaProps {
  title: string;
  description?: string; // Opcional, alguns CTAs podem não ter
  showLogo?: boolean; // Se true, mostra o MS gigante no fundo
}

export default function Cta({
  title,
  description,
  showLogo = false,
}: CtaProps) {
  return (
    <section className="bg-brand-white py-32 relative overflow-hidden">
      {/* Logo "MS" em outline: Só aparece se showLogo for true */}
      {showLogo && (
        <div className="absolute right-[-5%] bottom-[-10%] opacity-100 select-none pointer-events-none">
          <img
            src="/ms-outline.svg"
            className="w-[300px] lg:w-[400px] xl:w-[600px]"
            alt="MS logo background"
          />
        </div>
      )}

      <div
        className={`max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col gap-10 ${showLogo ? "text-left" : "items-center text-center"}`}
      >
        {/* Título: Usa o que você passar na página */}
        <h2
          className={`font-sans font-medium text-3xl md:text-4xl  text-brand-black max-w-4xl leading-tight text-pretty ${showLogo ? "text-left" : "text-center"} `}
        >
          {title}
        </h2>

        {/* Descrição: Só aparece se você passar uma */}
        {description && (
          <p className="font-sans text-brand-black/70 text-lg max-w-2xl font-light leading-relaxed">
            {description}
          </p>
        )}

        <div className="shrink-0">
          {/* Usando o nosso componente de botão com a variante preta */}
          <Button href="/conversa-estrategica" variant="solid">
            Agendar Conversa Estratégica
          </Button>
        </div>
      </div>
    </section>
  );
}

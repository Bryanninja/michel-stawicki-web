import Button from "./Button";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { ReactNode } from "react";

interface CtaProps {
  title: ReactNode; // Mudamos para ReactNode para você poder usar <b> em partes do texto
  description?: string;
  variant?: "centered" | "left"; // Controla o layout
  showLogo?: boolean;
}

// ... (mantenha os imports)

export default function Cta({
  title,
  description,
  variant = "centered",
  showLogo = false,
}: CtaProps) {
  const isLeft = variant === "left";

  return (
    <section className="bg-[#F9F8F6] py-20 md:py-28 relative overflow-hidden border-t border-brand-gray/5">
      {showLogo && (
        <div className="absolute right-[-5%] bottom-[-25%] opacity-[0.5] select-none pointer-events-none z-0">
          <img
            src="/ms-outline.svg"
            className="w-[400px] lg:w-[700px]"
            alt="MS logo background"
          />
        </div>
      )}

      <Container className="relative z-10">
        <div
          className={`flex flex-col gap-8 ${isLeft ? "items-start text-left" : "items-center text-center"}`}
        >
          <FadeIn>
            {/* Reduzi o tamanho: de 5xl para 4xl no desktop e de 3xl para 2xl no mobile */}
            <h2
              className={`font-sans text-2xl md:text-4xl text-brand-black leading-tight tracking-tight text-balance ${isLeft ? "max-w-3xl" : "max-w-2xl font-medium"}`}
            >
              {title}
            </h2>
          </FadeIn>

          {description && (
            <FadeIn delay={0.2}>
              <p
                className={`font-sans text-brand-black/70 text-lg font-light leading-relaxed ${isLeft ? "max-w-xl" : "max-w-2xl"}`}
              >
                {description}
              </p>
            </FadeIn>
          )}

          <FadeIn delay={0.3}>
            <Button href="/conversa-estrategica" variant="solid">
              Agendar Conversa Estratégica
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

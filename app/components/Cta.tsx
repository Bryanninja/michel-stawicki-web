import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-brand-white w-full py-24 flex flex-col items-center text-center px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Título em Preto (Quebra visual para chamar atenção) */}
        <h2 className="font-sans font-medium text-4xl md:text-5xl text-brand-black mb-6 tracking-tight leading-tight">
          Toda intervenção <br className="hidden md:block" />
          começa com clareza.
        </h2>

        {/* Subtítulo */}
        <p className="font-sans text-brand-black/80 text-lg text-pretty max-w-2xl font-light leading-relaxed mb-10">
          A Conversa Estratégica é um encontro estruturado para compreender o
          momento da empresa, seus objetivos e os desafios que impactam sua
          estrutura financeira.
        </p>

        {/* Botão Preto Invertido */}
        <Link
          href="/conversa-estrategica"
          className="inline-block bg-brand-black text-brand-white px-10 py-4 font-sans text-sm font-medium hover:bg-brand-gray transition-colors duration-300  "
        >
          Agendar Conversa Estratégica
        </Link>
      </div>
    </section>
  );
}

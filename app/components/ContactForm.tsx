// src/components/ContactForm.tsx
export default function ContactForm() {
  return (
    <div className="bg-surface border border-white/10 p-8 md:p-12 w-full max-w-xl">
      <h2 className="font-sans font-medium text-2xl text-brand-white mb-8 text-center">
        Agendar Conversa Estratégica
      </h2>

      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Nome"
            className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
          />
        </div>

        <input
          type="email"
          placeholder="E-mail"
          className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
        />
        <input
          type="text"
          placeholder="Empresa"
          className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
        />

        <textarea
          placeholder="Mensagem..."
          rows={3}
          className="bg-[#262626]/50 border border-white/10 p-4 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light mt-4"
        />

        <button
          type="submit"
          className="bg-brand-white cursor-pointer text-brand-black font-sans font-medium py-4 mt-4 hover:bg-brand-gray hover:text-brand-white transition-all duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/enviar.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-surface border border-white/10 p-8 md:p-12 w-full max-w-xl">
      <h2 className="font-sans font-medium text-2xl text-brand-white mb-8 text-center">
        Agendar Conversa Estratégica
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="Nome"
            required
            placeholder="Nome"
            className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
          />
          <input
            type="text"
            name="Sobrenome"
            required
            placeholder="Sobrenome"
            className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
          />
        </div>

        <input
          type="email"
          name="Email"
          required
          placeholder="E-mail"
          className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
        />
        <input
          type="tel"
          name="Telefone"
          placeholder="Telefone"
          className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
        />
        <input
          type="text"
          name="Empresa"
          placeholder="Empresa"
          className="bg-transparent border-b border-white/20 py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light"
        />

        <textarea
          name="Mensagem"
          required
          placeholder="Mensagem..."
          rows={3}
          className="bg-[#262626]/50 border border-white/10 p-4 text-brand-white focus:outline-none focus:border-brand-white transition-colors font-light mt-4"
        />

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`font-sans font-medium py-4 mt-4 transition-all duration-300 ${status === "success" ? "bg-[#8bc34a] text-brand-black" : status === "error" ? "bg-red-500 text-white" : "bg-brand-white text-brand-black hover:bg-brand-gray hover:text-brand-white cursor-pointer"}`}
        >
          {status === "loading" && "Enviando..."}
          {status === "success" && "Mensagem Enviada!"}
          {status === "error" && "Erro ao enviar."}
          {status === "idle" && "Enviar"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [erros, setErros] = useState<{ [key: string]: string }>({});
  const [valores, setValores] = useState({
    Nome: "",
    Sobrenome: "",
    Email: "",
    Telefone: "",
    Empresa: "",
    Mensagem: "",
  });

  // MÁSCARA FORÇADA PARA BRASIL (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número

    valor = valor.substring(0, 11); // Limita a 11 dígitos

    if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    }
    if (valor.length > 7) {
      valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    }

    setValores({ ...valores, Telefone: valor });
    if (erros.Telefone) setErros((prev) => ({ ...prev, Telefone: "" }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
    if (erros[name]) setErros((prev) => ({ ...prev, [name]: "" }));
  };

  // VALIDAÇÃO: TODOS OS CAMPOS OBRIGATÓRIOS
  const validarFormulario = () => {
    const novosErros: { [key: string]: string } = {};

    if (!valores.Nome.trim()) novosErros.Nome = "Campo obrigatório.";
    if (!valores.Sobrenome.trim()) novosErros.Sobrenome = "Campo obrigatório.";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!valores.Email.trim() || !emailRegex.test(valores.Email)) {
      novosErros.Email = "E-mail inválido.";
    }

    const telNumeros = valores.Telefone.replace(/\D/g, "");
    if (!valores.Telefone.trim() || telNumeros.length < 10) {
      novosErros.Telefone = "Telefone inválido.";
    }

    if (!valores.Empresa.trim()) novosErros.Empresa = "Campo obrigatório.";
    if (!valores.Mensagem.trim() || valores.Mensagem.length < 10) {
      novosErros.Mensagem = "Detalhe sua mensagem (mín. 10 caracteres).";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    setStatus("loading");
    const formData = new FormData();
    Object.entries(valores).forEach(([key, value]) =>
      formData.append(key, value),
    );

    try {
      const response = await fetch("/enviar.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("success");
        setValores({
          Nome: "",
          Sobrenome: "",
          Email: "",
          Telefone: "",
          Empresa: "",
          Mensagem: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const getInputClass = (campo: string) =>
    `bg-transparent border-b py-2 text-brand-white focus:outline-none transition-all font-light ${
      erros[campo]
        ? "border-red-500 placeholder-red-400/50"
        : "border-white/20 focus:border-brand-white"
    }`;

  return (
    <div className="bg-surface border border-white/10 p-8 md:p-12 w-full max-w-xl relative overflow-hidden">
      <h2 className="font-sans font-medium text-2xl text-brand-white mb-8 text-center">
        Agendar Conversa Estratégica
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 relative z-10"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col relative">
            <input
              type="text"
              name="Nome"
              value={valores.Nome}
              onChange={handleInputChange}
              placeholder="Nome *"
              className={getInputClass("Nome")}
            />
            {erros.Nome && (
              <span className="text-red-500 text-[10px] absolute -bottom-4">
                {erros.Nome}
              </span>
            )}
          </div>
          <div className="flex flex-col relative">
            <input
              type="text"
              name="Sobrenome"
              value={valores.Sobrenome}
              onChange={handleInputChange}
              placeholder="Sobrenome *"
              className={getInputClass("Sobrenome")}
            />
            {erros.Sobrenome && (
              <span className="text-red-500 text-[10px] absolute -bottom-4">
                {erros.Sobrenome}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col relative">
          <input
            type="email"
            name="Email"
            value={valores.Email}
            onChange={handleInputChange}
            placeholder="E-mail *"
            className={getInputClass("Email")}
          />
          {erros.Email && (
            <span className="text-red-500 text-[10px] absolute -bottom-4">
              {erros.Email}
            </span>
          )}
        </div>

        <div className="flex flex-col relative">
          <input
            type="tel"
            name="Telefone"
            value={valores.Telefone}
            onChange={handlePhoneChange}
            placeholder="Telefone * (DDD + Número)"
            className={getInputClass("Telefone")}
          />
          {erros.Telefone && (
            <span className="text-red-500 text-[10px] absolute -bottom-4">
              {erros.Telefone}
            </span>
          )}
        </div>

        <div className="flex flex-col relative">
          <input
            type="text"
            name="Empresa"
            value={valores.Empresa}
            onChange={handleInputChange}
            placeholder="Empresa *"
            className={getInputClass("Empresa")}
          />
          {erros.Empresa && (
            <span className="text-red-500 text-[10px] absolute -bottom-4">
              {erros.Empresa}
            </span>
          )}
        </div>

        <div className="flex flex-col relative mt-2">
          <textarea
            name="Mensagem"
            value={valores.Mensagem}
            onChange={handleInputChange}
            placeholder="Como podemos ajudar? *"
            rows={3}
            className={`bg-[#262626]/50 border p-4 text-brand-white focus:outline-none transition-all font-light ${
              erros.Mensagem
                ? "border-red-500 placeholder-red-400/50"
                : "border-white/10 focus:border-brand-white"
            }`}
          />
          {erros.Mensagem && (
            <span className="text-red-500 text-[10px] absolute -bottom-4">
              {erros.Mensagem}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`font-sans font-medium py-4 mt-6 transition-all duration-300 shadow-lg ${
            status === "success"
              ? "bg-[#8bc34a] text-brand-black"
              : status === "error"
                ? "bg-red-500 text-white"
                : "bg-brand-white text-brand-black hover:bg-brand-gray hover:text-brand-white cursor-pointer"
          }`}
        >
          {status === "loading" && "Enviando..."}
          {status === "success" && "Enviado com Sucesso!"}
          {status === "error" && "Erro ao enviar. Tente novamente."}
          {status === "idle" && "Enviar"}
        </button>
      </form>
    </div>
  );
}

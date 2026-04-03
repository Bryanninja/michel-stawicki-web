"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [erros, setErros] = useState<{ [key: string]: string }>({});

  // Estado para controlar os valores digitados (necessário para a máscara funcionar em tempo real)
  const [valores, setValores] = useState({
    Nome: "",
    Sobrenome: "",
    Email: "",
    Telefone: "",
    Empresa: "",
    Mensagem: "",
  });

  // A MÁSCARA INTELIGENTE (Brasil vs Global)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value;

    // Se começar com +, é internacional. Mantém o + e formata com espaços
    if (valor.startsWith("+")) {
      valor = valor.replace(/(?!^\+)[^\d]/g, ""); // Permite só + no início e números
      valor = valor
        .replace(/(\+\d{2,3})(\d{2,3})(\d{3,4})(\d{0,4})/, "$1 $2 $3 $4")
        .trim();
    } else {
      // Se não tem +, assume Brasil: (XX) XXXXX-XXXX
      valor = valor.replace(/\D/g, ""); // Remove tudo que não é número
      valor = valor.substring(0, 11); // Limita a 11 dígitos
      if (valor.length > 2) valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      if (valor.length > 7) valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    }

    setValores({ ...valores, Telefone: valor });

    // Limpa o erro do telefone enquanto o usuário digita
    if (erros.Telefone) setErros((prev) => ({ ...prev, Telefone: "" }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
    // Limpa o erro do campo específico enquanto o usuário digita
    if (erros[name]) setErros((prev) => ({ ...prev, [name]: "" }));
  };

  // VALIDAÇÃO AVANÇADA (Blindagem)
  const validarFormulario = () => {
    const novosErros: { [key: string]: string } = {};

    // Validação de Nome (Mínimo 2 letras, sem números)
    if (!valores.Nome.trim() || valores.Nome.length < 2) {
      novosErros.Nome = "Insira um nome válido.";
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(valores.Nome)) {
      novosErros.Nome = "Apenas letras permitidas.";
    }

    // Validação de E-mail (Regex profissional)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!valores.Email.trim() || !emailRegex.test(valores.Email)) {
      novosErros.Email = "Insira um e-mail corporativo válido.";
    }

    // Validação de Telefone (Mínimo de dígitos lógicos)
    const telNumeros = valores.Telefone.replace(/\D/g, "");
    if (valores.Telefone && telNumeros.length < 8) {
      novosErros.Telefone = "Número muito curto.";
    }

    // Validação de Mensagem (Mínimo de caracteres para evitar spam vazio)
    if (!valores.Mensagem.trim() || valores.Mensagem.length < 10) {
      novosErros.Mensagem =
        "Por favor, detalhe um pouco mais (mín. 10 caracteres).";
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
        setErros({});
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const getInputClass = (campo: string) =>
    `bg-transparent border-b py-2 text-brand-white focus:outline-none transition-all font-light ${erros[campo] ? "border-red-500 placeholder-red-400/50" : "border-white/20 focus:border-brand-white"}`;

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
              <span className="text-red-500 text-xs absolute -bottom-5 left-0">
                {erros.Nome}
              </span>
            )}
          </div>
          <input
            type="text"
            name="Sobrenome"
            value={valores.Sobrenome}
            onChange={handleInputChange}
            placeholder="Sobrenome"
            className={getInputClass("Sobrenome")}
          />
        </div>

        <div className="flex flex-col relative mt-2 md:mt-0">
          <input
            type="email"
            name="Email"
            value={valores.Email}
            onChange={handleInputChange}
            placeholder="E-mail *"
            className={getInputClass("Email")}
          />
          {erros.Email && (
            <span className="text-red-500 text-xs absolute -bottom-5 left-0">
              {erros.Email}
            </span>
          )}
        </div>

        <div className="flex flex-col relative mt-2 md:mt-0">
          <input
            type="tel"
            name="Telefone"
            value={valores.Telefone}
            onChange={handlePhoneChange}
            placeholder="Telefone (ex: +27 ou 31...)"
            className={getInputClass("Telefone")}
          />
          {erros.Telefone && (
            <span className="text-red-500 text-xs absolute -bottom-5 left-0">
              {erros.Telefone}
            </span>
          )}
        </div>

        <input
          type="text"
          name="Empresa"
          value={valores.Empresa}
          onChange={handleInputChange}
          placeholder="Empresa"
          className={getInputClass("Empresa")}
        />

        <div className="flex flex-col mt-4 relative">
          <textarea
            name="Mensagem"
            value={valores.Mensagem}
            onChange={handleInputChange}
            placeholder="Como podemos ajudar? *"
            rows={3}
            className={`bg-[#262626]/50 border p-4 text-brand-white focus:outline-none transition-all font-light ${erros.Mensagem ? "border-red-500 placeholder-red-400/50" : "border-white/10 focus:border-brand-white"}`}
          />
          {erros.Mensagem && (
            <span className="text-red-500 text-xs absolute -bottom-5 left-0">
              {erros.Mensagem}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`font-sans font-medium py-4 mt-6 transition-all duration-300 shadow-lg ${status === "success" ? "bg-[#8bc34a] text-brand-black shadow-[#8bc34a]/20" : status === "error" ? "bg-red-500 text-white" : "bg-brand-white text-brand-black hover:bg-brand-gray hover:text-brand-white cursor-pointer"}`}
        >
          {status === "loading" && "Autenticando..."}
          {status === "success" && "Enviado com Sucesso!"}
          {status === "error" && "Erro técnico. Tente novamente."}
          {status === "idle" && "Enviar Solicitação"}
        </button>
      </form>
    </div>
  );
}

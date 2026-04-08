"use client";

import { useState } from "react";

export default function ContactForm({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
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

  // MÁSCARA INTELIGENTE (BRASIL VS INTERNACIONAL)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value;

    if (lang === "pt") {
      // Máscara rigorosa Brasil: (XX) XXXXX-XXXX
      valor = valor.replace(/\D/g, "");
      valor = valor.substring(0, 11);
      if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      }
      if (valor.length > 7) {
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
      }
    } else {
      // Máscara Internacional Livre: Permite +, números, espaços e traços
      valor = valor.replace(/[^\d\+\-\s()]/g, "");
      valor = valor.substring(0, 20); // Limite razoável para formato internacional
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

  const validarFormulario = () => {
    const novosErros: { [key: string]: string } = {};

    if (!valores.Nome.trim()) novosErros.Nome = dict.form.err_req;
    if (!valores.Sobrenome.trim()) novosErros.Sobrenome = dict.form.err_req;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!valores.Email.trim() || !emailRegex.test(valores.Email)) {
      novosErros.Email = dict.form.err_email;
    }

    // Validação de telefone flexível para PT ou EN
    const telNumeros = valores.Telefone.replace(/\D/g, "");
    if (
      !valores.Telefone.trim() ||
      telNumeros.length < (lang === "pt" ? 10 : 7)
    ) {
      novosErros.Telefone = dict.form.err_tel;
    }

    if (!valores.Empresa.trim()) novosErros.Empresa = dict.form.err_req;
    if (!valores.Mensagem.trim() || valores.Mensagem.length < 10) {
      novosErros.Mensagem = dict.form.err_msg;
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
        {dict.form.titulo}
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
              placeholder={dict.form.nome}
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
              placeholder={dict.form.sobrenome}
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
            placeholder={dict.form.email}
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
            placeholder={dict.form.telefone}
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
            placeholder={dict.form.empresa}
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
            placeholder={dict.form.mensagem}
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
          {status === "loading" && dict.form.btn_enviando}
          {status === "success" && dict.form.btn_sucesso}
          {status === "error" && dict.form.btn_erro}
          {status === "idle" && dict.form.btn_enviar}
        </button>
      </form>
    </div>
  );
}

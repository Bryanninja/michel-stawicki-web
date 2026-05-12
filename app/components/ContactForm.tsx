"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

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

    // Validação simples: se tem pelo menos o código do país e alguns números
    if (!valores.Telefone || valores.Telefone.length < 10) {
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
      // Usando o enviar.php que vamos configurar com o Resend
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
    `bg-transparent border-b py-2 text-brand-white focus:outline-none transition-all font-light w-full ${
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

        {/* COMPONENTE INTERNACIONAL DE TELEFONE */}
        <div className="flex flex-col relative">
          <PhoneInput
            defaultCountry={lang === "pt" ? "br" : "us"}
            value={valores.Telefone}
            onChange={(phone) => setValores({ ...valores, Telefone: phone })}
            className="international-phone-container"
            inputClassName={getInputClass("Telefone")}
            placeholder={dict.form.telefone}
            style={
              {
                // Removendo os estilos padrão da biblioteca para casar com o seu design
                "--react-international-phone-border-color": "transparent",
                "--react-international-phone-bg-color": "transparent",
                "--react-international-phone-text-color": "#FFFFFF",
                "--react-international-phone-font-size": "16px",
                "--react-international-phone-border-radius": "0px",
                "--react-international-phone-dropdown-item-bg-color": "#1A1A1A",
                "--react-international-phone-dropdown-bg-color": "#1A1A1A",
              } as React.CSSProperties
            }
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

      {/* CSS específico para forçar o estilo dark minimalista na biblioteca de telefone */}
      <style jsx global>{`
        /* 1. Alinha a bandeira e o input em uma única linha com a borda embaixo */
        .international-phone-container {
          display: flex;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: border-color 0.3s ease;
        }

        /* Hover/Focus na linha inteira */
        .international-phone-container:focus-within {
          border-bottom-color: #ffffff;
        }

        /* 2. Remove fundos e bordas individuais dos componentes internos */
        .international-phone-container
          .react-international-phone-country-selector-button,
        .international-phone-container .react-international-phone-input {
          background-color: transparent !important;
          border: none !important;
        }

        /* 3. Ajusta o campo onde os números são digitados */
        .international-phone-container .react-international-phone-input input {
          background-color: transparent !important;
          color: white !important;
          width: 100% !important;
          padding: 8px 0 8px 8px !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

        /* 4. CONSERTA O MENU SUSPENSO (Dropdown) */
        .international-phone-container
          .react-international-phone-country-selector-dropdown {
          background-color: #1a1a1a !important; /* Fundo escuro SÓLIDO para não misturar com o formulário */
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 4px;
          z-index: 50 !important; /* Força a lista a ficar por cima de tudo (textarea, labels) */
          margin-top: 4px !important;
        }

        /* Cores do texto dentro da lista de países */
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item-country-name {
          color: white !important;
        }
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item-dial-code {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Efeito de passar o mouse nos países */
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item:hover {
          background-color: #333333 !important;
        }

        /* Ajusta o fundo do país que está atualmente selecionado ou focado pelo teclado */
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item--focused,
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item--selected,
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item[aria-selected="true"] {
          background-color: #2a2a2a !important;
        }

        /* 5. CORRIGE O AUTOFILL DO NAVEGADOR (Fundo Azul) */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #1a1a1a inset !important;
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }

        /* Aplica a correção também para o input dentro do componente de telefone */
        .international-phone-container
          .react-international-phone-input
          input:-webkit-autofill,
        .international-phone-container
          .react-international-phone-input
          input:-webkit-autofill:hover,
        .international-phone-container
          .react-international-phone-input
          input:-webkit-autofill:focus,
        .international-phone-container
          .react-international-phone-input
          input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px transparent inset !important;
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
}

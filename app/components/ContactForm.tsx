"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

// Função para criar o schema passando o dicionário (dict) de traduções
const createFormSchema = (dict: any, lang: string) =>
  z.object({
    Nome: z.string().min(1, dict.form.err_req),
    Sobrenome: z.string().min(1, dict.form.err_req),
    Email: z.string().min(1, dict.form.err_req).email(dict.form.err_email),
    Telefone: z.string().min(lang === "pt" ? 10 : 7, dict.form.err_tel),
    Empresa: z.string().min(1, dict.form.err_req),
    Mensagem: z.string().min(10, dict.form.err_msg),
  });

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

  // Tipagem inferida diretamente do Zod
  const formSchema = createFormSchema(dict, lang);
  type FormDataSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormDataSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nome: "",
      Sobrenome: "",
      Email: "",
      Telefone: "",
      Empresa: "",
      Mensagem: "",
    },
  });

  const onSubmit = async (data: FormDataSchema) => {
    setStatus("loading");
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    try {
      const response = await fetch("/enviar.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("success");
        reset(); // Limpa o formulário automaticamente
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const getInputClass = (error?: any) =>
    `bg-transparent border-b py-2 text-brand-white focus:outline-none transition-all font-light w-full ${
      error
        ? "border-red-500 placeholder-red-400/50"
        : "border-white/20 focus:border-brand-white"
    }`;

  return (
    <div className="bg-surface border border-white/10 p-8 md:p-12 w-full max-w-xl relative overflow-hidden">
      <h2 className="font-sans font-medium text-2xl text-brand-white mb-8 text-center">
        {dict.form.titulo}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 relative z-10"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col relative">
            <input
              type="text"
              {...register("Nome")}
              placeholder={dict.form.nome}
              className={getInputClass(errors.Nome)}
            />
            {errors.Nome && (
              <span className="text-red-500 text-[10px] absolute -bottom-4">
                {errors.Nome.message}
              </span>
            )}
          </div>
          <div className="flex flex-col relative">
            <input
              type="text"
              {...register("Sobrenome")}
              placeholder={dict.form.sobrenome}
              className={getInputClass(errors.Sobrenome)}
            />
            {errors.Sobrenome && (
              <span className="text-red-500 text-[10px] absolute -bottom-4">
                {errors.Sobrenome.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col relative">
          <input
            type="email"
            {...register("Email")}
            placeholder={dict.form.email}
            className={getInputClass(errors.Email)}
          />
          {errors.Email && (
            <span className="text-red-500 text-[10px] absolute -bottom-4">
              {errors.Email.message}
            </span>
          )}
        </div>

        {/* COMPONENTE INTERNACIONAL CONTROLADO PELO REACT HOOK FORM */}
        <div className="flex flex-col relative">
          <Controller
            name="Telefone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                defaultCountry={lang === "pt" ? "br" : "us"}
                className="international-phone-container"
                inputClassName={getInputClass(errors.Telefone)}
                placeholder={dict.form.telefone}
              />
            )}
          />
          {errors.Telefone && (
            <span className="text-red-500 text-[10px] absolute -bottom-4">
              {errors.Telefone.message}
            </span>
          )}
        </div>

        <div className="flex flex-col relative">
          <input
            type="text"
            {...register("Empresa")}
            placeholder={dict.form.empresa}
            className={getInputClass(errors.Empresa)}
          />
          {errors.Empresa && (
            <span className="text-red-500 text-[10px] absolute -bottom-4">
              {errors.Empresa.message}
            </span>
          )}
        </div>

        <div className="flex flex-col relative mt-2">
          <textarea
            {...register("Mensagem")}
            placeholder={dict.form.mensagem}
            rows={3}
            className={`bg-[#262626]/50 border p-4 text-brand-white focus:outline-none transition-all font-light w-full ${
              errors.Mensagem
                ? "border-red-500 placeholder-red-400/50"
                : "border-white/10 focus:border-brand-white"
            }`}
          />
          {errors.Mensagem && (
            <span className="text-red-500 text-[10px] absolute -bottom-4">
              {errors.Mensagem.message}
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

      {/* CSS GLOBAL: Correções visuais da biblioteca e Autofill */}
      <style jsx global>{`
        /* 1. Alinha a bandeira e o input em uma única linha */
        .international-phone-container {
          display: flex;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: border-color 0.3s ease;

          --react-international-phone-text-color: white;
          --react-international-phone-font-size: 1rem;
        }

        .international-phone-container:focus-within {
          border-bottom-color: #ffffff;
        }

        /* 2. Remove fundos e bordas dos componentes internos */
        .international-phone-container
          .react-international-phone-country-selector-button,
        .international-phone-container .react-international-phone-input {
          background-color: transparent !important;
          border: none !important;
        }

        /* 3. Ajusta o campo de digitação */
        .international-phone-container .react-international-phone-input input,
        .international-phone-container
          .react-international-phone-input
          input:not(:-webkit-autofill) {
          background-color: transparent !important;
          color: white !important;
          font-size: 1rem !important;
          font-weight: 300 !important;
          width: 100% !important;
          padding: 8px 0 8px 8px !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          -webkit-text-fill-color: white !important;
        }

        .react-international-phone-text-color {
          color: white !important;
        }

        /* 4. Corrige o Dropdown (Z-index e cores) */
        .international-phone-container
          .react-international-phone-country-selector-dropdown {
          background-color: #1a1a1a !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 4px;
          z-index: 50 !important;
          margin-top: 4px !important;
        }

        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item-country-name {
          color: white !important;
        }
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item-dial-code {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item:hover {
          background-color: #333333 !important;
        }

        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item--focused,
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item--selected,
        .international-phone-container
          .react-international-phone-country-selector-dropdown__list-item[aria-selected="true"] {
          background-color: #2a2a2a !important;
        }

        /* 5. Corrige o Fundo Azul do Autofill (Chrome/Safari) */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #1a1a1a inset !important;
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
          font-size: 16px !important; /* Mantém o tamanho da fonte */
        }

        /* Correção ESPECÍFICA e AGRESSIVA para o input de telefone */
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
          -webkit-box-shadow: 0 0 0 30px #1a1a1a inset !important; /* Mudei para a cor do fundo para forçar a ocultação do azul */
          -webkit-text-fill-color: white !important;
          color: white !important;
          transition: background-color 5000s ease-in-out 0s;
          font-size: 16px !important; /* Força o tamanho da fonte a não diminuir */
          padding-left: 8px !important; /* Garante que não vai grudar na bandeira */
        }
      `}</style>
    </div>
  );
}

<div align="center">
  <img src="public/favicon.ico" alt="MS Financial Structure Logo" width="100" height="100" />
  
  # Michel Stawicki | MS Financial Structure
  
  **Consultoria e Estrutura Financeira Estratégica para Sustentar o Crescimento Empresarial.**
  
  <p align="center">
    <a href="https://msfinancialstructure.com">🌐 msfinancialstructure.com</a>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

---

## 📖 Sobre o Projeto

Este projeto é a presença digital oficial de **Michel Stawicki (MS Financial Structure)**, um experiente estrategista financeiro com mais de 30 anos de atuação. O site foi projetado para refletir a autoridade, disciplina e clareza que o consultor leva aos seus clientes B2B.

**O problema que resolve:**  
Empresas em fase de escala muitas vezes sofrem com gargalos de gestão financeira. O site funciona como a porta de entrada para que diretores e CEOs compreendam a metodologia de estruturação e entrem em contato para uma mentoria/consultoria B2B estratégica. 

A plataforma foi construída com foco absoluto em **Performance, Acessibilidade, Internacionalização e SEO Técnico**, garantindo a melhor experiência de usuário (UX) e conversão.

---

## ✨ Arquitetura e Features

O projeto foi desenvolvido sob a ótica de engenharia de software moderna, utilizando renderização estática avançada e otimizações de ponta.

- 🌍 **Internacionalização (i18n):** Suporte nativo para Português (`/pt`) e Inglês (`/en`), expandindo o alcance global.
- ⚡ **SSG (Static Site Generation):** Totalmente configurado para `output: export`, garantindo tempo de resposta na casa dos milissegundos e hospedagem distribuída (CDN).
- 🎨 **Estilização e Animações:** Interface fluida, premium e responsiva construída com Tailwind CSS e Framer Motion.
- 🔍 **SEO Técnico de Ponta:**
  - Geração dinâmica de `sitemap.xml` e `robots.txt` para rotas localizadas.
  - Implementação de metadados enriquecidos (OpenGraph, Twitter Cards).
  - Schema Markup (JSON-LD) para reconhecimento semântico no Google.
- 📊 **Analytics Avançado:** 
  - Integração limpa com **Google Analytics (Gtag)**.
  - Telemetria de comportamento (Heatmaps e Session Recording) com **Microsoft Clarity**.
- 🛠 **Validação e Formulários:** Uso inteligente de Zod e React Hook Form para manipulação segura de dados na ponta do cliente.

---

## 🚀 Como Rodar Localmente

Siga o passo a passo abaixo para rodar a aplicação no seu ambiente de desenvolvimento local.

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/en/) (Versão 18.17 ou superior recomendada)
- Git instalado na sua máquina

### 2. Clonando o Repositório
```bash
git clone https://github.com/seu-usuario/michel-stawicki-web.git
cd michel-stawicki-web
```

### 3. Configurando as Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto baseado no `.env.example`:
```bash
cp .env.example .env.local
```
*(Opcional: Preencha as chaves do Google Analytics e Microsoft Clarity, se necessário testar a telemetria).*

### 4. Instalando Dependências e Iniciando
```bash
# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

---

## 🏗 Scripts Disponíveis

- `npm run dev`: Inicia o servidor local com Fast Refresh.
- `npm run build`: Compila o projeto otimizado para produção.
- `npm run start`: Inicia o servidor de produção local.
- `npm run lint`: Executa a verificação estática de erros com ESLint.

---

<div align="center">
  <br />
  <p>
    Desenvolvido com dedicação para construir uma web mais rápida e acessível. ☕🚀
  </p>
</div>

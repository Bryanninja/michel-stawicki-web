// Arquivo: src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto_Serif } from "next/font/google";
import "../globals.css";
import ScrollToTop from "../components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configuração da Roboto Serif para os títulos imponentes
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  display: "swap",
  weight: ["100", "300", "400", "700"], // Pesos leves para elegância
});

export const metadata: Metadata = {
  title: "Michel Stawicki | Financial Structure",
  description:
    "Estrutura financeira para sustentar crescimento com disciplina, clareza e consistência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${robotoSerif.variable}`}>
      <body className="bg-brand-black text-brand-white font-sans antialiased selection:bg-brand-gray selection:text-brand-white">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

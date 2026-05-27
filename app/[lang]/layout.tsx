import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Serif } from "next/font/google";
import "../globals.css";
import ScrollToTop from "../components/ScrollToTop";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  display: "swap",
  weight: ["100", "300", "400", "700"],
});

// 1. METADATA MONSTRO (SEO TÉCNICO)
export const metadata: Metadata = {
  metadataBase: new URL("https://msfinancialstructure.com"), // Substitua pela URL real
  title: {
    default: "Michel Stawicki | MS Financial Structure",
    template: "%s | MS Financial Structure",
  },
  description:
    "Consultoria e estrutura financeira estratégica para sustentar crescimento empresarial com disciplina, clareza e consistência. Mais de 30 anos de experiência corporativa.",
  keywords: [
    "consultoria financeira empresarial",
    "gestão estratégica de finanças",
    "Michel Stawicki",
    "reestruturação de negócios",
    "mentoria financeira B2B",
    "planejamento financeiro para empresas",
  ],
  authors: [{ name: "Michel Stawicki" }],
  creator: "Albry Studio",

  // OpenGraph (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://msfinancialstructure.com",
    title: "Michel Stawicki | MS Financial Structure",
    description:
      "Estrutura financeira estratégica para sustentar o crescimento do seu negócio.",
    siteName: "MS Financial Structure",
    images: [
      {
        url: "/og-image.jpg", // Crie uma imagem 1200x630 premium e coloque na pasta public
        width: 1200,
        height: 630,
        alt: "Michel Stawicki - Financial Structure",
      },
    ],
  },

  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Michel Stawicki | MS Financial Structure",
    description:
      "Estrutura financeira estratégica para sustentar crescimento com clareza e consistência.",
    images: ["/og-image.jpg"],
  },

  // Favicons e Mobile
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Imagem 180x180 na public
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Configuração de Viewport para performance mobile
export const viewport: Viewport = {
  themeColor: "#0A0A0A", // Cor do seu brand-black
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. JSON-LD (DADOS ESTRUTURADOS) - O Google ama isso!
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MS Financial Structure",
    image: "https://msfinancialstructure.com/og-image.jpg",
    description:
      "Consultoria financeira estratégica liderada por Michel Stawicki.",
    url: "https://msfinancialstructure.com",
    founder: {
      "@type": "Person",
      name: "Michel Stawicki",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    serviceType: ["Financial Consulting", "Business Strategy"],
    sameAs: [
      "https://www.linkedin.com/in/michel-stawicki/", // Troque pela URL real dele
    ],
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${robotoSerif.variable}`}>
      <head>
        {/* Injeção do JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity (Heatmaps e Gravações de Sessão) */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
      </head>
      <body className="bg-brand-black text-brand-white font-sans antialiased selection:bg-brand-gray selection:text-brand-white">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

import { getDictionary } from "../../getDictionary";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function Termos({
  params,
}: {
  params: Promise<{ lang: "pt" | "en" }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="bg-brand-black min-h-screen pt-40 pb-32">
        <Container className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h1 className="font-sans font-medium text-4xl md:text-5xl text-brand-white mb-6 tracking-tight">
              {dict.termosPage.titulo1} <br />
              {dict.termosPage.titulo2}
            </h1>
            <p className="font-sans text-brand-white/50 text-sm mb-16">
              {dict.termosPage.atualizacao} {dict.termosPage.mes}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-16 font-sans text-brand-white/70 leading-relaxed">
              <section className="space-y-6">
                <h2 className="font-medium text-2xl text-brand-white border-b border-white/10 pb-4">
                  {dict.termosPage.secoes.t1}
                </h2>
                <div className="space-y-4">
                  <h3 className="font-medium text-brand-white">
                    {dict.termosPage.secoes.s1_1}
                  </h3>
                  <p>{dict.termosPage.secoes.p1_1}</p>
                  <h3 className="font-medium text-brand-white pt-4">
                    {dict.termosPage.secoes.s1_2}
                  </h3>
                  <p>{dict.termosPage.secoes.p1_2}</p>
                  <ul className="list-disc pl-6 space-y-2 text-brand-white/60">
                    <li>{dict.termosPage.secoes.l1_2_1}</li>
                    <li>{dict.termosPage.secoes.l1_2_2}</li>
                    <li>{dict.termosPage.secoes.l1_2_3}</li>
                    <li>{dict.termosPage.secoes.l1_2_4}</li>
                  </ul>
                  <h3 className="font-medium text-brand-white pt-4">
                    {dict.termosPage.secoes.s1_3}
                  </h3>
                  <p>{dict.termosPage.secoes.p1_3}</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-medium text-2xl text-brand-white border-b border-white/10 pb-4">
                  {dict.termosPage.secoes.t2}
                </h2>
                <div className="space-y-4">
                  <h3 className="font-medium text-brand-white">
                    {dict.termosPage.secoes.s2_1}
                  </h3>
                  <p>{dict.termosPage.secoes.p2_1}</p>
                  <h3 className="font-medium text-brand-white pt-4">
                    {dict.termosPage.secoes.s2_2}
                  </h3>
                  <p>{dict.termosPage.secoes.p2_2}</p>
                  <ul className="list-disc pl-6 space-y-2 text-brand-white/60">
                    <li>{dict.termosPage.secoes.l2_2_1}</li>
                    <li>{dict.termosPage.secoes.l2_2_2}</li>
                    <li>{dict.termosPage.secoes.l2_2_3}</li>
                  </ul>
                  <h3 className="font-medium text-brand-white pt-4">
                    {dict.termosPage.secoes.s2_3}
                  </h3>
                  <p>{dict.termosPage.secoes.p2_3}</p>
                  <h3 className="font-medium text-brand-white pt-4">
                    {dict.termosPage.secoes.s2_4}
                  </h3>
                  <p>{dict.termosPage.secoes.p2_4}</p>
                </div>
              </section>

              <section className="bg-surface p-8 border border-white/5 mt-12">
                <h3 className="font-medium text-brand-white mb-4">
                  {dict.termosPage.secoes.contato_t}
                </h3>
                <p className="text-sm">
                  {dict.termosPage.secoes.contato_p} <br />
                  <a
                    href="mailto:relacionamento@msfinancialstructure.com"
                    className="text-brand-white hover:underline mt-2 inline-block"
                  >
                    relacionamento@msfinancialstructure.com
                  </a>
                </p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";

export default function Termos() {
  const lastUpdate = "02 de Abril de 2026";

  return (
    <>
      <Header />
      <main className="bg-brand-black min-h-screen pt-40 pb-32">
        <Container className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h1 className="font-sans font-medium text-4xl md:text-5xl text-brand-white mb-6 tracking-tight">
              Termos de Uso e <br />
              Política de Privacidade
            </h1>
            <p className="font-sans text-brand-white/50 text-sm mb-16">
              Última atualização: {lastUpdate}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-16 font-sans text-brand-white/70 font-light leading-relaxed">
              {/* SEÇÃO 1: TERMOS DE USO */}
              <section className="space-y-6">
                <h2 className="font-medium text-2xl text-brand-white border-b border-white/10 pb-4">
                  1. Termos de Uso
                </h2>

                <div className="space-y-4">
                  <h3 className="font-medium text-brand-white">
                    1.1 Aceitação dos Termos
                  </h3>
                  <p>
                    Ao acessar e utilizar o site Michel Stawicki Financial
                    Structure, você concorda em cumprir estes termos de serviço,
                    todas as leis e regulamentos aplicáveis. Se você não
                    concordar com algum desses termos, está proibido de usar ou
                    acessar este site.
                  </p>

                  <h3 className="font-medium text-brand-white pt-4">
                    1.2 Uso de Licença
                  </h3>
                  <p>
                    É concedida permissão para baixar temporariamente uma cópia
                    dos materiais (informações ou software) neste site, apenas
                    para visualização transitória pessoal e não comercial. Esta
                    é a concessão de uma licença, não uma transferência de
                    título, e sob esta licença você não pode:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-brand-white/60">
                    <li>Modificar ou copiar os materiais;</li>
                    <li>
                      Usar os materiais para qualquer finalidade comercial ou
                      para exibição pública;
                    </li>
                    <li>
                      Tentar descompilar ou fazer engenharia reversa de qualquer
                      software contido no site;
                    </li>
                    <li>
                      Remover quaisquer direitos autorais ou outras notações de
                      propriedade dos materiais.
                    </li>
                  </ul>

                  <h3 className="font-medium text-brand-white pt-4">
                    1.3 Limitações
                  </h3>
                  <p>
                    Em nenhum caso a Michel Stawicki Financial Structure ou seus
                    fornecedores serão responsáveis por quaisquer danos
                    (incluindo, sem limitação, danos por perda de dados ou
                    lucro, ou devido a interrupção dos negócios) decorrentes do
                    uso ou da incapacidade de usar os materiais neste site.
                  </p>
                </div>
              </section>

              {/* SEÇÃO 2: POLÍTICA DE PRIVACIDADE */}
              <section className="space-y-6">
                <h2 className="font-medium text-2xl text-brand-white border-b border-white/10 pb-4">
                  2. Política de Privacidade
                </h2>

                <div className="space-y-4">
                  <h3 className="font-medium text-brand-white">
                    2.1 Coleta de Dados
                  </h3>
                  <p>
                    A sua privacidade é importante para nós. É política da
                    Michel Stawicki Financial Structure respeitar a sua
                    privacidade em relação a qualquer informação sua que
                    possamos coletar no site. Solicitamos informações pessoais,
                    como nome, e-mail e telefone, apenas quando realmente
                    precisamos delas para lhe fornecer um serviço (como no
                    agendamento da Conversa Estratégica).
                  </p>

                  <h3 className="font-medium text-brand-white pt-4">
                    2.2 Uso das Informações
                  </h3>
                  <p>
                    As informações coletadas são utilizadas exclusivamente para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-brand-white/60">
                    <li>
                      Entrar em contato para agendamento de reuniões e
                      consultorias;
                    </li>
                    <li>
                      Entender as necessidades da sua empresa para melhor
                      adequação dos nossos serviços;
                    </li>
                    <li>
                      Envio de comunicações estritamente relacionadas ao escopo
                      de atuação financeira.
                    </li>
                  </ul>

                  <h3 className="font-medium text-brand-white pt-4">
                    2.3 Compartilhamento de Dados
                  </h3>
                  <p>
                    Não compartilhamos informações de identificação pessoal
                    publicamente ou com terceiros, exceto quando exigido por
                    lei. Retemos as informações coletadas pelo tempo necessário
                    para fornecer o serviço solicitado.
                  </p>

                  <h3 className="font-medium text-brand-white pt-4">
                    2.4 Seus Direitos
                  </h3>
                  <p>
                    Você é livre para recusar a nossa solicitação de informações
                    pessoais, entendendo que talvez não possamos fornecer alguns
                    dos serviços desejados. O uso continuado de nosso site será
                    considerado como aceitação de nossas práticas em torno de
                    privacidade e informações pessoais.
                  </p>
                </div>
              </section>

              {/* CONTATO */}
              <section className="bg-surface p-8 border border-white/5 mt-12">
                <h3 className="font-medium text-brand-white mb-4">
                  Dúvidas sobre nossos Termos?
                </h3>
                <p className="text-sm">
                  Se você tiver alguma dúvida sobre como lidamos com dados do
                  usuário e informações pessoais, entre em contato conosco
                  através do e-mail: <br />
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
      <Footer />
    </>
  );
}

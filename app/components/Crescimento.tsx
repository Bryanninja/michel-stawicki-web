export default function Crescimento() {
  return (
    <section
      id="growth"
      className="bg-brand-black w-full py-24 border-b border-brand-gray/10"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-sans font-medium text-4xl md:text-5xl text-brand-white mb-6 tracking-tight">
            Crescimento exige estrutura.
          </h2>
          <p className="font-sans text-lg text-brand-white/70 leading-relaxed font-light">
            A partir de determinado momento de expansão, a empresa precisa de
            instrumentos que permitam sustentar operações capazes de absorver
            maior complexidade ao longo do tempo.
          </p>
        </div>

        {/* Grid de Imagens com Hover Effect Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Imagem 1 */}
          <div className="relative aspect-video md:aspect-[4/3] overflow-hidden group bg-brand-gray/10">
            <img
              src="/crescimento-1.jpg"
              alt="Painel Financeiro"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Overlay sutil para manter o tom dark */}
            <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Imagem 2 */}
          <div className="relative aspect-square md:aspect-[4/3] overflow-hidden group bg-brand-gray/10">
            <img
              src="/crescimento-2.jpg"
              alt="Michel Stawicki analisando dados"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Rodapé da Seção */}
        <div className="max-w-4xl">
          <p className="font-sans text-brand-white/80 leading-relaxed font-light text-lg">
            <strong className="text-brand-white font-medium">
              Michel Stawicki
            </strong>{" "}
            liderou transformações estruturais, dados de gestão, fusões e
            processos de reestruturação organizacional em negócios que queriam
            alcançar o próximo nível.
          </p>
        </div>
      </div>
    </section>
  );
}

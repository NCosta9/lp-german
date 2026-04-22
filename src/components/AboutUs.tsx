import teamPhoto from '../assets/foto-equipe.JPEG';

const highlights = [
  { label: 'Atendimento Internacional', icon: '🌎' },
  { label: 'Suporte do Início ao Fim', icon: '🤝' },
  { label: 'Rede de Parceiros no Brasil', icon: '🏢' },
  { label: 'Foco em Segurança e Transparência', icon: '🔒' },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 green-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div data-aos="fade-right">
            <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4 block">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Sobre a <span className="text-[#c9a84c]">German Capital</span>
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              A German Capital nasceu para ajudar brasileiros que vivem fora do país a investir no Brasil de forma simples, segura e rentável.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              Nosso objetivo é transformar oportunidades em ativos que geram renda, conectando nossos clientes a máquinas, caminhões e equipamentos com alta demanda no mercado brasileiro.
            </p>
            <p className="text-white/75 text-lg leading-relaxed">
              Além de ajudar na compra, nossa equipe oferece todo o suporte para colocar o equipamento em operação através de empresas parceiras e prefeituras, permitindo que o cliente acompanhe seu investimento mesmo morando no exterior.
            </p>

            <div className="mt-10 space-y-6">
              <img
                src={teamPhoto}
                alt="Equipe German Capital"
                className="w-full h-56 md:h-64 rounded-3xl object-cover object-center border border-white/10 shadow-2xl lg:hidden"
                data-aos="fade-up"
              />

              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full gold-bg-gradient flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0f2d1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#c9a84c] font-bold text-base mb-1">Nossa Missão</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Ser a ponte entre brasileiros no exterior e oportunidades reais de renda no Brasil, com segurança e transparência em cada operação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="space-y-4">
            <img
              src={teamPhoto}
              alt="Equipe German Capital"
              className="hidden w-full h-64 rounded-3xl object-cover object-center border border-white/10 shadow-2xl lg:block"
              data-aos="fade-left"
            />
            {highlights.map((item, i) => (
              <div
                key={i}
                data-aos="fade-left"
                data-aos-delay={i * 100}
                className="flex items-center gap-4 bg-white/6 backdrop-blur-sm border border-white/12 rounded-2xl px-5 py-4 hover:border-[#c9a84c]/50 transition-colors duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white/90 font-semibold text-sm md:text-base">{item.label}</span>
                <svg
                  className="w-5 h-5 text-[#c9a84c] ml-auto flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: '01',
    title: 'Você fala com um especialista',
    description: 'Agende uma conversa gratuita. Entendemos seu perfil, capital disponível e objetivos de investimento.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Escolhemos o maquinário ideal',
    description: 'Nossa equipe analisa o mercado e indica o equipamento com melhor potencial de retorno para seu perfil.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Cuidamos da documentação e compra',
    description: 'Gerenciamos toda a burocracia: contrato, nota fiscal, documentação e entrega. Você não precisa estar no Brasil.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Sua máquina começa a trabalhar',
    description: 'Conectamos seu equipamento à nossa rede de parceiros e prefeituras. Você acompanha tudo de onde estiver.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-3 block">
            O Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d1e] mb-4">
            Como Funciona em <span className="text-[#c9a84c]">4 Passos</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Simples, seguro e totalmente gerenciado pela German Capital.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[75%] h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full gold-bg-gradient flex items-center justify-center text-[#0f2d1e] shadow-lg shadow-[#c9a84c]/30">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0f2d1e] flex items-center justify-center">
                    <span className="text-[#c9a84c] text-[10px] font-bold">{step.number}</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full card-hover">
                  <h3 className="text-[#0f2d1e] font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-14 text-center"
        >
          <button
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="gold-bg-gradient text-[#0f2d1e] font-bold px-10 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg cursor-pointer"
          >
            Começar Agora — É Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}

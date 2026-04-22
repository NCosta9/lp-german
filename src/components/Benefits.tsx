const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Renda Recorrente',
    text: 'Seu maquinário trabalha todos os meses gerando receita de arrendamento sem você precisar intervir.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Ativo Físico no Brasil',
    text: 'Você tem um bem real, registrado em seu nome, com valor patrimonial e histórico de uso.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Baixa Burocracia',
    text: 'A German Capital resolve toda a parte documental e jurídica. Você assina o mínimo necessário.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: 'Gestão Simplificada',
    text: 'Acompanhe seu investimento de qualquer lugar do mundo com atualizações periódicas da nossa equipe.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Valorização do Ativo',
    text: 'Máquinas bem mantidas retêm valor. Em momentos de alta do dólar, seu ativo se valoriza em reais.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Suporte Completo',
    text: 'Da escolha à operação, nossa equipe está com você em cada etapa. Transparência do início ao fim.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-3 block">
            Vantagens
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d1e] mb-4">
            Por Que Brasileiros no Exterior Estão
            <br />
            <span className="text-[#c9a84c]">Escolhendo Esse Tipo de Investimento</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Um modelo de investimento sólido, com ativo real e operação gerenciada por especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group flex gap-5 bg-neutral-50 rounded-2xl p-6 border border-gray-100 hover:border-[#c9a84c]/40 hover:bg-white transition-all duration-300 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-[#1a4731]/10 text-[#1a4731] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c] group-hover:text-[#0f2d1e] transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[#0f2d1e] font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

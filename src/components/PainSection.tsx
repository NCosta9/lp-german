import tractorCutoutImage from '../assets/maquinas/satlight-linha-verde-trator.png';

const pains = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Barreira de distância',
    text: 'Investir no Brasil morando fora parece complicado, cheio de burocracia e sem suporte.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Imóveis exigem demais',
    text: 'Manutenção, inquilinos problemáticos, impostos e gestão à distância consomem seu tempo e dinheiro.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    title: 'Dinheiro parado perde valor',
    text: 'Conta corrente rende pouco. Com a inflação e câmbio, seu poder de compra diminui a cada mês.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Falta de tempo e gestão',
    text: 'Você não tem tempo para acompanhar investimentos à distância sem um parceiro confiável no Brasil.',
  },
];

export default function PainSection() {
  return (
    <section className="relative py-20 bg-neutral-50 overflow-hidden">
      <img
        src={tractorCutoutImage}
        alt="Trator"
        data-aos="zoom-in"
        data-aos-duration="900"
        data-aos-anchor-placement="top-bottom"
        className="hidden md:block pointer-events-none select-none absolute top-16 -left-10 w-[360px] lg:w-[520px] opacity-95 drop-shadow-[0_30px_55px_rgba(0,0,0,0.22)]"
        style={{
          transform: 'perspective(1100px) rotateY(14deg)',
          transformOrigin: 'left center',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-3 block">
            O Problema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d1e] leading-tight mb-4">
            Seu dinheiro parado no exterior
            <br />
            <span className="text-[#c9a84c]">pode estar perdendo valor</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Muitos brasileiros no exterior acumulam capital mas não sabem como fazê-lo gerar renda de forma segura no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pains.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-400 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#0f2d1e] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="green-gradient rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <div className="text-[#c9a84c] text-4xl mb-4">💡</div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
            A solução não é comprar qualquer bem.
          </h3>
          <p className="text-white/80 text-lg leading-relaxed">
            É comprar <strong className="text-[#c9a84c]">um ativo que trabalha</strong> enquanto você mora no exterior — gerando renda real, sem precisar estar presente.
          </p>
        </div>
      </div>
    </section>
  );
}

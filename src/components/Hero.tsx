import { useEffect } from 'react';
import AOS from 'aos';
import heroMachineryImage from '../assets/hero-machinery.webp';

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    text: 'Atendimento para brasileiros nos EUA e Europa',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Maquinários a partir de parcelas acessíveis',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Suporte completo até gerar renda',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: 'Parcerias com empresas e prefeituras',
  },
];

export default function Hero() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroMachineryImage}
          alt="Maquinário agrícola em operação"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0f2d1e]/60" />
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{
          background: 'radial-gradient(ellipse at top right, #c9a84c 0%, transparent 60%)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#c9a84c]/40 rounded-full px-4 py-1.5 mb-6 mt-15"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
              Para brasileiros no exterior
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Transforme Maquinários no Brasil em{' '}
            <span className="gold-gradient">Fonte de Renda</span>,{' '}
            Mesmo Morando no Exterior
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Invista em máquinas agrícolas, construção civil ou caminhões e deixe sua máquina trabalhando para você no Brasil. A German Capital cuida de toda a compra, documentação e arrendamento.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <button
              onClick={scrollToForm}
              className="gold-bg-gradient text-[#0f2d1e] font-bold px-8 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all duration-200 shadow-2xl cursor-pointer"
            >
              Quero Descobrir Quanto Posso Ganhar
            </button>
            <button
              onClick={scrollToContact}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Falar com um Especialista
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
              >
                <span className="text-[#c9a84c] flex-shrink-0">{item.icon}</span>
                <span className="text-white/90 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default function CTAFinal() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 green-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ background: '#c9a84c', filter: 'blur(80px)', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ background: '#c9a84c', filter: 'blur(80px)', transform: 'translate(50%, 50%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div data-aos="fade-up">
          <span className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
              Vagas Limitadas
            </span>
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Quanto mais cedo sua máquina começar a trabalhar,{' '}
            <span className="text-[#c9a84c]">mais cedo ela começa a gerar renda.</span>
          </h2>

          <p className="text-white/75 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale agora com um especialista da German Capital e descubra como investir no Brasil sem precisar voltar ao país.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="gold-bg-gradient text-[#0f2d1e] font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 active:scale-95 transition-all duration-200 shadow-2xl shadow-[#c9a84c]/20 cursor-pointer"
            >
              Quero Minha Simulação Agora
            </button>
            <button
              onClick={scrollToForm}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-white/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Falar com Especialista
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: '🔒', text: 'Investimento seguro e transparente' },
              { icon: '📞', text: 'Atendimento em português' },
              { icon: '🌎', text: '100% remoto — sem sair do país' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/8 rounded-xl px-4 py-3 border border-white/10"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white/80 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'Carlos Mendonça',
    location: 'Orlando, Estados Unidos',
    flag: '🇺🇸',
    investment: 'Caminhão — Frota Logística',
    avatar: 'CM',
    text: 'Estava há anos procurando uma forma de investir no Brasil sem precisar estar lá. A German Capital me apresentou o modelo de arrendamento de caminhões e foi incrível. Todo o processo foi feito remotamente, e hoje recebo meu retorno mensalmente. Me sinto seguro sabendo que tem uma equipe cuidando de tudo.',
    stars: 5,
  },
  {
    name: 'Rodrigo Alves',
    location: 'Porto, Portugal',
    flag: '🇵🇹',
    investment: 'Retroescavadeira — Obras Municipais',
    avatar: 'RA',
    text: 'Investi em uma retroescavadeira que está sendo locada por uma prefeitura no interior do Brasil. A German Capital cuidou de tudo: compra, documentação e contrato de locação. Nunca precisei ir ao Brasil. A tranquilidade de ter um parceiro confiável não tem preço.',
    stars: 5,
  },
  {
    name: 'Paulo Ferreira',
    location: 'Frankfurt, Alemanha',
    flag: '🇩🇪',
    investment: 'Colheitadeira — Cooperativa Agrícola',
    avatar: 'PF',
    text: 'A decisão de investir em uma máquina agrícola com a German Capital foi a melhor que tomei. A demanda no Brasil por maquinário é enorme, e o suporte que recebi durante todo o processo foi excepcional. Hoje tenho renda em reais e em euro, o que faz muita diferença para minha família.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-3 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d1e] mb-4">
            Quem Mora Fora Já Está
            <br />
            <span className="text-[#c9a84c]">Investindo Assim</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Brasileiros no exterior que escolheram investir em maquinários com a German Capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.stars }).map((_, si) => (
                  <svg key={si} className="w-5 h-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow italic">
                "{item.text}"
              </p>

              <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full green-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#0f2d1e] font-bold text-sm">{item.name}</p>
                    <span className="text-base">{item.flag}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{item.location}</p>
                  <span className="text-[#c9a84c] text-xs font-semibold">{item.investment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '100%', label: 'Operação Remota' },
            { value: 'EUA + EU', label: 'Atendimento Internacional' },
            { value: '4 Passos', label: 'Processo Simplificado' },
            { value: 'Alta', label: 'Demanda no Brasil' },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#c9a84c] mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

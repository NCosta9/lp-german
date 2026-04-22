import agriculturalImage from '../assets/agricultural.webp';
import constructionMachineryImage from '../assets/construction-machinery.webp';
import trucksImage from '../assets/trucks.webp';

const solutions = [
  {
    image: agriculturalImage,
    title: 'Máquinas Agrícolas',
    investment: 'A partir de R$ 180.000',
    usage: 'Arrendamento para cooperativas e fazendas',
    demand: 'Alta — colheitas safra e entressafra',
    icon: '🌾',
  },
  {
    image: constructionMachineryImage,
    title: 'Construção Civil',
    investment: 'A partir de R$ 150.000',
    usage: 'Locação para construtoras e prefeituras',
    demand: 'Alta — obras públicas e privadas',
    icon: '🏗️',
  },
  {
    image: trucksImage,
    title: 'Caminhões',
    investment: 'A partir de R$ 200.000',
    usage: 'Locação para transportadoras e agro',
    demand: 'Alta — logística em crescimento',
    icon: '🚛',
  },
];

export default function SolutionSection() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-3 block">
            A Solução
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d1e] leading-tight mb-4">
            Você não compra apenas uma máquina.
            <br />
            <span className="text-[#c9a84c]">Você compra uma fonte de renda.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Uma máquina parada é custo. Uma máquina trabalhando é faturamento. Com a German Capital, você investe no maquinário certo e nós conectamos sua máquina a empresas e prefeituras que precisam dela.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg card-hover group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d1e]/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-[#c9a84c] text-[#0f2d1e] text-xs font-bold px-3 py-1 rounded-full">
                  Alta Demanda
                </div>
                <div className="absolute bottom-4 left-4 text-3xl">{item.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-[#0f2d1e] text-xl font-bold mb-4">{item.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#c9a84c] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Investimento</p>
                      <p className="text-[#0f2d1e] font-semibold text-sm">{item.investment}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#c9a84c] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Tipo de Locação</p>
                      <p className="text-[#0f2d1e] font-semibold text-sm">{item.usage}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#c9a84c] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Demanda</p>
                      <p className="text-[#0f2d1e] font-semibold text-sm">{item.demand}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={scrollToForm}
                  className="mt-6 w-full border-2 border-[#1a4731] text-[#1a4731] font-bold py-2.5 rounded-xl hover:bg-[#1a4731] hover:text-white transition-all duration-200 text-sm cursor-pointer"
                >
                  Quero Simular
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

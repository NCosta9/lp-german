import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoHorizontal from '../assets/logo/logo-horizontal.png';
import bulldozerImage from '../assets/maquinas/—Pngtree—powerful bulldozers in action heavy_20551952.png';

const WEBHOOK_URL = 'https://n8n.promovaonline.com.br/webhook/leads-rd-german';

interface FormData {
  name: string;
  whatsapp: string;
  email: string;
  country: string;
  machineType: string;
  investmentRange: string;
  monthlyPayment: string;
}

function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_medium: params.get('utm_medium') || '',
    fbclid: params.get('fbclid') || '',
  };
}

const steps = [
  { id: 1, question: 'Qual é o seu nome?', field: 'name' as keyof FormData, type: 'text', placeholder: 'Seu nome completo' },
  { id: 2, question: 'Qual o seu WhatsApp?', field: 'whatsapp' as keyof FormData, type: 'tel', placeholder: '+1 (555) 000-0000' },
  { id: 3, question: 'Qual o seu e-mail?', field: 'email' as keyof FormData, type: 'email', placeholder: 'seu@email.com' },
  { id: 4, question: 'Em qual país você mora?', field: 'country' as keyof FormData, type: 'select', options: [
    'Estados Unidos', 'Portugal', 'Alemanha', 'Reino Unido', 'Itália', 'Espanha', 'França', 'Suíça', 'Outros'
  ]},
  { id: 5, question: 'O que deseja investir?', field: 'machineType' as keyof FormData, type: 'cards', options: [
    { value: 'agricola', label: 'Máquina Agrícola', icon: '🌾' },
    { value: 'construcao', label: 'Construção Civil', icon: '🏗️' },
    { value: 'caminhao', label: 'Caminhão', icon: '🚛' },
  ]},
  { id: 6, question: 'Quanto pretende investir?', field: 'investmentRange' as keyof FormData, type: 'cards', options: [
    { value: '150k-300k', label: 'R$ 150k – R$ 300k', icon: '💼' },
    { value: '300k-600k', label: 'R$ 300k – R$ 600k', icon: '📈' },
    { value: '600k+', label: 'Acima de R$ 600k', icon: '🏆' },
  ]},
  { id: 7, question: 'Quanto gostaria de pagar por mês?', field: 'monthlyPayment' as keyof FormData, type: 'cards', options: [
    { value: 'ate-5k', label: 'Até R$ 5.000', icon: '💰' },
    { value: '5k-15k', label: 'R$ 5k – R$ 15k', icon: '💵' },
    { value: '15k+', label: 'Acima de R$ 15k', icon: '🏦' },
  ]},
];

export default function LeadForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '', whatsapp: '', email: '', country: '',
    machineType: '', investmentRange: '', monthlyPayment: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentStep > 0 && currentStep <= steps.length) {
      const input = document.getElementById('step-input');
      if (input) input.focus();
    }
  }, [currentStep]);

  const currentStepData = steps[currentStep - 1];

  const handleNext = () => {
    if (!currentStepData) return;
    if (loading) return;
    const field = currentStepData.field;
    if (!formData[field]) {
      setError('Por favor, preencha este campo para continuar.');
      return;
    }
    setError('');
    setCurrentStep((s) => s + 1);
  };

  const handleCardSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, [currentStepData.field]: value }));
    setError('');
    setTimeout(() => {
      if (currentStep < steps.length) {
        setCurrentStep((s) => s + 1);
      }
    }, 300);
  };

  const handleSubmit = async (lastValue?: string) => {
    setError('');
    const payload = {
      ...formData,
      ...(lastValue ? { [currentStepData.field]: lastValue } : {}),
      origem: 'german-capital-lp',
      ...getUTMParams(),
      site_url: window.location.href,
      page_url: window.location.href,
      page_origin: window.location.origin,
      page_path: window.location.pathname,
      referrer: document.referrer || '',
      user_agent: navigator.userAgent,
      language: navigator.language,
      timestamp: new Date().toISOString(),
    };

    setLoading(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Webhook error: ${res.status}`);
      }
      navigate('/obrigado', { replace: true });
    } catch {
      setError('Não foi possível enviar seus dados agora. Tente novamente em alguns instantes.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleNext();
  };

  const progress = ((currentStep) / steps.length) * 100;

  return (
    <section id="lead-form" className="relative py-20 bg-neutral-50 overflow-hidden">
      <img
        src={bulldozerImage}
        alt="Bulldozers em ação"
        data-aos="zoom-in"
        data-aos-duration="900"
        data-aos-anchor-placement="top-bottom"
        className="hidden md:block pointer-events-none select-none absolute inset-y-0 right-0 h-full w-auto opacity-95 drop-shadow-[0_30px_55px_rgba(0,0,0,0.22)]"
        style={{
          transform: 'perspective(1100px) rotateY(-18deg) translateX(18%)',
          transformOrigin: 'right top',
        }}
      />
      <div className="max-w-2xl mx-auto px-6">
        <img
          src={logoHorizontal}
          alt="German Capital"
          className="h-28 w-auto object-contain mx-auto mb-10"
          data-aos="fade-up"
        />
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-3 block">
            Simulação Gratuita
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d1e] mb-3">
            Descubra Qual Maquinário Faz
            <br />
            <span className="text-[#c9a84c]">Mais Sentido Para Você</span>
          </h2>
          <p className="text-gray-500">
            Responda {steps.length} perguntas rápidas e receba uma simulação personalizada.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="h-1.5 bg-gray-100">
            <div
              className="h-full gold-bg-gradient transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 font-medium">
                {currentStep === 0 ? 'Começando...' : `Passo ${currentStep} de ${steps.length}`}
              </span>
              <span className="text-xs text-[#c9a84c] font-bold">
                {Math.round(progress)}%
              </span>
            </div>

            {currentStep === 0 && (
              <div className="py-6 text-center">
                <div className="text-6xl mb-6">🚜</div>
                <h3 className="text-2xl font-bold text-[#0f2d1e] mb-3">
                  Pronto para descobrir sua simulação?
                </h3>
                <p className="text-gray-500 mb-8">
                  Em menos de 2 minutos, nossos especialistas vão montar uma proposta personalizada para você.
                </p>
                {error && <p className="text-red-400 text-sm mb-5">{error}</p>}
                <button
                  onClick={() => setCurrentStep(1)}
                  disabled={loading}
                  className="gold-bg-gradient text-[#0f2d1e] font-bold px-10 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg disabled:opacity-70 cursor-pointer"
                >
                  {loading ? 'Enviando...' : 'Iniciar Simulação Gratuita'}
                </button>
              </div>
            )}

            {currentStep > 0 && currentStep <= steps.length && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0f2d1e] mb-6 mt-4">
                  {currentStepData.question}
                </h3>

                {(currentStepData.type === 'text' || currentStepData.type === 'email' || currentStepData.type === 'tel') && (
                  <div>
                    <input
                      id="step-input"
                      type={currentStepData.type}
                      placeholder={currentStepData.placeholder}
                      value={formData[currentStepData.field]}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, [currentStepData.field]: e.target.value }));
                        setError('');
                      }}
                      onKeyDown={handleKeyDown}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-[#0f2d1e] text-base focus:outline-none focus:border-[#1a4731] transition-colors duration-200 placeholder:text-gray-300"
                    />
                    {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                    <button
                      onClick={handleNext}
                      disabled={loading}
                      className="mt-5 gold-bg-gradient text-[#0f2d1e] font-bold px-8 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 disabled:opacity-70 cursor-pointer"
                    >
                      Continuar →
                    </button>
                  </div>
                )}

                {currentStepData.type === 'select' && (
                  <div>
                    <select
                      id="step-input"
                      value={formData[currentStepData.field]}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, [currentStepData.field]: e.target.value }));
                        setError('');
                      }}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-[#0f2d1e] text-base focus:outline-none focus:border-[#1a4731] transition-colors duration-200 bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Selecione seu país...</option>
                      {currentStepData.options?.map((opt) => (
                        typeof opt === 'string' ? (
                          <option key={opt} value={opt}>{opt}</option>
                        ) : null
                      ))}
                    </select>
                    {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                    <button
                      onClick={handleNext}
                      disabled={loading}
                      className="mt-5 gold-bg-gradient text-[#0f2d1e] font-bold px-8 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 disabled:opacity-70 cursor-pointer"
                    >
                      Continuar →
                    </button>
                  </div>
                )}

                {currentStepData.type === 'cards' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {currentStepData.options?.map((opt) => {
                      if (typeof opt === 'string') return null;
                      const isSelected = formData[currentStepData.field] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleCardSelect(opt.value)}
                          className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer active:scale-95 ${
                            isSelected
                              ? 'border-[#c9a84c] bg-[#c9a84c]/10 text-[#0f2d1e]'
                              : 'border-gray-200 hover:border-[#1a4731] hover:bg-[#1a4731]/5 text-gray-600'
                          }`}
                        >
                          <span className="text-3xl">{opt.icon}</span>
                          <span className="font-semibold text-sm text-center">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {currentStep === steps.length && (
              <div className="py-4 text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-[#0f2d1e] mb-3">
                  Tudo pronto!
                </h3>
                <p className="text-gray-500 mb-6">
                  Clique abaixo para receber sua simulação personalizada.
                </p>
                {error && <p className="text-red-400 text-sm mb-5">{error}</p>}
                <button
                  onClick={() => handleSubmit()}
                  disabled={loading || !formData.monthlyPayment}
                  className="gold-bg-gradient text-[#0f2d1e] font-bold px-10 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg disabled:opacity-70 cursor-pointer"
                >
                  {loading ? 'Enviando...' : 'Receber Minha Simulação'}
                </button>
              </div>
            )}

            {currentStep > 0 && currentStep < steps.length && (
              <button
                onClick={() => { setCurrentStep((s) => s - 1); setError(''); }}
                className="mt-4 text-gray-400 text-sm hover:text-gray-600 transition-colors duration-200 cursor-pointer flex items-center gap-1"
              >
                ← Voltar
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          Seus dados estão seguros. Não compartilhamos informações com terceiros.
        </p>
      </div>
    </section>
  );
}

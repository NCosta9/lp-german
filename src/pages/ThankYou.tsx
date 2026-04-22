import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoHorizontal from '../assets/logo/logo-horizontal.png';

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen green-gradient flex items-center">
      <div className="w-full max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-3xl p-8 md:p-12 shadow-2xl">
          <img
            src={logoHorizontal}
            alt="German Capital"
            className="h-20 md:h-24 w-auto object-contain mx-auto"
          />

          <div className="mt-10 text-center">
            <div className="w-16 h-16 rounded-full gold-bg-gradient flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-8 h-8 text-[#0f2d1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
              Obrigado! Recebemos sua solicitação.
            </h1>

            <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed">
              Um especialista entrará em contato em breve para apresentar uma simulação alinhada ao seu perfil.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Confirmação', desc: 'Seus dados foram enviados com sucesso.' },
              { title: 'Contato', desc: 'Nossa equipe fala com você por WhatsApp e e-mail.' },
              { title: 'Próximo passo', desc: 'Você recebe uma proposta personalizada.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/6 border border-white/10 rounded-2xl px-5 py-4"
              >
                <p className="text-[#c9a84c] font-bold text-sm">{item.title}</p>
                <p className="mt-1 text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="gold-bg-gradient text-[#0f2d1e] font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all duration-200 text-center"
            >
              Voltar para o Site
            </Link>
          </div>

          <p className="mt-8 text-center text-white/45 text-xs">
            Se você não receber retorno em até 24 horas, verifique sua caixa de spam ou o WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}

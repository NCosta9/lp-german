export default function Footer() {
  return (
    <footer className="bg-[#0a1f13] text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <img src="/gc-logo-mark.webp" alt="German Capital" className="h-10 w-10 object-contain" />
            <div>
              <span className="text-white font-bold text-lg tracking-wide leading-none block">
                German <span className="text-[#c9a84c]">Capital</span>
              </span>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase leading-none">
                International Investments
              </span>
            </div>
          </div>

          <p className="text-sm text-center md:text-right max-w-sm">
            Conectando brasileiros no exterior a oportunidades reais de investimento no Brasil.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center md:text-left">
            © {new Date().getFullYear()} German Capital. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <span>Atendimento para EUA e Europa</span>
            <span className="text-[#c9a84c]">|</span>
            <span>Investimentos seguros no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

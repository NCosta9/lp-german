import { useState, useEffect } from 'react';
import logoHorizontal from '../assets/logo/logo-horizontal.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f2d1e] shadow-2xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logoHorizontal}
            alt="German Capital"
            className="h-28 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            ['Como Funciona', 'how-it-works'],
            ['Maquinários', 'solution'],
            ['Benefícios', 'benefits'],
            ['Sobre Nós', 'about'],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white/80 hover:text-[#c9a84c] text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('lead-form')}
            className="gold-bg-gradient text-[#0f2d1e] font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Falar com Especialista
          </button>
        </div>

        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f2d1e] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {[
            ['Como Funciona', 'how-it-works'],
            ['Maquinários', 'solution'],
            ['Benefícios', 'benefits'],
            ['Sobre Nós', 'about'],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white/80 hover:text-[#c9a84c] text-sm font-medium text-left transition-colors duration-200 cursor-pointer"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('lead-form')}
            className="gold-bg-gradient text-[#0f2d1e] font-bold text-sm px-5 py-2.5 rounded-full w-full cursor-pointer"
          >
            Falar com Especialista
          </button>
        </div>
      )}
    </nav>
  );
}

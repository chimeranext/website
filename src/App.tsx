import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuienesSomos } from './components/QuienesSomos';
import { ServiciosSection } from './components/ServiciosSection';
import { VenturesSection } from './components/VenturesSection';
import { AllianceBanner } from './components/AllianceBanner';
import { ContactoSection } from './components/ContactoSection';
import { Footer } from './components/Footer';
import { Sun, Moon, ArrowUp } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeSection, setActiveSection] = useState('inicio');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark class on html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  // Handle scroll detection for active navbar link and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setShowScrollTop(window.scrollY > 400);

      const sections = ['inicio', 'quienes-somos', 'servicios', 'ventures', 'contacto'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    handleNavigate('contacto');
  };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-[#10131c] text-white'
          : 'bg-white text-slate-800'
      }`}
    >
      {/* Top Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      <main className="w-full pt-20">
        {/* Hero Section with Telemetry Monitor and Stats */}
        <Hero
          theme={theme}
          onExploreVentures={() => handleNavigate('ventures')}
          onOpenBooking={handleOpenBooking}
        />

        {/* Quiénes Somos: Venture Studio & Shared Services Architecture */}
        <QuienesSomos
          theme={theme}
          onOpenBooking={handleOpenBooking}
        />

        {/* Servicios Compartidos & Microservicios */}
        <ServiciosSection
          theme={theme}
          onOpenBooking={handleOpenBooking}
        />

        {/* Portafolio de Ventures en Producción */}
        <VenturesSection
          theme={theme}
          onOpenBooking={handleOpenBooking}
        />

        {/* Banner de Alianza Estratégica 2025 */}
        <AllianceBanner
          theme={theme}
          onInitiateConfidential={() => handleNavigate('contacto')}
        />

        {/* Contacto & Agendamiento Cal.com */}
        <ContactoSection
          theme={theme}
        />
      </main>

      {/* Institutional Footer */}
      <Footer theme={theme} />

      {/* Floating Theme Quick Switcher & Back to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Volver al inicio"
            className={`p-3 rounded-full border shadow-lg transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-[#181b25] border-white/10 text-white hover:bg-[#272a34]'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating Quick Mode Badge */}
        <button
          onClick={handleToggleTheme}
          title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
          className={`px-3.5 py-2 rounded-full border shadow-xl flex items-center gap-2 text-xs font-grotesk font-semibold transition-all cursor-pointer ${
            theme === 'dark'
              ? 'bg-[#181b25]/95 border-amber-500/30 text-amber-400 hover:bg-[#1c1f29]'
              : 'bg-white/95 border-slate-300 text-slate-800 hover:bg-slate-50'
          }`}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Tema: Dark (Sovereign)</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-slate-700" />
              <span>Tema: Light (Corporate)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

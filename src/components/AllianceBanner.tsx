import React from 'react';
import { ThemeMode } from '../types';
import { Lock } from 'lucide-react';

interface AllianceBannerProps {
  theme: ThemeMode;
  onInitiateConfidential: () => void;
}

export const AllianceBanner: React.FC<AllianceBannerProps> = ({
  theme,
  onInitiateConfidential
}) => {
  const isDark = theme === 'dark';

  return (
    <section className="w-full px-6 lg:px-12 py-8">
      <div
        className={`max-w-7xl mx-auto relative rounded-2xl overflow-hidden p-8 lg:p-12 shadow-2xl transition-all ${
          isDark
            ? 'bg-gradient-to-r from-purple-950 via-[#131b2e] to-blue-950 border border-white/10'
            : 'bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-950 text-white'
        }`}
      >
        {/* Glow decoration */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-2xl text-center md:text-left">
            <span className="text-xs font-grotesk text-amber-400 uppercase tracking-widest font-bold">
              ALIANZA ESTRATÉGICA 2025
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-jakarta">
              ¿Tienes una idea transformadora o buscas potenciar tu infraestructura técnica?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-jakarta">
              Evaluamos oportunidades selectas de co-creación y contratos de servicios compartidos con fundadores institucionales.
            </p>
          </div>

          <button
            onClick={onInitiateConfidential}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold font-jakarta bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3.5 rounded-lg transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)] active:scale-[0.98] cursor-pointer"
          >
            <Lock className="w-4 h-4 text-slate-950" />
            <span>Iniciar Conversación Confidencial</span>
          </button>
        </div>
      </div>
    </section>
  );
};

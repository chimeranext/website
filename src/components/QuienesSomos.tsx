import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { TrendingUp, Scale, Rocket, Check, X, ArrowUpRight } from 'lucide-react';

interface QuienesSomosProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

export const QuienesSomos: React.FC<QuienesSomosProps> = ({
  theme,
  onOpenBooking
}) => {
  const isDark = theme === 'dark';
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section
      id="quienes-somos"
      className={`w-full py-20 lg:py-28 transition-colors duration-200 border-t ${
        isDark
          ? 'bg-[#10131c] border-white/5'
          : 'bg-slate-50 border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col max-w-3xl gap-2.5">
            <span
              className={`text-xs font-grotesk font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit border ${
                isDark
                  ? 'text-purple-300 bg-purple-500/10 border-purple-500/30'
                  : 'text-purple-700 bg-purple-50 border-purple-200'
              }`}
            >
              VENTURE STUDIO &amp; SHARED SERVICES
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight font-jakarta ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Una ventaja competitiva injusta para fundadores e innovadores corporativos.
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed mt-1 font-jakarta ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              ChimeraNext Shared Services LLC no es solo una aceleradora o agencia tradicional. Operamos como co-fundadores técnicos e infraestructura central compartida: aportamos capital intelectual, stacks probados y despliegue instantáneo para erradicar el riesgo técnico y de ejecución.
            </p>
          </div>

          <button
            onClick={() => setShowComparison(!showComparison)}
            className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-grotesk font-semibold px-4 py-2.5 rounded-lg border transition-all cursor-pointer ${
              isDark
                ? 'bg-[#1c1f29] border-white/10 text-slate-300 hover:text-white hover:bg-[#272a34]'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-xs'
            }`}
          >
            <span>{showComparison ? 'Ocultar Comparativa' : 'Ver Matriz Comparativa'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Co-founder vs Agency Matrix Interactive Drawer */}
        {showComparison && (
          <div
            className={`rounded-2xl p-6 border shadow-xl transition-all ${
              isDark ? 'bg-[#181b25] border-white/10' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h4 className="text-base font-bold font-jakarta text-amber-400">
                Modelo Tradicional vs. ChimeraNext Shared Services
              </h4>
              <button
                onClick={() => setShowComparison(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Cerrar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs font-jakarta">
              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <span className="font-grotesk font-bold text-red-400 block mb-2">AGENCIA DE SOFTWARE</span>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-1.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Cobro por hora/proyecto sin skin-in-the-game</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Código monolítico desechable que debe reescribirse</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Cero alineación con rondas institucionales de inversión</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-500/5 border border-slate-500/20">
                <span className="font-grotesk font-bold text-slate-400 block mb-2">ACELERADORA CLÁSICA</span>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 shrink-0 font-bold">•</span>
                    <span>Mentorías teóricas semanales de 45 minutos</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Sin infraestructura técnica compartida ni ingenieros senior</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>El fundador debe buscar y contratar programadores desde cero</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <span className="font-grotesk font-bold text-amber-400 block mb-2">CHIMERANEXT VENTURE STUDIO</span>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Co-fundación técnica e infraestructura lista desde día 0</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Microservicios certificados SOC2 y SEC pre-ensamblados</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Shared Services senior compartidos: capital hiper-eficiente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pilar 01 */}
          <div
            className={`rounded-2xl p-7 flex flex-col justify-between gap-6 border relative overflow-hidden group transition-all duration-200 hover:-translate-y-1 ${
              isDark
                ? 'bg-[#181b25] border-white/5 hover:border-blue-500/40 hover:bg-[#1c1f29] shadow-lg'
                : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-lg'
            }`}
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-grotesk font-bold text-blue-400 tracking-widest">
                  PILAR 01
                </span>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    isDark
                      ? 'bg-[#272a34] text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                      : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">hub</span>
                </div>
              </div>
              <h3
                className={`text-xl font-bold font-jakarta ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Ecosistema de Microservicios
              </h3>
              <p
                className={`text-sm leading-relaxed font-jakarta ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Arquitectura modular reutilizable y probada en producción que reduce el tiempo de desarrollo inicial en hasta un 70%. Componentes pre-aprobados para facturación, autenticación, telemetría y flujos de IA.
              </p>
            </div>
            <div
              className={`pt-4 border-t flex items-center gap-1.5 font-grotesk text-xs font-bold text-blue-400 ${
                isDark ? 'border-white/5' : 'border-slate-100'
              }`}
            >
              <span>Aceleración 70% TTM</span>
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          {/* Pilar 02 */}
          <div
            className={`rounded-2xl p-7 flex flex-col justify-between gap-6 border relative overflow-hidden group transition-all duration-200 hover:-translate-y-1 ${
              isDark
                ? 'bg-[#181b25] border-white/5 hover:border-purple-500/40 hover:bg-[#1c1f29] shadow-lg'
                : 'bg-white border-slate-200/80 hover:border-purple-300 hover:shadow-lg'
            }`}
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all pointer-events-none" />
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-grotesk font-bold text-purple-400 tracking-widest">
                  PILAR 02
                </span>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    isDark
                      ? 'bg-[#272a34] text-purple-400 group-hover:bg-purple-600 group-hover:text-white'
                      : 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">groups</span>
                </div>
              </div>
              <h3
                className={`text-xl font-bold font-jakarta ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Shared Services de Élite
              </h3>
              <p
                className={`text-sm leading-relaxed font-jakarta ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Equipos senior de producto, ingeniería cloud, data y growth compartidos entre proyectos. Elimina costos fijos prohibitivos y maximiza la eficiencia de capital manteniendo ejecución de calibre Silicon Valley.
              </p>
            </div>
            <div
              className={`pt-4 border-t flex items-center gap-1.5 font-grotesk text-xs font-bold text-purple-400 ${
                isDark ? 'border-white/5' : 'border-slate-100'
              }`}
            >
              <span>Eficiencia de Capital</span>
              <Scale className="w-4 h-4" />
            </div>
          </div>

          {/* Pilar 03 */}
          <div
            className={`rounded-2xl p-7 flex flex-col justify-between gap-6 border relative overflow-hidden group transition-all duration-200 hover:-translate-y-1 ${
              isDark
                ? 'bg-[#181b25] border-white/5 hover:border-amber-500/40 hover:bg-[#1c1f29] shadow-lg'
                : 'bg-white border-slate-200/80 hover:border-amber-300 hover:shadow-lg'
            }`}
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-grotesk font-bold text-amber-400 tracking-widest">
                  PILAR 03
                </span>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    isDark
                      ? 'bg-[#272a34] text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950'
                      : 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                </div>
              </div>
              <h3
                className={`text-xl font-bold font-jakarta ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Co-fundación &amp; Tracción Rápida
              </h3>
              <p
                className={`text-sm leading-relaxed font-jakarta ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Validación directa en mercado objetivo, estrategias agresivas de go-to-market y despliegue continuo de productos con métricas reales listas para rondas institucionales de Serie Seed y Serie A.
              </p>
            </div>
            <div
              className={`pt-4 border-t flex items-center gap-1.5 font-grotesk text-xs font-bold text-amber-400 ${
                isDark ? 'border-white/5' : 'border-slate-100'
              }`}
            >
              <span>Rumbo Institucional</span>
              <Rocket className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Executive Quote Block with Warm Gold Accent */}
        <div
          className={`rounded-2xl p-8 lg:p-10 border shadow-md relative ${
            isDark
              ? 'bg-[#1c1f29] border-white/10'
              : 'bg-white border-slate-200/90'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                isDark
                  ? 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                  : 'bg-amber-50 border-amber-200 text-amber-600'
              }`}
            >
              <span className="material-symbols-outlined text-3xl">format_quote</span>
            </div>
            <div className="flex flex-col gap-3 font-jakarta">
              <blockquote
                className={`text-lg sm:text-xl font-normal italic leading-relaxed ${
                  isDark ? 'text-slate-100' : 'text-slate-800'
                }`}
              >
                “El éxito en la nueva economía de software no se define por cuántas líneas de código escribes desde cero, sino por la velocidad y solidez de tu arquitectura compartida para iterar sobre valor real.”
              </blockquote>
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-amber-500" />
                <cite className="font-grotesk text-xs not-italic font-bold text-amber-400 uppercase tracking-wider">
                  Dirección Técnica
                </cite>
                <span className="text-xs text-slate-500 font-jakarta">• ChimeraNext Shared Services LLC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

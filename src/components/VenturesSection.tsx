import React, { useState } from 'react';
import { ThemeMode, Venture } from '../types';
import { VENTURES_DATA } from '../data/content';
import { ExternalLink, Layers, ArrowUpRight, X, Quote, CheckCircle2 } from 'lucide-react';

interface VenturesSectionProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({
  theme,
  onOpenBooking
}) => {
  const isDark = theme === 'dark';
  const [activeVenture, setActiveVenture] = useState<Venture | null>(null);

  return (
    <section
      id="ventures"
      className={`w-full py-20 lg:py-28 transition-colors duration-200 border-t ${
        isDark ? 'bg-[#10131c] border-white/5' : 'bg-slate-50 border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col max-w-3xl gap-2.5">
            <span
              className={`text-xs font-grotesk font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit border ${
                isDark
                  ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                  : 'text-amber-800 bg-amber-50 border-amber-200'
              }`}
            >
              CASOS DE PRODUCCIÓN
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight font-jakarta ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Portafolio de Ventures
            </h2>
            <p
              className={`text-base leading-relaxed font-jakarta ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Compañías estructuradas, creadas y potenciadas bajo el stack tecnológico de servicios compartidos de ChimeraNext.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-grotesk font-semibold text-slate-400">
              4 / 4 Empresas en Producción Activa
            </span>
          </div>
        </div>

        {/* 4 Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VENTURES_DATA.map((venture) => {
            return (
              <div
                key={venture.id}
                onClick={() => setActiveVenture(venture)}
                className={`rounded-2xl p-7 flex flex-col justify-between gap-6 border relative overflow-hidden group cursor-pointer transition-all duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#181b25] border-white/5 hover:border-amber-400/40 hover:bg-[#1c1f29] shadow-lg'
                    : 'bg-white border-slate-200/80 hover:border-amber-400 hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-grotesk px-2.5 py-1 rounded-full font-bold border ${
                        venture.id === 'nexuspay'
                          ? isDark
                            ? 'text-amber-300 bg-amber-500/15 border-amber-500/30'
                            : 'text-amber-800 bg-amber-50 border-amber-200/80'
                          : venture.id === 'cognipulse'
                          ? isDark
                            ? 'text-purple-300 bg-purple-500/15 border-purple-500/30'
                            : 'text-purple-800 bg-purple-50 border-purple-200/80'
                          : venture.id === 'logistiq'
                          ? isDark
                            ? 'text-blue-300 bg-blue-500/15 border-blue-500/30'
                            : 'text-blue-800 bg-blue-50 border-blue-200/80'
                          : isDark
                          ? 'text-teal-300 bg-teal-500/15 border-teal-500/30'
                          : 'text-teal-800 bg-teal-50 border-teal-200/80'
                      }`}
                    >
                      {venture.category}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-grotesk font-semibold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Production</span>
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mt-1">
                    <h3
                      className={`text-2xl font-bold font-jakarta group-hover:text-amber-400 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {venture.name}
                    </h3>
                    <span className="text-xs font-grotesk text-slate-400 flex items-center gap-1 group-hover:text-amber-400">
                      <span>Ver Caso</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed font-jakarta ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {venture.description}
                  </p>
                </div>

                {/* Highlight Metric Badge */}
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                    isDark
                      ? 'bg-[#0b0e17]/80 border-white/5 group-hover:border-white/15'
                      : 'bg-slate-50 border-slate-200/70'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-grotesk text-slate-400 uppercase">
                      {venture.mainMetricLabel}
                    </span>
                    <span
                      className={`text-xl font-bold font-grotesk ${
                        venture.id === 'nexuspay'
                          ? 'text-amber-400'
                          : venture.id === 'cognipulse'
                          ? 'text-purple-400'
                          : venture.id === 'logistiq'
                          ? 'text-blue-400'
                          : isDark
                          ? 'text-white'
                          : 'text-slate-900'
                      }`}
                    >
                      {venture.mainMetricValue}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-grotesk text-slate-400 uppercase">
                      {venture.subMetricLabel}
                    </span>
                    <span className="text-xs font-grotesk font-semibold text-blue-400 block mt-0.5">
                      {venture.subMetricValue}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Venture Case Study Modal */}
      {activeVenture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div
            className={`w-full max-w-3xl rounded-2xl p-6 sm:p-8 border shadow-2xl relative max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-[#181b25] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVenture(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-col gap-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-grotesk font-bold text-amber-400 uppercase tracking-widest">
                  {activeVenture.category}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-grotesk text-emerald-400 font-semibold">
                  Producción Activa (Año {activeVenture.foundedYear})
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-jakarta">
                {activeVenture.name} — Caso de Escala Tecnológica
              </h3>
            </div>

            {/* Highlights overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              {activeVenture.detailedCaseStudy.outcomes.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border flex flex-col ${
                    isDark ? 'bg-[#1c1f29] border-white/5' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-xs font-grotesk text-slate-400">{item.label}</span>
                  <span className="text-base font-bold font-grotesk text-amber-400 mt-1">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Problem & Solution */}
            <div className="space-y-4 font-jakarta text-xs sm:text-sm">
              <div
                className={`p-4 rounded-xl border ${
                  isDark ? 'bg-[#1c1f29]/50 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h4 className="font-grotesk font-bold uppercase text-red-400 tracking-wider text-xs mb-1">
                  El Reto Técnico / Ineficiencia Previa
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {activeVenture.detailedCaseStudy.problem}
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isDark ? 'bg-[#1c1f29]/50 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h4 className="font-grotesk font-bold uppercase text-blue-400 tracking-wider text-xs mb-1">
                  Arquitectura &amp; Solución de Microservicios ChimeraNext
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {activeVenture.detailedCaseStudy.solution}
                </p>
              </div>
            </div>

            {/* Microservices Deployed */}
            <div className="mt-5">
              <h4 className="text-xs font-grotesk font-bold uppercase text-slate-400 tracking-wider mb-2">
                Microservicios Nucleares Desplegados
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeVenture.detailedCaseStudy.microservicesDeployed.map((ms, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-jakarta ${
                      isDark ? 'bg-[#1c1f29] border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{ms}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {activeVenture.detailedCaseStudy.founderTestimonial && (
              <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex gap-3 items-start">
                <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="font-jakarta text-xs sm:text-sm">
                  <p className="italic text-slate-200 mb-1">
                    "{activeVenture.detailedCaseStudy.founderTestimonial.quote}"
                  </p>
                  <div className="font-grotesk text-xs text-amber-400 font-bold">
                    {activeVenture.detailedCaseStudy.founderTestimonial.author} —{' '}
                    <span className="text-slate-400 font-normal">
                      {activeVenture.detailedCaseStudy.founderTestimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {activeVenture.techStack.slice(0, 4).map(tech => (
                  <span
                    key={tech}
                    className="text-[11px] font-grotesk px-2 py-0.5 rounded bg-white/5 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveVenture(null)}
                  className="px-4 py-2 rounded-lg text-xs font-grotesk text-slate-400 hover:text-white cursor-pointer"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    setActiveVenture(null);
                    onOpenBooking();
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-grotesk font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 cursor-pointer shadow-md"
                >
                  Construir Proyecto Similar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

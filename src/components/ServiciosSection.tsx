import React, { useState } from 'react';
import { ThemeMode, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/content';
import { ChevronRight, CheckCircle2, Shield, Sparkles, X } from 'lucide-react';

interface ServiciosSectionProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

export const ServiciosSection: React.FC<ServiciosSectionProps> = ({
  theme,
  onOpenBooking
}) => {
  const isDark = theme === 'dark';
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'cloud' | 'frontend' | 'ai' | 'growth' | 'data' | 'compliance'>('all');

  const filteredServices = filter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === filter);

  return (
    <section
      id="servicios"
      className={`w-full py-20 lg:py-28 transition-colors duration-200 border-t ${
        isDark ? 'bg-[#0b0e17] border-white/5' : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col max-w-2xl gap-2.5">
            <span
              className={`text-xs font-grotesk font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit border ${
                isDark
                  ? 'text-blue-400 bg-blue-500/10 border-blue-500/30'
                  : 'text-blue-700 bg-blue-50 border-blue-200'
              }`}
            >
              CAPACIDADES TÉCNICAS NATIVAS
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight font-jakarta ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Servicios Compartidos &amp; Microservicios
            </h2>
            <p
              className={`text-base leading-relaxed font-jakarta ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Capacidades técnicas y operativas diseñadas para escalar empresas sin la fricción de construir infraestructura desde cero.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-grotesk text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === 'all'
                  ? isDark
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/40 font-bold'
                    : 'bg-blue-50 text-blue-700 border-blue-200 font-bold'
                  : isDark
                  ? 'bg-[#181b25] text-slate-400 border-white/5 hover:text-white'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'
              }`}
            >
              Todos (6)
            </button>
            <button
              onClick={() => setFilter('cloud')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === 'cloud'
                  ? isDark
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/40 font-bold'
                    : 'bg-blue-50 text-blue-700 border-blue-200 font-bold'
                  : isDark
                  ? 'bg-[#181b25] text-slate-400 border-white/5 hover:text-white'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'
              }`}
            >
              Cloud &amp; Infra
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === 'ai'
                  ? isDark
                    ? 'bg-purple-500/20 text-purple-400 border-purple-500/40 font-bold'
                    : 'bg-purple-50 text-purple-700 border-purple-200 font-bold'
                  : isDark
                  ? 'bg-[#181b25] text-slate-400 border-white/5 hover:text-white'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'
              }`}
            >
              IA &amp; Agentes
            </button>
            <button
              onClick={() => setFilter('compliance')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === 'compliance'
                  ? isDark
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 font-bold'
                    : 'bg-amber-50 text-amber-800 border-amber-200 font-bold'
                  : isDark
                  ? 'bg-[#181b25] text-slate-400 border-white/5 hover:text-white'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'
              }`}
            >
              Compliance SOC2
            </button>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`rounded-2xl p-7 flex flex-col justify-between border transition-all duration-200 cursor-pointer group hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#181b25] border-white/5 hover:bg-[#1c1f29] hover:border-blue-500/30 shadow-lg'
                    : 'bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isDark
                          ? 'bg-blue-500/15 text-blue-400 group-hover:bg-blue-500 group-hover:text-white'
                          : 'bg-blue-100/70 text-blue-700 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[26px]">
                        {service.icon}
                      </span>
                    </div>

                    <span className="text-[11px] font-grotesk font-semibold text-slate-400 group-hover:text-blue-400 flex items-center gap-0.5">
                      <span>Detalles</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold font-jakarta leading-snug ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed font-jakarta ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-6 flex flex-wrap gap-1.5 mt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-grotesk font-medium px-2.5 py-1 rounded border transition-colors ${
                        isDark
                          ? 'bg-[#1c1f29] border-white/5 text-slate-300 group-hover:border-white/15'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div
            className={`w-full max-w-2xl rounded-2xl p-6 sm:p-8 border shadow-2xl relative max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-[#181b25] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">
                  {selectedService.icon}
                </span>
              </div>
              <div>
                <span className="text-xs font-grotesk font-bold text-amber-400 uppercase tracking-widest">
                  Capacidad de Infraestructura
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-jakarta">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 font-jakarta">
              {selectedService.description}
            </p>

            {/* Deep dive capabilities */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-grotesk font-bold uppercase tracking-wider text-slate-400">
                Componentes Arquitectónicos &amp; SLA
              </h4>
              <div className="space-y-2">
                {selectedService.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs sm:text-sm font-jakarta ${
                      isDark ? 'bg-[#1c1f29] border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Badge */}
            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-grotesk font-bold text-amber-300">
                  Garantía de Nivel de Servicio (SLA)
                </span>
              </div>
              <span className="text-xs font-grotesk font-semibold text-white">
                {selectedService.sla}
              </span>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-lg text-xs font-grotesk font-semibold text-slate-400 hover:text-white cursor-pointer"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenBooking();
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-grotesk font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Consultar Integración con Partner</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

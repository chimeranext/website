import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { Calendar, ArrowDown, Activity, CheckCircle, ShieldCheck, RefreshCw } from 'lucide-react';

interface HeroProps {
  theme: ThemeMode;
  onExploreVentures: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  onExploreVentures,
  onOpenBooking
}) => {
  const isDark = theme === 'dark';

  // Dynamic telemetry live simulation
  const [latency, setLatency] = useState(14);
  const [throughput, setThroughput] = useState(48.2);
  const [activeTabTelemetry, setActiveTabTelemetry] = useState<'realtime' | 'nodes'>('realtime');
  const [livePulse, setLivePulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Subtle realistic flutter
      setLatency(prev => {
        const delta = (Math.random() - 0.5) * 1.6;
        const next = Math.max(11, Math.min(17, +(prev + delta).toFixed(1)));
        return Math.round(next);
      });
      setThroughput(prev => {
        const delta = (Math.random() - 0.48) * 0.8;
        return +(Math.max(46.5, Math.min(51.2, prev + delta))).toFixed(1);
      });
      setLivePulse(true);
      setTimeout(() => setLivePulse(false), 800);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className={`relative w-full overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 transition-colors duration-200 ${
        isDark ? 'bg-[#0b0e17]' : 'bg-gradient-to-b from-slate-50 via-white to-white'
      }`}
    >
      {/* Ambient background glows */}
      <div
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-indigo-600/15' : 'bg-purple-200/40'
        }`}
      />
      <div
        className={`absolute top-1/3 -right-20 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-100/50'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Copy Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Live badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-xs transition-all ${
                isDark
                  ? 'bg-[#181b25]/90 border-white/10 text-amber-400'
                  : 'bg-amber-50 border-amber-200/80 text-amber-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-grotesk tracking-wider uppercase font-semibold">
                VENTURE STUDIO • SHARED SERVICES • ASTRO + REACT ISLANDS
              </span>
            </div>

            {/* Hero Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] font-jakarta ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Construimos, escalamos y operamos la{' '}
              <span className="text-amber-400">próxima</span>{' '}
              <span
                className={`bg-clip-text text-transparent ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400'
                    : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600'
                }`}
              >
                generación
              </span>{' '}
              de compañías tecnológicas.
            </h1>

            {/* Hero Subtitle */}
            <p
              className={`text-lg leading-relaxed max-w-2xl font-jakarta ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              ChimeraNext combina un ecosistema de microservicios avanzados y equipos especializados para acelerar el desarrollo de startups y soluciones empresariales de alto impacto con tracción real.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold font-jakarta bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3.5 rounded-lg transition-all shadow-[0_0_24px_rgba(245,158,11,0.28)] active:scale-[0.98] cursor-pointer"
              >
                <span>Agendar Llamada Estratégica</span>
                <Calendar className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onExploreVentures}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold font-jakarta px-6 py-3.5 rounded-lg border transition-all active:scale-[0.98] cursor-pointer ${
                  isDark
                    ? 'bg-[#272a34]/80 text-white border-white/10 hover:bg-[#32343f] hover:text-blue-300'
                    : 'bg-white text-slate-700 border-slate-300 hover:text-purple-700 hover:border-purple-300 hover:bg-purple-50/40'
                }`}
              >
                <span>Explorar Ventures y Servicios</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Badges Strip */}
            <div
              className={`flex flex-wrap items-center gap-y-2.5 gap-x-4 pt-4 border-t w-full ${
                isDark ? 'border-white/10' : 'border-slate-200/80'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-blue-400 text-[18px]">verified</span>
                <span
                  className={`text-xs font-grotesk tracking-wide font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  Delaware Registered LLC
                </span>
              </div>
              <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>•</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-amber-400 text-[18px]">security</span>
                <span
                  className={`text-xs font-grotesk tracking-wide font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  SOC2 Type II Aligned
                </span>
              </div>
              <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>•</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-purple-400 text-[18px]">cloud_sync</span>
                <span
                  className={`text-xs font-grotesk tracking-wide font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  Multi-Region Zero Downtime
                </span>
              </div>
            </div>
          </div>

          {/* Right Telemetry Monitor Visual Module (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div
              className={`relative rounded-2xl p-6 shadow-2xl border transition-all ${
                isDark
                  ? 'bg-[#181b25] border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              {/* Subtle gradient inner aura */}
              <div
                className={`absolute inset-0 rounded-2xl pointer-events-none ${
                  isDark
                    ? 'bg-gradient-to-br from-blue-500/5 via-purple-600/5 to-transparent'
                    : 'bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent'
                }`}
              />

              <div className="relative flex flex-col gap-4">
                {/* Monitor Header */}
                <div
                  className={`flex items-center justify-between pb-3 border-b ${
                    isDark ? 'border-white/10' : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        livePulse ? 'bg-emerald-400 scale-125' : 'bg-emerald-500'
                      } transition-transform duration-300`}
                    />
                    <span
                      className={`text-xs font-grotesk font-bold uppercase tracking-wider ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Venture Mesh Engine
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-grotesk font-semibold px-2.5 py-0.5 rounded-full border ${
                      isDark
                        ? 'text-blue-300 bg-blue-500/10 border-blue-500/30'
                        : 'text-blue-700 bg-blue-50 border-blue-200'
                    }`}
                  >
                    v4.8.2 PROD
                  </span>
                </div>

                {/* Quick Gauge Cards Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className={`p-3.5 rounded-xl border flex flex-col gap-1 transition-all ${
                      isDark ? 'bg-[#1c1f29] border-white/5' : 'bg-slate-50 border-slate-200/70'
                    }`}
                  >
                    <span className="text-[11px] font-grotesk font-semibold text-slate-400 uppercase tracking-wider">
                      GLOBAL LATENCY
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`text-2xl font-bold font-grotesk transition-colors ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {latency}
                      </span>
                      <span className="text-xs font-grotesk font-semibold text-blue-400">ms avg</span>
                    </div>
                    <span className="text-[11px] font-grotesk text-slate-500">P99 SLA Guaranteed</span>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border flex flex-col gap-1 transition-all ${
                      isDark ? 'bg-[#1c1f29] border-white/5' : 'bg-slate-50 border-slate-200/70'
                    }`}
                  >
                    <span className="text-[11px] font-grotesk font-semibold text-slate-400 uppercase tracking-wider">
                      AGENTS AUTÓNOMOS
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold font-grotesk text-amber-400">24 / 24</span>
                    </div>
                    <span className="text-[11px] font-grotesk text-slate-500">Active Orchestrators</span>
                  </div>
                </div>

                {/* Throughput SVG Curve */}
                <div
                  className={`p-3.5 rounded-xl border flex flex-col gap-2 ${
                    isDark ? 'bg-[#1c1f29] border-white/5' : 'bg-slate-50 border-slate-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-grotesk font-semibold uppercase tracking-wider text-slate-400">
                      Microservices Throughput
                    </span>
                    <span
                      className={`text-xs font-grotesk font-bold px-2 py-0.5 rounded border ${
                        isDark
                          ? 'text-purple-300 bg-purple-500/15 border-purple-500/30'
                          : 'text-purple-700 bg-purple-50 border-purple-200/60'
                      }`}
                    >
                      +{throughput}k req/s
                    </span>
                  </div>

                  <div className="w-full h-20 pt-1">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 320 80">
                      <defs>
                        <linearGradient id="heroChartGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor={isDark ? '#adc6ff' : '#7c3aed'} stopOpacity={isDark ? '0.35' : '0.22'} />
                          <stop offset="100%" stopColor={isDark ? '#adc6ff' : '#2563eb'} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,60 C40,55 70,30 110,40 C150,50 180,18 220,25 C260,32 290,10 320,12 L320,80 L0,80 Z"
                        fill="url(#heroChartGradient)"
                      />
                      <path
                        d="M0,60 C40,55 70,30 110,40 C150,50 180,18 220,25 C260,32 290,10 320,12"
                        fill="none"
                        stroke={isDark ? '#adc6ff' : '#6366f1'}
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      />
                      {/* Pulse point */}
                      <circle cx="320" cy="12" r="4" fill={isDark ? '#fbbf24' : '#f59e0b'} />
                      <circle cx="320" cy="12" r="7" fill={isDark ? '#fbbf24' : '#f59e0b'} opacity="0.3" className="animate-ping" />
                    </svg>
                  </div>
                </div>

                {/* Microservices State List */}
                <div className="flex flex-col gap-2 pt-1 font-jakarta">
                  <div
                    className={`flex items-center justify-between text-xs px-3 py-2 rounded-lg border transition-all ${
                      isDark
                        ? 'bg-[#1c1f29]/70 border-white/5 text-slate-300'
                        : 'bg-slate-50 border-slate-200/60 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="font-medium">Auth &amp; Identity (Delaware Sovereign)</span>
                    </div>
                    <span className="font-grotesk text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                      Operativo
                    </span>
                  </div>

                  <div
                    className={`flex items-center justify-between text-xs px-3 py-2 rounded-lg border transition-all ${
                      isDark
                        ? 'bg-[#1c1f29]/70 border-white/5 text-slate-300'
                        : 'bg-slate-50 border-slate-200/60 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="font-medium">Cognitive Data Pipeline</span>
                    </div>
                    <span className="font-grotesk text-[11px] font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                      Procesando
                    </span>
                  </div>

                  <div
                    className={`flex items-center justify-between text-xs px-3 py-2 rounded-lg border transition-all ${
                      isDark
                        ? 'bg-[#1c1f29]/70 border-white/5 text-slate-300'
                        : 'bg-slate-50 border-slate-200/60 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="font-medium">Cross-Border Settlement Engine</span>
                    </div>
                    <span className="font-grotesk text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      Sincronizado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Stats Strip (4 KPI Blocks) */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <div
            className={`flex flex-col p-5 rounded-xl border transition-all hover:scale-[1.02] ${
              isDark ? 'bg-[#181b25]/70 border-white/5' : 'bg-white border-slate-200/80 shadow-xs'
            }`}
          >
            <span className="text-3xl font-extrabold font-grotesk text-amber-400 tracking-tight">$25M+</span>
            <span className="text-xs font-grotesk text-slate-400 uppercase mt-1">Valor Portafolio</span>
          </div>

          <div
            className={`flex flex-col p-5 rounded-xl border transition-all hover:scale-[1.02] ${
              isDark ? 'bg-[#181b25]/70 border-white/5' : 'bg-white border-slate-200/80 shadow-xs'
            }`}
          >
            <span className="text-3xl font-extrabold font-grotesk text-blue-400 tracking-tight">4 Activas</span>
            <span className="text-xs font-grotesk text-slate-400 uppercase mt-1">Ventures Creadas</span>
          </div>

          <div
            className={`flex flex-col p-5 rounded-xl border transition-all hover:scale-[1.02] ${
              isDark ? 'bg-[#181b25]/70 border-white/5' : 'bg-white border-slate-200/80 shadow-xs'
            }`}
          >
            <span className="text-3xl font-extrabold font-grotesk text-purple-400 tracking-tight">8 Núcleos</span>
            <span className="text-xs font-grotesk text-slate-400 uppercase mt-1">Servicios Centrales</span>
          </div>

          <div
            className={`flex flex-col p-5 rounded-xl border transition-all hover:scale-[1.02] ${
              isDark ? 'bg-[#181b25]/70 border-white/5' : 'bg-white border-slate-200/80 shadow-xs'
            }`}
          >
            <span
              className={`text-3xl font-extrabold font-grotesk tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              99.9%
            </span>
            <span className="text-xs font-grotesk text-slate-400 uppercase mt-1">Uptime Infraestructura</span>
          </div>
        </div>
      </div>
    </section>
  );
};

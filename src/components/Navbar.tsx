import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { BRAND_LOGO_URL } from '../data/content';
import { Moon, Sun, Menu, X, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const isDark = theme === 'dark';

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
        isDark
          ? 'bg-[#10131c]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_12px_rgba(0,0,0,0.6)]'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
      }`}
    >
      <div className="h-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo & LLC Moniker */}
        <button
          onClick={() => onNavigate('inicio')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <img
            alt="ChimeraNext Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={BRAND_LOGO_URL}
            onError={(e) => {
              // Fallback SVG if network fails
              const target = e.currentTarget;
              target.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-tight leading-none font-jakarta ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              ChimeraNext
            </span>
            <span
              className={`text-[11px] font-grotesk uppercase tracking-wider mt-1 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Shared Services LLC
            </span>
          </div>
        </button>

        {/* Center Navigation Pill Container */}
        <nav
          className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
            isDark
              ? 'bg-[#181b25]/80 border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]'
              : 'bg-slate-100/90 border-slate-200/70 shadow-inner'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-jakarta px-4 py-1.5 rounded-full transition-all duration-150 cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-[#272a34] text-white font-semibold shadow-xs'
                      : 'bg-white text-slate-900 font-semibold shadow-xs'
                    : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Theme Mode Toggle (Dark / Light) */}
          <button
            onClick={onToggleTheme}
            title={isDark ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro'}
            aria-label="Toggle dark/light mode"
            className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
              isDark
                ? 'bg-[#1c1f29] border-white/10 text-amber-400 hover:bg-[#272a34]'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Agendar Llamada CTA Button */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center gap-2 text-sm font-bold font-jakarta bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Agendar Llamada</span>
          </button>

          {/* Quick Institutional Profile Info Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isDark
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30 hover:bg-blue-500/30'
                  : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
              }`}
              title="Información Corporativa"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {profileDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-72 rounded-xl p-4 shadow-2xl border z-50 transition-all ${
                  isDark
                    ? 'bg-[#181b25] border-white/15 text-slate-200'
                    : 'bg-white border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-jakarta">ChimeraNext LLC</div>
                    <div className="text-[10px] font-grotesk text-slate-400">Delaware State Reg: DE-7392814</div>
                  </div>
                </div>

                <div className="py-2.5 text-xs space-y-1.5 font-jakarta">
                  <div className="flex justify-between text-slate-400">
                    <span>Jurisdicción:</span>
                    <span className="font-semibold text-slate-200">Delaware, USA</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Compliance:</span>
                    <span className="text-emerald-400 font-grotesk font-semibold">SOC2 Type II</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Direct Partners:</span>
                    <span className="text-amber-400 font-grotesk font-semibold">4 Activos</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex flex-col gap-1">
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full text-left text-xs font-semibold py-1.5 px-2 rounded hover:bg-amber-500/10 text-amber-400 flex items-center justify-between cursor-pointer"
                  >
                    <span>Solicitar Consulta Técnica</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="mailto:inquiries@chimeranext.com"
                    className="w-full text-left text-xs text-slate-400 hover:text-white py-1 px-2"
                  >
                    inquiries@chimeranext.com
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg cursor-pointer ${
              isDark ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-4 space-y-3 ${
            isDark ? 'bg-[#10131c] border-white/10' : 'bg-white border-slate-200'
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-jakarta font-medium ${
                activeSection === item.id
                  ? isDark
                    ? 'bg-[#272a34] text-white font-bold'
                    : 'bg-slate-100 text-slate-900 font-bold'
                  : isDark
                  ? 'text-slate-300 hover:bg-white/5'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 text-center text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Llamada Estratégica</span>
          </button>
        </div>
      )}
    </header>
  );
};

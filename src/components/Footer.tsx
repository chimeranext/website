import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { Mail, MapPin, ShieldCheck, X } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [legalModalContent, setLegalModalContent] = useState<{
    title: string;
    text: string;
  } | null>(null);

  const openLegalModal = (title: string, text: string) => {
    setLegalModalContent({ title, text });
  };

  return (
    <footer
      className={`w-full py-16 transition-colors duration-200 border-t ${
        isDark
          ? 'bg-[#080b14] border-white/5 text-slate-300'
          : 'bg-slate-900 border-slate-800 text-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Left Brand & LLC Column */}
          <div className="flex flex-col max-w-sm gap-3 font-jakarta">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-bold text-white font-jakarta">
                ChimeraNext
              </span>
              <span className="text-xs font-grotesk text-amber-400 bg-amber-400/15 border border-amber-400/30 px-2 py-0.5 rounded font-semibold">
                DELAWARE LLC
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-jakarta">
              Infraestructura operativa y servicios corporativos de alto rendimiento para portafolios venture e inversión institucional transfronteriza.
            </p>
            <span className="text-xs font-grotesk text-slate-500">
              Registration No. DE-7392814 • Wilmington, Delaware, USA
            </span>
          </div>

          {/* Center Column: Governance & Legal */}
          <div className="flex flex-col gap-3 font-jakarta">
            <span className="text-xs font-grotesk text-white font-bold uppercase tracking-wider">
              Gobierno &amp; Legal
            </span>
            <div className="flex flex-col gap-2">
              <button
                onClick={() =>
                  openLegalModal(
                    'Términos de Servicio',
                    'ChimeraNext Shared Services LLC proporciona acceso a su ecosistema de microservicios, consultoría de arquitectura cloud y acuerdos de co-fundación técnica bajo las leyes del Estado de Delaware. Los servicios compartidos se entregan bajo acuerdos marco de nivel de servicio (SLA) institucional con auditoría de código continuo y estándares de seguridad SOC2 Type II.'
                  )
                }
                className="text-left text-xs sm:text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Términos de Servicio
              </button>
              <button
                onClick={() =>
                  openLegalModal(
                    'Política de Privacidad',
                    'Compromiso estricto con la privacidad institucional de datos. ChimeraNext opera bajo estándares Zero-Trust y normativas de confidencialidad para código fuente, propiedad intelectual, telemetría y datos de clientes conforme a reglamentaciones de EE.UU., GDPR y lineamientos HIPAA.'
                  )
                }
                className="text-left text-xs sm:text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() =>
                  openLegalModal(
                    'Marco de Gobernanza Corporativa',
                    'Las empresas asociadas e incubadas bajo ChimeraNext se estructuran con gobernanza alineada con Delaware General Corporation Law (DGCL), facilitando inversiones de fondos de Venture Capital institucionales, emisión de warrants y rondas de financiamiento transparentes.'
                  )
                }
                className="text-left text-xs sm:text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Marco de Gobernanza Corporativa
              </button>
            </div>
          </div>

          {/* Right Column: Institutional Contact */}
          <div className="flex flex-col gap-3 font-jakarta">
            <span className="text-xs font-grotesk text-white font-bold uppercase tracking-wider">
              Contacto Institucional
            </span>
            <a
              href="mailto:inquiries@chimeranext.com"
              className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>inquiries@chimeranext.com</span>
            </a>
            <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span>Corporation Trust Center, 1209 Orange St, Wilmington, DE 19801</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4 font-jakarta">
          <span className="text-xs text-slate-400">
            © 2025 ChimeraNext Shared Services LLC. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-6">
            <span className="text-xs font-grotesk text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Cumplimiento SEC &amp; Delaware Division of Corporations</span>
            </span>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl p-6 bg-[#181b25] border border-white/15 text-white shadow-2xl relative">
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <h4 className="text-lg font-bold font-jakarta text-amber-400 mb-3">
              {legalModalContent.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-jakarta leading-relaxed">
              {legalModalContent.text}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 rounded-lg text-xs font-grotesk font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

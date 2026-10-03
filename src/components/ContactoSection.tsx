import React, { useState } from 'react';
import { ThemeMode, BookingSlot, InquiryFormData } from '../types';
import { BOOKING_SLOTS } from '../data/content';
import { Calendar, Check, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

interface ContactoSectionProps {
  theme: ThemeMode;
  preselectedSlot?: string;
}

export const ContactoSection: React.FC<ContactoSectionProps> = ({
  theme,
  preselectedSlot
}) => {
  const isDark = theme === 'dark';

  // Slot selector state
  const [selectedSlotId, setSelectedSlotId] = useState<string>(
    preselectedSlot || BOOKING_SLOTS[0].id
  );
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [guestEmail, setGuestEmail] = useState('');
  const [guestName, setGuestName] = useState('');

  // Inquiry form state
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    corporateEmail: '',
    interestType: 'co-fundacion',
    stage: 'seed',
    projectDescription: '',
    ndaRequested: true,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const currentSlot = BOOKING_SLOTS.find(s => s.id === selectedSlotId) || BOOKING_SLOTS[0];

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setBookingModalOpen(false);
    setTimeout(() => {
      // Keep confirmed state
    }, 4000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = `CN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedTicket);
    setFormSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className={`w-full py-20 lg:py-28 transition-colors duration-200 border-t ${
        isDark
          ? 'bg-[#0b0e17] border-white/5'
          : 'bg-slate-50 border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col max-w-3xl gap-2.5">
          <span
            className={`text-xs font-grotesk font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit border ${
              isDark
                ? 'text-purple-300 bg-purple-500/10 border-purple-500/30'
                : 'text-purple-700 bg-purple-50 border-purple-200'
            }`}
          >
            NEXT STEPS
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight font-jakarta ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Inicia tu próxima etapa de aceleración
          </h2>
          <p
            className={`text-base leading-relaxed font-jakarta ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Agenda directamente una sesión estratégica de 30 minutos o envíanos los detalles técnicos de tu proyecto para evaluación de equipo senior.
          </p>
        </div>

        {/* Two-Column Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Cal.com direct booking module (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              className={`rounded-2xl p-7 border shadow-xl flex flex-col gap-5 ${
                isDark
                  ? 'bg-[#181b25] border-white/5 text-white'
                  : 'bg-white border-slate-200/90 text-slate-900 shadow-sm'
              }`}
            >
              {/* Module Header */}
              <div
                className={`flex items-center justify-between pb-3.5 border-b ${
                  isDark ? 'border-white/10' : 'border-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-400 text-[22px]">
                    videocam
                  </span>
                  <span className="text-lg font-bold font-jakarta">
                    Sesión de Descubrimiento
                  </span>
                </div>
                <span className="text-xs font-grotesk text-slate-400 font-semibold">
                  30 min • Cal.com
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed font-jakarta ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Diálogo técnico confidencial con un Partner Director de ChimeraNext para evaluar compatibilidad con el modelo de Shared Services o Venture Studio.
              </p>

              {/* Dynamic Slot Picker Preview */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-grotesk text-slate-400 font-semibold uppercase tracking-wider">
                  Horarios Sugeridos Disponibles
                </span>
                <div className="grid grid-cols-2 gap-2" id="slot-picker">
                  {BOOKING_SLOTS.slice(0, 4).map((slot) => {
                    const isSelected = selectedSlotId === slot.id;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => {
                          setSelectedSlotId(slot.id);
                          setBookingConfirmed(false);
                        }}
                        className={`p-3 text-left rounded-xl font-grotesk text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? isDark
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-blue-600 text-white shadow-md'
                            : isDark
                            ? 'bg-[#1c1f29] text-slate-300 hover:text-white hover:bg-[#272a34]'
                            : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                        }`}
                      >
                        <span>{slot.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA Confirm button */}
              {bookingConfirmed ? (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-grotesk text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold block">Reserva confirmada: {currentSlot.label}</span>
                    <span className="text-[11px] text-slate-300">Invitación enviada a tu calendario con enlace Google Meet cifrado.</span>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(true)}
                  className={`w-full inline-flex items-center justify-center gap-2 text-sm font-bold font-jakarta px-5 py-3.5 rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer ${
                    isDark
                      ? 'bg-[#272a34] hover:bg-[#32343f] text-white border border-white/10'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">event_available</span>
                  <span>Confirmar Reserva vía Cal.com</span>
                </button>
              )}

              {/* Institutional verification metadata */}
              <div
                className={`pt-3 flex flex-col gap-1 border-t ${
                  isDark ? 'border-white/10' : 'border-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span className="text-xs font-grotesk font-medium">ChimeraNext Shared Services LLC</span>
                </div>
                <span className="text-xs font-grotesk text-slate-500 pl-5">
                  Sede Delaware, US • partner@chimeranext.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Requerimiento Formal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl p-7 border shadow-xl flex flex-col gap-5 ${
                isDark
                  ? 'bg-[#181b25] border-white/5 text-white'
                  : 'bg-white border-slate-200/90 text-slate-900 shadow-sm'
              }`}
            >
              <h3 className="text-xl font-bold font-jakarta">Envía tu Requerimiento</h3>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 font-jakarta">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-grotesk font-semibold text-slate-400 uppercase">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`px-3.5 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        isDark
                          ? 'bg-[#1c1f29] border border-white/10 text-white placeholder:text-slate-500'
                          : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-grotesk font-semibold text-slate-400 uppercase">
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@venturecorp.io"
                      value={formData.corporateEmail}
                      onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                      className={`px-3.5 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        isDark
                          ? 'bg-[#1c1f29] border border-white/10 text-white placeholder:text-slate-500'
                          : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Interest Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-grotesk font-semibold text-slate-400 uppercase">
                      Tipo de Interés
                    </label>
                    <select
                      value={formData.interestType}
                      onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                      className={`px-3.5 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        isDark
                          ? 'bg-[#1c1f29] border border-white/10 text-white'
                          : 'bg-slate-50 border border-slate-200 text-slate-900'
                      }`}
                    >
                      <option value="co-fundacion">Co-fundación Venture Studio</option>
                      <option value="shared-services">Shared Services &amp; Microservicios</option>
                      <option value="arquitectura-ia">Desarrollo e IA Aplicada</option>
                      <option value="consultoria">Consultoría Técnica Institucional</option>
                    </select>
                  </div>

                  {/* Stage / Budget */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-grotesk font-semibold text-slate-400 uppercase">
                      Etapa o Presupuesto Operativo
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className={`px-3.5 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        isDark
                          ? 'bg-[#1c1f29] border border-white/10 text-white'
                          : 'bg-slate-50 border border-slate-200 text-slate-900'
                      }`}
                    >
                      <option value="seed">Fase Semilla / Ideación Validada</option>
                      <option value="growth">Etapa de Crecimiento ($50k - $250k)</option>
                      <option value="scale">Escalamiento Institucional ($250k+)</option>
                      <option value="corporate">División Corporativa / Enterprise</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-grotesk font-semibold text-slate-400 uppercase">
                    Descripción del Proyecto o Reto Técnico
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe brevemente los objetivos de escala, la infraestructura actual o el prototipo a construir..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className={`px-3.5 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      isDark
                        ? 'bg-[#1c1f29] border border-white/10 text-white placeholder:text-slate-500'
                        : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400'
                    }`}
                  />
                </div>

                {/* NDA Request Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="nda-checkbox"
                    checked={formData.ndaRequested}
                    onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                    className="mt-0.5 rounded border-slate-600 text-amber-500 focus:ring-amber-500 cursor-pointer"
                  />
                  <label htmlFor="nda-checkbox" className="text-xs text-slate-400 cursor-pointer select-none leading-relaxed">
                    Solicitar firma previa de Acuerdo de Confidencialidad mutuo (Mutual NDA) antes de compartir detalles sensibles.
                  </label>
                </div>

                {/* Submit Button (High-contrast Gold) */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold font-jakarta bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3.5 rounded-lg transition-all shadow-[0_0_25px_rgba(245,158,11,0.25)] active:scale-[0.98] cursor-pointer"
                >
                  <span>Enviar Mensaje y Requerimiento</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>

                {/* Dynamic form confirmation feedback */}
                {formSubmitted && (
                  <div
                    className={`p-4 rounded-xl border text-xs font-jakarta flex items-start gap-3 ${
                      isDark
                        ? 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                        : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold font-grotesk text-sm mb-0.5">
                        Ticket {ticketId} Registrado con Éxito
                      </div>
                      <p className="leading-relaxed">
                        Requerimiento recibido para evaluación confidencial. Un Partner Director técnico te contactará dentro de las próximas 24 horas hábiles
                        {formData.ndaRequested ? ' adjuntando el NDA digital firmado por ChimeraNext Shared Services LLC.' : '.'}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Cal.com Quick Reservation Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div
            className={`w-full max-w-md rounded-2xl p-6 border shadow-2xl relative ${
              isDark ? 'bg-[#181b25] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <h4 className="font-bold font-jakarta text-base">Confirmar Cita en Cal.com</h4>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
            </div>

            <div className="my-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-jakarta text-slate-300">
              <span className="font-grotesk font-bold text-blue-400 block mb-1">
                Horario Seleccionado:
              </span>
              <span className="text-sm font-bold text-white block">{currentSlot.label} (30 min)</span>
              <span>Anfitrión: Partner Director Técnico • ChimeraNext Shared Services</span>
            </div>

            <form onSubmit={handleBookingConfirm} className="space-y-3 font-jakarta text-xs">
              <div>
                <label className="font-grotesk uppercase text-slate-400 font-semibold block mb-1">
                  Tu Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Carlos Mendoza"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className={`w-full p-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    isDark ? 'bg-[#1c1f29] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="font-grotesk uppercase text-slate-400 font-semibold block mb-1">
                  Correo Electrónico para la Invitación
                </label>
                <input
                  type="email"
                  required
                  placeholder="carlos@startup.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className={`w-full p-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    isDark ? 'bg-[#1c1f29] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
                >
                  Volver
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 font-jakarta shadow-md cursor-pointer"
                >
                  Agendar Definitivo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

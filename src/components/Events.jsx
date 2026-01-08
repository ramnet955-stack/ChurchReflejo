import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Calendar, Clock, MapPin } from 'lucide-react';
import CalendarBg from '../assets/RUGIDOdeFE.webp';

const events = [
  { id: 1, title: 'Servicio Dominical', date: '2026-01-11', time: '10:00 AM', location: 'Sede CdMx y Metepec', quarter: 1, type: 'Recurrente' },
  { id: 2, title: 'Noche de Adoración', date: '2026-01-24', time: '07:00 PM', location: 'Sede CdMx', quarter: 1, type: 'Especial' },
  { id: 3, title: 'Retiro de Jóvenes', date: '2026-02-14', time: 'All Day', location: 'Centro de Retiros', quarter: 1, type: 'Campamento' },
  { id: 4, title: 'Conferencia de Matrimonios', date: '2026-03-20', time: '06:00 PM', location: 'Hotel Radisson', quarter: 1, type: 'Conferencia' },
  { id: 5, title: 'Día de la Familia', date: '2026-04-15', time: '11:00 AM', location: 'Parque Bicentenario', quarter: 2, type: 'Comunidad' },
  { id: 6, title: 'Cena de Acción de Gracias', date: '2026-11-26', time: '08:00 PM', location: 'Sede Metepec', quarter: 4, type: 'Celebración' },
];

const filters = [
  { value: 'all', label: 'Todo el año' },
  { value: '1', label: '1er trimestre' },
  { value: '2', label: '2º trimestre' },
  { value: '3', label: '3er trimestre' },
  { value: '4', label: '4º trimestre' },
];

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.quarter === parseInt(filter));

  const handleOpen = (event) => setSelectedEvent(event);
  const handleClose = () => setSelectedEvent(null);

  const formatDate = (dateString) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getDay = (dateString) => String(new Date(dateString).getDate()).padStart(2, '0');
  const getMonth = (dateString) => new Date(dateString).toLocaleDateString('es-ES', { month: 'short' }).toUpperCase();
  const getWeekday = (dateString) => {
    const weekday = new Date(dateString).toLocaleDateString('es-ES', { weekday: 'long' });
    return weekday.charAt(0).toUpperCase() + weekday.slice(1);
  };
  const getQuarterLabel = (quarter) => `${quarter}º TRIMESTRE`;

  return (
    <section id="events" className="relative py-28 overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img src={CalendarBg} alt="Ambiente de adoración" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-slate-900/70"></div>
        <div className="absolute -top-32 -right-20 w-[520px] h-[520px] bg-blue-500/40 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -left-24 w-[520px] h-[520px] bg-amber-500/35 blur-3xl rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.55em] uppercase text-blue-200/80">
              <Calendar className="w-4 h-4" />
              Agenda oficial
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
              Calendario de Eventos <span className="text-amber-300">2026</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-200/80 text-base md:text-lg">
              Planea tu próximo paso y acompáñanos en cada momento clave de nuestra familia REFLEJO. Actualizamos esta agenda cada trimestre para que no te pierdas nada.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`relative px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  filter === value
                    ? 'bg-amber-300 text-slate-900 shadow-[0_10px_30px_-15px_rgba(251,191,36,0.7)]'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              onClick={() => handleOpen(event)}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 pb-8 flex flex-col gap-6 transition-all duration-300 cursor-pointer shadow-[0_25px_55px_-35px_rgba(15,23,42,0.8)] hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_35px_70px_-40px_rgba(15,23,42,0.8)] group"
            >
              <div className="absolute -top-7 left-7">
                <div className="w-16 h-16 rounded-full bg-slate-950 border border-white/20 flex flex-col items-center justify-center text-xs font-semibold uppercase tracking-[0.4em] text-slate-200 shadow-[0_8px_25px_-15px_rgba(15,23,42,1)] group-hover:border-white/40 transition-colors">
                  <span className="text-lg font-black leading-none">{String(event.id).padStart(2, '0')}</span>
                  <span className="text-[10px] tracking-[0.5em] mt-1">ID</span>
                </div>
              </div>

              <div className="flex items-start gap-5 mt-4">
                <div className="flex flex-col items-center justify-start min-w-[70px]">
                  <span className="text-[46px] font-black leading-none tracking-tight text-white">{getDay(event.date)}</span>
                  <span className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">{getMonth(event.date)}</span>
                </div>
                <div className="flex-1">
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-slate-300/80">
                    {getWeekday(event.date)}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-white group-hover:text-amber-200 transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-200/80 leading-relaxed">
                    {event.type} en {event.location}. Únete y compartamos este momento juntos.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-100/90">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">Horario</p>
                    <p className="font-semibold text-base tracking-wide text-white">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">Ubicación</p>
                    <p className="font-semibold text-base tracking-wide text-white">{event.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.55em] text-slate-300">
                  {getQuarterLabel(event.quarter)}
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-amber-400 text-xs font-bold uppercase tracking-[0.4em] text-slate-950 shadow-[0_10px_25px_-15px_rgba(37,99,235,0.8)] group-hover:shadow-[0_15px_30px_-12px_rgba(37,99,235,0.65)] transition-shadow">
                  {event.type}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-blue-500 via-slate-300 to-amber-400 opacity-80 rounded-b-3xl"></div>
            </article>
          ))}

          {filteredEvents.length === 0 && (
            <div className="col-span-full text-center py-20 border border-dashed border-white/20 rounded-3xl bg-white/5">
              <Calendar size={48} className="mx-auto mb-6 opacity-70" />
              <p className="text-slate-200/80 text-lg">No hay eventos programados para este periodo.</p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedEvent} onClose={handleClose} maxWidth="sm" fullWidth>
        {selectedEvent && (
          <>
            <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.6rem', pb: 1 }}>{selectedEvent.title}</DialogTitle>
            <DialogContent>
              <div className="flex items-center gap-2 mb-4 text-primary font-medium bg-blue-50 w-fit px-3 py-1 rounded-full text-sm">
                <Calendar size={16} />
                {formatDate(selectedEvent.date)}
              </div>

              <p className="text-gray-600 mb-6">
                Acompáñanos en este evento especial diseñado para edificar tu vida. No olvides invitar a un amigo.
              </p>

              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="font-medium">Hora:</span>
                  <span className="ml-2">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="font-medium">Ubicación:</span>
                  <span className="ml-2">{selectedEvent.location}</span>
                </div>
              </div>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <button onClick={handleClose} className="px-5 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-slate-900">
                Cerrar
              </button>
              <button className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-amber-400 shadow-md hover:shadow-lg transition-shadow">
                Guardar en calendario
              </button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  );
};

export default Events;

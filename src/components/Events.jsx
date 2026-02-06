import React, { useMemo, useState } from 'react';
import { Calendar, Megaphone, ShieldCheck, Star } from 'lucide-react';
import CalendarBg from '../assets/RUGIDOdeFE.webp';

const publicationLevels = {
  3: {
    stars: '⭐⭐⭐',
    title: 'Publicación Total',
    description: 'Eventos abiertos al público general, celebraciones y servicios especiales.',
  },
  2: {
    stars: '⭐⭐',
    title: 'Publicación Limitada',
    description: 'Eventos para grupos específicos (matrimonios, mujeres, jóvenes) que requieren registro previo.',
  },
  1: {
    stars: '⭐',
    title: 'Uso Interno / No Publicar',
    description: 'Capacitaciones, retiros de miembros o logística de la iglesia.',
  },
};

const monthlySchedule = [
  {
    month: 'Enero',
    events: [
      { date: 'Domingo 4', detail: 'Día de la Visión, Evangelístico y cena del Señor.', rating: 3 },
      { date: '7', detail: 'Consagración Metepec.', rating: 1 },
      { date: '9', detail: 'Consagración CDMX.', rating: 1 },
      { date: '20-22', detail: 'Capacitación en Los Mochis.', rating: 1 },
      { date: '28-29', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
      { date: '30-31', detail: 'Retiro Reflejo.', rating: 1 },
    ],
  },
  {
    month: 'Febrero',
    events: [
      { date: 'Domingo 1', detail: 'Evangelístico y cena del Señor.', rating: 3 },
      { date: 'Miércoles 11 y Viernes 13', detail: 'Cena de Amor (Metepec y CDMX).', rating: 2 },
      { date: '25-26', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
      { date: '27-28', detail: 'Retiro Reflejo.', rating: 1 },
    ],
  },
  {
    month: 'Marzo',
    events: [
      { date: 'Domingo 1', detail: 'Evangelístico y cena del Señor.', rating: 3 },
      { date: '25-26', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
    ],
  },
  {
    month: 'Abril (Semana Santa)',
    events: [
      { date: '2-3', detail: 'Jueves y Viernes Santo.', rating: 3 },
      { date: '4', detail: 'Bautizos.', rating: 3 },
      { date: '5', detail: 'Domingo de Resurrección (Obra y canto).', rating: 3 },
      { date: 'Sábado 18', detail: 'Salida de Mujeres.', rating: 2 },
      { date: 'Domingo 26', detail: 'Día del Niño (Fiesta de espuma).', rating: 3 },
      { date: '29-30', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
    ],
  },
  {
    month: 'Mayo',
    events: [
      { date: '2 y 9', detail: 'Conferencia Abrazadas (Metepec y CDMX).', rating: 2 },
      { date: 'Domingo 3', detail: 'Evangelístico y cena del Señor.', rating: 3 },
      { date: 'Domingo 10', detail: 'Día de la Madre.', rating: 3 },
      { date: '13 y 15', detail: 'Día del Maestro (Metepec y CDMX).', rating: 2 },
      { date: '27-28', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
      { date: '29-31', detail: 'Retiro Reflejo.', rating: 1 },
    ],
  },
  {
    month: 'Junio',
    events: [
      { date: 'Domingo 7', detail: 'Evangelístico y cena del Señor.', rating: 3 },
      { date: 'Domingo 21', detail: 'Día del Padre.', rating: 3 },
      { date: '24-25', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
      { date: '26-27', detail: 'Retiro de Matrimonios (Tentativo Acapulco).', rating: 2 },
    ],
  },
  {
    month: 'Julio',
    events: [
      { date: 'Domingo 5', detail: 'Evangelístico y cena del Señor.', rating: 3 },
      { date: '6-10', detail: 'Escuela Bíblica de Vacaciones (EBV).', rating: 3 },
      { date: 'Viernes 10', detail: 'Congreso Juvenil.', rating: 2 },
      { date: 'Sábado 18', detail: 'Camping Familiar.', rating: 3 },
      { date: '22-23', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
    ],
  },
  {
    month: 'Agosto',
    events: [
      { date: 'Domingo 2', detail: 'Evangelístico y cena del Señor.', rating: 3 },
      { date: 'Domingo 16', detail: 'Bendición de regreso a clases.', rating: 3 },
      { date: '26-27', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
      { date: '28-29', detail: 'Retiro Reflejo.', rating: 1 },
    ],
  },
  {
    month: 'Septiembre',
    events: [
      { date: 'Domingo 6', detail: 'Evangelístico y cena del Señor.', rating: 3 },
      { date: '9 y 11', detail: 'Taco Break Mexicano (Metepec y CDMX).', rating: 2 },
      { date: 'Domingo 13', detail: 'Servicio en la Brecha por México.', rating: 3 },
      { date: 'Domingo 27', detail: 'Día de la Biblia (Exposición).', rating: 3 },
      { date: '24 y 30', detail: 'Matrimonios (CDMX y Metepec).', rating: 2 },
    ],
  },
  {
    month: 'Octubre',
    events: [
      { date: 'Domingo 4', detail: 'Evangelístico y cena del Señor.', rating: 3 },
      { date: 'Domingo 11', detail: 'Día del Pastor.', rating: 3 },
      { date: '23-25', detail: 'Retiro Reflejo.', rating: 1 },
      { date: '28-29', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
      { date: 'Viernes 30', detail: 'Congreso Día de la Reforma.', rating: 3 },
    ],
  },
  {
    month: 'Noviembre',
    events: [
      { date: 'Domingo 1', detail: 'Evangelístico, Cena del Señor y Día de Misiones.', rating: 3 },
      { date: 'Domingo 15', detail: 'Bautismos #2.', rating: 3 },
      { date: '18 y 26', detail: 'Matrimonios (Metepec y CDMX).', rating: 2 },
      { date: '25 y 27', detail: 'Cena de Acción de Gracias (Metepec y CDMX).', rating: 2 },
      { date: 'Domingo 29', detail: 'Servicio de Acción de Gracias.', rating: 3 },
    ],
  },
  {
    month: 'Diciembre',
    events: [
      { date: '4-6', detail: 'Retiro Reflejo.', rating: 1 },
      { date: 'Domingo 6', detail: 'Aniversario Iglesia Reflejo CDMX.', rating: 3 },
      { date: 'Domingo 13', detail: 'Aniversario Iglesia Reflejo Metepec.', rating: 3 },
      { date: '16 y 18', detail: 'Posadas (Metepec y CDMX).', rating: 2 },
      { date: '20', detail: 'Especial Navideño.', rating: 3 },
      { date: '24-25', detail: 'Navidad.', rating: 3 },
      { date: '31', detail: 'Cena de Año Nuevo.', rating: 3 },
    ],
  },
];

const visibilityStyles = {
  3: 'bg-white/16 border-amber-300/60 text-white opacity-100 shadow-[0_10px_40px_-20px_rgba(251,191,36,0.65)]',
  2: 'bg-white/10 border-white/25 text-slate-100 opacity-85',
  1: 'bg-slate-900/50 border-white/10 text-slate-300 opacity-65',
};

const audienceFilters = [
  { key: 'all', label: 'Todas las publicaciones' },
  { key: '3', label: '⭐⭐⭐ Público general' },
  { key: '2', label: '⭐⭐ Publicación limitada' },
  { key: '1', label: '⭐ Uso interno' },
];

const Events = () => {
  const [audience, setAudience] = useState('all');

  const filteredSchedule = useMemo(() => {
    if (audience === 'all') return monthlySchedule;

    return monthlySchedule
      .map((month) => ({
        ...month,
        events: month.events.filter((event) => String(event.rating) === audience),
      }))
      .filter((month) => month.events.length > 0);
  }, [audience]);

  return (
    <section id="events" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0">
        <img src={CalendarBg} alt="Calendario de Iglesia Reflejo" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-slate-950/90" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4">
        <div className="mb-10 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.45em] text-blue-200/80">
                <Calendar className="h-4 w-4" /> Agenda anual
              </span>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Calendario 2026 y política de publicación</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {audienceFilters.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setAudience(item.key)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    audience === item.key
                      ? 'border-amber-300/80 bg-amber-300 text-slate-900'
                      : 'border-white/25 bg-white/5 text-slate-200 hover:bg-white/15'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {Object.entries(publicationLevels)
              .sort((a, b) => Number(b[0]) - Number(a[0]))
              .map(([key, level]) => (
                <article key={key} className="rounded-2xl border border-white/15 bg-slate-900/40 p-4">
                  <p className="text-sm font-bold text-amber-200">{level.stars} {level.title}</p>
                  <p className="mt-2 text-sm text-slate-200/80">{level.description}</p>
                </article>
              ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredSchedule.map((month) => (
            <article key={month.month} className="rounded-3xl border border-white/15 bg-slate-900/35 p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-amber-200">{month.month}</h3>

              <ul className="mt-5 space-y-3">
                {month.events.map((event) => (
                  <li key={`${month.month}-${event.date}-${event.detail}`} className={`rounded-2xl border p-3 transition ${visibilityStyles[event.rating]}`}>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.08em]">{event.date}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold">
                        <Star className="h-3.5 w-3.5" />
                        {publicationLevels[event.rating].stars}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">{event.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-300/90">
          <Megaphone className="h-4 w-4" />
          Los eventos ⭐⭐⭐ se muestran con mayor fuerza visual; ⭐⭐ y ⭐ se muestran más translúcidos.
          <ShieldCheck className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};

export default Events;

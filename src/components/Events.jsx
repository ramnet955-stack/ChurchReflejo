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
      { date: 'Domingo 4', detail: 'Día de la Visión.', rating: 3, category: 'Visión' },
      { date: 'Domingo 4', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: '7', detail: 'Consagración Metepec.', rating: 1, category: 'Consagración' },
      { date: '9', detail: 'Consagración CDMX.', rating: 1, category: 'Consagración' },
      { date: '20-22', detail: 'Mochis capacitación.', rating: 1, category: 'Capacitación' },
      { date: '28', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '29', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
      { date: '30-31', detail: 'Retiro Reflejo.', rating: 1, category: 'Retiro' },
    ],
  },
  {
    month: 'Febrero',
    events: [
      { date: 'Domingo 1', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: 'Miércoles 11', detail: 'Cena de Amor Metepec.', rating: 2, category: 'Cena de Amor' },
      { date: 'Viernes 13', detail: 'Cena de Amor CDMX.', rating: 2, category: 'Cena de Amor' },
      { date: '25', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '26', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
      { date: '27-28', detail: 'Retiro Reflejo.', rating: 1, category: 'Retiro' },
    ],
  },
  {
    month: 'Marzo',
    events: [
      { date: 'Domingo 1', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: '25', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '26', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
    ],
  },
  {
    month: 'Abril (Semana Santa)',
    events: [
      { date: '2', detail: 'Jueves Santo.', rating: 3, category: 'Semana Santa' },
      { date: '3', detail: 'Viernes Santo.', rating: 3, category: 'Semana Santa' },
      { date: '4', detail: 'Bautizos.', rating: 3, category: 'Bautizos' },
      { date: '5', detail: 'Domingo de Resurrección (Obra y canto).', rating: 3, category: 'Semana Santa' },
      { date: 'Sábado 18', detail: 'Salida Mujeres (día completo).', rating: 2, category: 'Salida' },
      { date: 'Domingo 26', detail: 'Día del Niño (espuma).', rating: 3, category: 'Celebración' },
      { date: '29', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '30', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
    ],
  },
  {
    month: 'Mayo',
    events: [
      { date: '2', detail: 'Conferencia Abrazadas (Metepec).', rating: 2, category: 'Conferencia' },
      { date: 'Domingo 3', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: '9', detail: 'Conferencia Abrazadas (CDMX).', rating: 2, category: 'Conferencia' },
      { date: 'Domingo 10', detail: 'Día de la Madre.', rating: 3, category: 'Celebración' },
      { date: 'Miércoles 13', detail: 'Día del Maestro Metepec.', rating: 2, category: 'Celebración' },
      { date: 'Viernes 15', detail: 'Día del Maestro CDMX.', rating: 2, category: 'Celebración' },
      { date: '27', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '28', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
      { date: '29-31', detail: 'Retiro Reflejo.', rating: 1, category: 'Retiro' },
    ],
  },
  {
    month: 'Junio',
    events: [
      { date: 'Domingo 7', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: 'Domingo 21', detail: 'Día del Padre.', rating: 3, category: 'Celebración' },
      { date: '24', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '25', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
      { date: 'Viernes 26-27', detail: 'Retiro de Matrimonios (Acapulco?).', rating: 1, category: 'Retiro' },
    ],
  },
  {
    month: 'Julio',
    events: [
      { date: 'Domingo 5', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: '6-10', detail: 'EBV.', rating: 3, category: 'EBV' },
      { date: 'Viernes 10', detail: 'Congreso Juvenil.', rating: 2, category: 'Congreso' },
      { date: 'Sábado 18', detail: 'Camping Familiar (todo el día / noche).', rating: 3, category: 'Campamento' },
      { date: '22', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '23', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
    ],
  },
  {
    month: 'Agosto',
    events: [
      { date: 'Domingo 2', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: 'Domingo 16', detail: 'Bendición regreso a clases.', rating: 3, category: 'Celebración' },
      { date: '26', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '27', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
      { date: '28-29', detail: 'Retiro Reflejo.', rating: 1, category: 'Retiro' },
    ],
  },
  {
    month: 'Septiembre',
    events: [
      { date: 'Domingo 6', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: '9', detail: 'Taco Break Mexicano (Metepec).', rating: 2, category: 'Convivio' },
      { date: '11', detail: 'Taco Break Mexicano (CDMX).', rating: 2, category: 'Convivio' },
      { date: 'Domingo 13', detail: 'Servicio en la Brecha por México.', rating: 3, category: 'Servicio' },
      { date: '24', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
      { date: 'Domingo 27', detail: 'Día de la Biblia (Exposición).', rating: 3, category: 'Celebración' },
      { date: '30', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
    ],
  },
  {
    month: 'Octubre',
    events: [
      { date: 'Domingo 4', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: 'Domingo 11', detail: 'Día del Pastor.', rating: 3, category: 'Celebración' },
      { date: '23-25', detail: 'Retiro Reflejo.', rating: 1, category: 'Retiro' },
      { date: '28', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '29', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
      { date: 'Viernes 30', detail: 'Congreso Día de la Reforma.', rating: 3, category: 'Congreso' },
    ],
  },
  {
    month: 'Noviembre',
    events: [
      { date: 'Domingo 1', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: 'Domingo 1', detail: 'Día de Misiones.', rating: 3, category: 'Celebración' },
      { date: 'Domingo 15', detail: 'Bautismos #2.', rating: 3, category: 'Bautizos' },
      { date: '18', detail: 'Matrimonios Metepec.', rating: 2, category: 'Matrimonios' },
      { date: '25', detail: 'Cena Acción de Gracias Metepec.', rating: 2, category: 'Acción de Gracias' },
      { date: '26', detail: 'Matrimonios CDMX.', rating: 2, category: 'Matrimonios' },
      { date: '27', detail: 'Cena Acción de Gracias CDMX.', rating: 2, category: 'Acción de Gracias' },
      { date: 'Domingo 29', detail: 'Acción de Gracias.', rating: 3, category: 'Acción de Gracias' },
    ],
  },
  {
    month: 'Diciembre',
    events: [
      { date: '4-6', detail: 'Retiro Reflejo.', rating: 1, category: 'Retiro' },
      { date: 'Domingo 6', detail: 'Evangelístico y cena del Señor.', rating: 3, category: 'Evangelístico' },
      { date: 'Domingo 6', detail: 'Aniversario Iglesia Reflejo CDMX.', rating: 3, category: 'Aniversario' },
      { date: 'Domingo 13', detail: 'Aniversario Iglesia Reflejo Metepec.', rating: 3, category: 'Aniversario' },
      { date: 'Miércoles 16', detail: 'Posada #1 Metepec.', rating: 2, category: 'Posada' },
      { date: 'Viernes 18', detail: 'Posada #2 CDMX.', rating: 2, category: 'Posada' },
      { date: '20', detail: 'Especial Navideño.', rating: 3, category: 'Navidad' },
      { date: '24-25', detail: 'Navidad (CDMX).', rating: 3, category: 'Navidad' },
      { date: '31', detail: 'Cena de Año Nuevo (Metepec).', rating: 3, category: 'Celebración' },
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
          {filteredSchedule.map((month) => {
            const groupedEvents = month.events.reduce((acc, event) => {
              const key = event.category || 'Otros';
              acc[key] = acc[key] || [];
              acc[key].push(event);
              return acc;
            }, {});

            return (
              <article key={month.month} className="rounded-3xl border border-white/15 bg-slate-900/35 p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-amber-200">{month.month}</h3>

                <div className="mt-5 space-y-5">
                  {Object.entries(groupedEvents).map(([category, events]) => (
                    <div key={`${month.month}-${category}`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{category}</p>
                      <ul className="mt-3 space-y-3">
                        {events.map((event) => (
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
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
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

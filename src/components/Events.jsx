import React, { useMemo, useState } from 'react';
import { Calendar, Megaphone, ShieldCheck, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const publicationLevels = {
  3: {
    stars: '⭐⭐⭐',
    title: 'Publicación Total',
    description: 'Eventos abiertos al público general, celebraciones y servicios especiales.',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
    badge: 'bg-blue-600 text-white'
  },
  2: {
    stars: '⭐⭐',
    title: 'Publicación Limitada',
    description: 'Eventos para grupos específicos que requieren registro previo.',
    color: 'bg-amber-50 text-amber-700 border-amber-100',
    badge: 'bg-amber-500 text-white'
  },
  1: {
    stars: '⭐',
    title: 'Uso Interno',
    description: 'Capacitaciones, retiros de miembros o logística interna.',
    color: 'bg-slate-50 text-slate-600 border-slate-200',
    badge: 'bg-slate-600 text-white'
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

const audienceFilters = [
  { key: 'all', label: 'Ver Todo' },
  { key: '3', label: 'Público General', stars: '⭐⭐⭐' },
  { key: '2', label: 'Limitado', stars: '⭐⭐' },
  { key: '1', label: 'Interno', stars: '⭐' },
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
    <section id="events" className="relative bg-slate-50 min-h-screen py-2 md:py-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="relative container mx-auto max-w-7xl px-4 md:px-6">

        {/* Header Section */}
        <div className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest border border-slate-200 mb-2 flex items-center gap-2">
              <Calendar size={14} className="text-secondary" /> Agenda 2026
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Calendario <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Reflejo</span>
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Mantente al tanto de nuestras actividades, celebraciones y eventos especiales.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {audienceFilters.map((item) => (
              <button
                key={item.key}
                onClick={() => setAudience(item.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 md:text-base border ${audience === item.key
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20 transform scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
              >
                {item.label} {item.stars && <span className="ml-1 opacity-70 text-xxs bg-white/20 px-1.5 py-0.5 rounded-md inline-block align-middle">{item.stars}</span>}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Legend Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
          {Object.entries(publicationLevels).map(([key, level], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border ${level.color} backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{level.stars}</span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${level.badge}`}>
                  Nivel {key}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1">{level.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed font-medium">{level.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSchedule.map((month, idx) => {
              // Group events by category
              const groupedEvents = month.events.reduce((acc, event) => {
                const key = event.category || 'Otros';
                acc[key] = acc[key] || [];
                acc[key].push(event);
                return acc;
              }, {});

              return (
                <motion.article
                  key={month.month}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                    <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">{month.month}</h3>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Calendar size={20} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    {Object.entries(groupedEvents).map(([category, events]) => (
                      <div key={`${month.month}-${category}`} className="relative">
                        <div className="absolute -left-3 top-2 w-1 h-full bg-slate-100 rounded-full"></div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 pl-3">{category}</h4>
                        <div className="space-y-3">
                          {events.map((event, i) => (
                            <div
                              key={i}
                              className={`pl-3 pr-2 py-1.5 rounded-lg transition-colors border-l-2 ${String(event.rating) === '3' ? 'border-l-blue-500 bg-blue-50/30' :
                                String(event.rating) === '2' ? 'border-l-amber-400' : 'border-l-slate-300'
                                }`}
                            >
                              <div className="flex justify-between items-start gap-3">
                                <span className="font-bold text-slate-800 text-sm whitespace-nowrap">{event.date}</span>
                                {String(event.rating) === '3' && <Star size={12} className="text-blue-500 fill-blue-500 mt-1 shrink-0" />}
                              </div>
                              <p className="text-sm text-slate-600 font-medium leading-snug mt-1">{event.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-8 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> Evento Principal
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div> Registro Requerido
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-300"></div> Interno
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

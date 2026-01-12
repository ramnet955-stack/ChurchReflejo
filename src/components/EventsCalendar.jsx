import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, List } from 'lucide-react';

const localizer = momentLocalizer(moment);

const EventsCalendar = ({ events = [] }) => {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showList, setShowList] = useState(false);

  const eventStyleGetter = (event) => {
    const colors = {
      Recurrente: '#1e3a8a',
      Especial: '#f59e0b',
      Campamento: '#ec4899',
      Conferencia: '#8b5cf6',
      Comunidad: '#10b981',
      Celebración: '#ef4444'
    };
    
    return {
      style: {
        backgroundColor: colors[event.type] || '#1e3a8a',
        borderRadius: '6px',
        opacity: 0.9,
        color: 'white',
        border: 'none',
        display: 'block'
      }
    };
  };

  const formats = {
    monthHeaderFormat: 'MMMM YYYY',
    dayHeaderFormat: 'dddd, D [de] MMMM [de] YYYY',
    dayRangeHeaderFormat: ({ start, end }) => 
      `${moment(start).format('D [de] MMMM')} - ${moment(end).format('D [de] MMMM [de] YYYY')}`
  };

  return (
    <>
      <Helmet>
        <title>Calendario de Eventos - Iglesia Bíblica Reflejo</title>
        <meta name="description" content="Consulta todos los eventos, servicios y actividades de la Iglesia Bíblica Reflejo." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Calendario de Eventos</h1>
          <p className="text-xl text-gray-600">Únete a nuestras actividades y servicios</p>
        </motion.div>

        {/* Vista de alternancia */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setShowList(false)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              !showList 
                ? 'bg-amber-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            <CalendarIcon className="w-5 h-5" />
            Calendario
          </button>
          <button
            onClick={() => setShowList(true)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              showList 
                ? 'bg-amber-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            <List className="w-5 h-5" />
            Lista
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          {!showList ? (
            <div className="h-[700px]">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                view={view}
                onView={setView}
                date={date}
                onNavigate={setDate}
                eventPropGetter={eventStyleGetter}
                formats={formats}
                views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
                popup
                selectable
                onSelectEvent={(event) => setSelectedEvent(event)}
                className="rounded-lg"
                toolbar={false}
              />
              
              {/* Navegación personalizada */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <button
                  onClick={() => setDate(moment(date).subtract(1, 'month').toDate())}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-amber-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Mes anterior
                </button>
                <h2 className="text-xl font-bold text-gray-900">
                  {moment(date).format('MMMM YYYY')}
                </h2>
                <button
                  onClick={() => setDate(moment(date).add(1, 'month').toDate())}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-amber-600 transition-colors"
                >
                  Mes siguiente
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {events
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center text-white ${
                      event.type === 'Recurrente' ? 'bg-blue-900' :
                      event.type === 'Especial' ? 'bg-amber-500' :
                      event.type === 'Campamento' ? 'bg-pink-500' :
                      event.type === 'Conferencia' ? 'bg-purple-600' :
                      event.type === 'Comunidad' ? 'bg-green-500' :
                      'bg-red-500'
                    }`}>
                      <span className="text-lg font-bold">{moment(event.date).format('D')}</span>
                      <span className="text-xs uppercase">{moment(event.date).format('MMM')}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.time} • {event.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Recurrente' ? 'bg-blue-100 text-blue-700' :
                      event.type === 'Especial' ? 'bg-amber-100 text-amber-700' :
                      event.type === 'Campamento' ? 'bg-pink-100 text-pink-700' :
                      event.type === 'Conferencia' ? 'bg-purple-100 text-purple-700' :
                      event.type === 'Comunidad' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {event.type}
                    </span>
                  </motion.div>
                ))}
            </div>
          )}
        </motion.div>

        {/* Modal de detalle de evento */}
        {selectedEvent && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl max-w-md w-full p-6"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Fecha:</strong> {moment(selectedEvent.date).format('dddd, D [de] MMMM [de] YYYY')}</p>
                <p><strong>Hora:</strong> {selectedEvent.time}</p>
                <p><strong>Lugar:</strong> {selectedEvent.location}</p>
                <p><strong>Tipo:</strong> {selectedEvent.type}</p>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-6 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default EventsCalendar;

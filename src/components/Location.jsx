import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Sedes</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">
            Estamos expandiendo el Reino. Encuentra la sede más cercana a ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
           {/* Section A: Maps */}
           <div className="space-y-8">
              {/* Google Maps Embed CdMx */}
              <div className="bg-gray-200 rounded-xl h-64 md:h-80 w-full overflow-hidden shadow-inner relative flex items-center justify-center">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0577731466396!2d-99.12489448965722!3d19.453075781754904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f940bfe5dad9%3A0x21056947a6c295a8!2sSal%C3%B3n%20Dubai!5e0!3m2!1ses!2smx!4v1767814803930!5m2!1ses!2smx" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Sede CdMx"
                 ></iframe>
                 <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold shadow">CdMx</div>
              </div>

               {/* Google Maps Embed Metepec */}
               <div className="bg-gray-200 rounded-xl h-64 md:h-80 w-full overflow-hidden shadow-inner relative flex items-center justify-center">
                 <iframe 
                    src="https://maps.google.com/maps?q=Calle+Leona+Vicario+456,+Metepec,+Estado+de+Mexico&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Sede Metepec"
                 ></iframe>
                 <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold shadow">Metepec</div>
              </div>

              {/* Expansion Map Graphic */}
              <div className="bg-blue-900 text-white rounded-xl p-8 relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Nuestra Expansión</h3>
                    <p className="text-blue-100 text-sm max-w-xs mb-6">
                       Dios nos ha permitido plantar iglesias en puntos estratégicos de México.
                    </p>
                    {/* SVG Map of Mexico Stylized */}
                    <svg viewBox="0 0 100 60" className="w-full h-auto drop-shadow-lg opacity-80" fill="none" stroke="currentColor" strokeWidth="0.5">
                       {/* Simplified Mexico Shape Outline */}
                       <path d="M10,20 Q20,10 40,25 T70,30 T90,20 L95,25 Q90,50 60,55 T30,50 Q10,40 10,20 Z" className="text-blue-400/30" fill="rgba(96, 165, 250, 0.2)" />
                       {/* Points */}
                       <circle cx="50" cy="40" r="1.5" className="text-secondary fill-current animate-pulse" />
                       <circle cx="48" cy="38" r="1.5" className="text-secondary fill-current" />
                       <text x="53" y="41" fontSize="3" fill="white">CdMx</text>
                       <text x="42" y="37" fontSize="3" fill="white">Metepec</text>
                    </svg>
                 </div>
                 {/* Decorative circles */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
              </div>
           </div>

           {/* Section B: Details */}
           <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Sede CdMx */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                 <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-primary rounded-full mb-4">
                    <MapPin size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Sede CdMx</h3>
                 <p className="text-gray-600 text-sm mb-4">El 14 38, Popular Rastro, Venustiano Carranza, 15220 Ciudad de México, CDMX</p>
                 
                 <div className="space-y-3">
                    <div className="flex items-start gap-3">
                       <Clock size={18} className="text-secondary mt-0.5" />
                       <div>
                          <p className="font-bold text-gray-800 text-sm">Domingos</p>
                          <p className="text-gray-600 text-sm">05:00 PM - Reunión General</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-3">
                       <Users size={18} className="text-secondary mt-0.5" />
                       <div className="space-y-1">
                          <div>
                             <p className="font-bold text-gray-800 text-sm">Martes</p>
                             <p className="text-gray-600 text-xs">09:30 PM - Gen R (Vía Zoom)</p>
                          </div>
                          <div>
                             <p className="font-bold text-gray-800 text-sm">Viernes</p>
                             <p className="text-gray-600 text-xs"><span className="font-semibold">1er Viernes:</span> Oración 07:00 PM</p>
                             <p className="text-gray-600 text-xs"><span className="font-semibold">Resto:</span> Mujeres 07:00 PM</p>
                             <p className="text-gray-600 text-xs pl-8">Discipulado 08:00 PM</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <button className="mt-6 w-full py-2 border border-primary text-primary rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                    Cómo llegar
                 </button>
              </div>

              {/* Sede Metepec */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                 <div className="inline-flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-600 rounded-full mb-4">
                    <MapPin size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Sede Metepec</h3>
                 <p className="text-gray-600 text-sm mb-4">Calle Leona Vicario 456, Metepec, Estado de México</p>
                 
                 <div className="space-y-3">
                    <div className="flex items-start gap-3">
                       <Clock size={18} className="text-secondary mt-0.5" />
                       <div>
                          <p className="font-bold text-gray-800 text-sm">Domingos</p>
                          <p className="text-gray-600 text-sm">10:00 AM - Reunión General</p>
                       </div>
                    </div>
                 </div>

                 <button className="mt-6 w-full py-2 border border-primary text-primary rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                    Cómo llegar
                 </button>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

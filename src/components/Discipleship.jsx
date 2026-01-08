import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, Heart, Sun, Users, LifeBuoy } from 'lucide-react';
import anime from 'animejs';

// Assets (Asegúrate de que las rutas sean correctas)
import RLogo from '../assets/logo.png';

// Configuración de pasos basada en la Imagen "Hexágono de Colores"
// Orden Visual (Sentido Horario empezando desde arriba a la derecha):
// 1. Amarillo (Sun/Book) -> Reconócelo
// 2. Verde (House/Shield) -> Refúgiate
// 3. Rosa (Heart) -> Restáurate
// 4. Azul Oscuro (Leaf/Sun) -> Renuévate (La hoja azul de la imagen)
// 5. Naranja (People) -> Relaciónate
// 6. Rojo (Globe/LifeBuoy) -> Rescátalos
const steps = [
  { 
    id: 1, 
    title: 'Reconócelo', 
    subtitle: 'Reconoce a Jesús como tu Señor y Salvador.',
    icon: BookOpen, 
    desc: 'El inicio del viaje empieza con la fe. Reconocer que necesitamos a Jesús es el primer paso para una vida transformada.', 
    color: '#fbbf24', // Amarillo Intenso
    accentColor: '#d97706',
    textColor: 'text-amber-500'
  },
  { 
    id: 2, 
    title: 'Refúgiate', 
    subtitle: 'Encuentra seguridad en la comunidad.',
    icon: Shield, 
    desc: 'La iglesia es tu refugio seguro. Aquí encontrarás protección, apoyo y una familia que te ama.', 
    color: '#15803d', // Verde Bosque
    accentColor: '#166534',
    textColor: 'text-green-700'
  },
  { 
    id: 3, 
    title: 'Restáurate', 
    subtitle: 'Permite que Dios sane tus heridas.',
    icon: Heart, 
    desc: 'Dios es experto en sanar corazones rotos. En este paso trabajamos en la sanidad interior y el perdón.', 
    color: '#ec4899', // Rosa Fuerte
    accentColor: '#be185d',
    textColor: 'text-pink-600'
  },
  { 
    id: 4, 
    title: 'Renuévate', 
    subtitle: 'Transforma tu mente y tus hábitos.',
    icon: Sun, // Representando la hoja/renovación
    desc: 'Aprende a pensar como Jesús. La renovación de la mente es clave para cambiar nuestra forma de vivir.', 
    color: '#1e3a8a', // Azul Oscuro Profundo
    accentColor: '#172554',
    textColor: 'text-blue-900'
  },
  { 
    id: 5, 
    title: 'Relaciónate', 
    subtitle: 'Conecta con otros creyentes.',
    icon: Users, 
    desc: 'No fuimos creados para estar solos. Construye amistades significativas que te impulsen a crecer.', 
    color: '#f97316', // Naranja
    accentColor: '#c2410c',
    textColor: 'text-orange-600'
  },
  { 
    id: 6, 
    title: 'Rescátalos', 
    subtitle: 'Comparte el mensaje de esperanza.',
    icon: LifeBuoy, 
    desc: 'Tu historia puede cambiar la vida de alguien más. Aprende a compartir tu fe con valentía.', 
    color: '#dc2626', // Rojo
    accentColor: '#991b1b',
    textColor: 'text-red-600'
  },
];

const HexagonSlice = ({ step, index, isActive, onClick, onHover, onLeave }) => {
  const groupRef = useRef(null);
  const contentRef = useRef(null);
  
  const center = { x: 250, y: 250 };
  const innerRadius = 95; 
  const outerRadius = 240; 
  
  // ÁNGULOS:
  // Para que el amarillo (índice 0) esté arriba a la derecha con la punta del hexágono hacia arriba:
  // El sector 0 debe ir de -90 grados (12 en punto) a -30 grados (2 en punto).
  const angleOffset = -90; 
  const toRad = (deg) => (deg * Math.PI) / 180;
  
  const startAngle = (index * 60) + angleOffset;
  const endAngle = ((index + 1) * 60) + angleOffset;
  
  // EFECTO DE ESPIRAL (APERTURE):
  // Para lograr que las líneas no vayan rectas al centro, sino que giren (como en la imagen),
  // rotamos los puntos interiores unos grados más que los exteriores.
  const skew = 20; // Grados de rotación para el efecto espiral

  // Coordenadas Externas (Normales)
  const x1_out = center.x + outerRadius * Math.cos(toRad(startAngle));
  const y1_out = center.y + outerRadius * Math.sin(toRad(startAngle));
  const x2_out = center.x + outerRadius * Math.cos(toRad(endAngle));
  const y2_out = center.y + outerRadius * Math.sin(toRad(endAngle));
  
  // Coordenadas Internas (Desfasadas para crear la diagonal)
  const x1_in = center.x + innerRadius * Math.cos(toRad(startAngle + skew));
  const y1_in = center.y + innerRadius * Math.sin(toRad(startAngle + skew));
  const x2_in = center.x + innerRadius * Math.cos(toRad(endAngle + skew));
  const y2_in = center.y + innerRadius * Math.sin(toRad(endAngle + skew));
  
  // Path con borde blanco grueso integrado visualmente
  const pathData = `M ${x1_in} ${y1_in} L ${x1_out} ${y1_out} L ${x2_out} ${y2_out} L ${x2_in} ${y2_in} Z`;

  // Centro visual para el icono (compensando el skew)
  const midAngle = (startAngle + endAngle) / 2 + (skew / 2);
  const contentRadius = (innerRadius + outerRadius) / 2;
  const cx = center.x + contentRadius * Math.cos(toRad(midAngle));
  const cy = center.y + contentRadius * Math.sin(toRad(midAngle));

  // Animación de "Explosión" al activar
  const moveDist = 15;
  const moveX = moveDist * Math.cos(toRad(midAngle));
  const moveY = moveDist * Math.sin(toRad(midAngle));

  useEffect(() => {
     if (isActive) {
        anime({
            targets: groupRef.current,
            translateX: moveX,
            translateY: moveY,
            scale: 1.05,
            duration: 500,
            easing: 'easeOutQuart'
        });
     } else {
        anime({
            targets: groupRef.current,
            translateX: 0,
            translateY: 0,
            scale: 1,
            duration: 400,
            easing: 'easeOutQuad'
        });
     }
  }, [isActive]);

  return (
    <g 
      ref={groupRef}
      onClick={() => onClick(step)}
      className="cursor-pointer group select-none"
      style={{ transformOrigin: '250px 250px' }}
    >
      {/* Sombra suave */}
      <path d={pathData} fill="black" fillOpacity="0.1" transform="translate(3,3)" filter="url(#blur)" />

      {/* Slice Principal */}
      <path
        d={pathData}
        fill={step.color}
        stroke="white"
        strokeWidth="6" // Borde blanco grueso como en la imagen
        className="transition-all duration-300 hover:brightness-110"
      />
      
      {/* Brillo Superior para efecto 'plástico' sutil */}
      <path d={pathData} fill="url(#gloss)" style={{ mixBlendMode: 'overlay', opacity: 0.3 }} pointerEvents="none" />

      {/* Contenido (Icono) */}
      <foreignObject 
        x={cx - 40} 
        y={cy - 40} 
        width="80" 
        height="80" 
        className="pointer-events-none"
      >
        <div ref={contentRef} className="flex flex-col items-center justify-center h-full text-white drop-shadow-md">
          <step.icon size={30} strokeWidth={2.5} />
        </div>
      </foreignObject>
    </g>
  );
};

const Discipleship = () => {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section className="py-20 bg-white min-h-screen flex flex-col items-center justify-center relative font-sans">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight uppercase">
             TU CAMINO EN <span className="text-blue-600">REFLEJO</span>
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* --- SVG HEXÁGONO --- */}
          <div className="relative w-[380px] h-[380px] md:w-[480px] md:h-[480px] flex-shrink-0 select-none">
             <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible drop-shadow-2xl">
               <defs>
                 <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="white" stopOpacity="0.8"/>
                   <stop offset="100%" stopColor="white" stopOpacity="0"/>
                 </linearGradient>
                 <filter id="blur">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                 </filter>
               </defs>

               {/* Renderizar Slices */}
               {steps.map((step, index) => (
                 <HexagonSlice
                   key={step.id}
                   step={step}
                   index={index}
                   isActive={activeStep.id === step.id}
                   onClick={setActiveStep}
                 />
               ))}

               {/* CENTRO BLANCO PURO (Como en imagen jpg) */}
               <g style={{ transformOrigin: '250px 250px' }}>
                 {/* Hexágono interior blanco rotado para coincidir con el corte */}
                 <polygon 
                    points="250,155 332,197 332,302 250,345 168,302 168,197" 
                    fill="white" 
                    className="drop-shadow-inner"
                    transform="rotate(20, 250, 250)" 
                 />
                 
                 {/* Logo central (Opcional) */}
                 <image 
                    href={RLogo} 
                    x="210" 
                    y="210" 
                    height="80" 
                    width="80" 
                    style={{ opacity: 0.9 }}
                 />
               </g>
             </svg>
          </div>

          {/* --- TARJETA DE INFORMACIÓN --- */}
          <div className="w-full max-w-[450px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep?.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden"
              >
                  {/* Borde superior de color */}
                  <div 
                    className="absolute top-0 left-0 w-full h-2" 
                    style={{ backgroundColor: activeStep.color }}
                  ></div>

                  {/* Icono Flotante */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg transform -translate-y-2"
                    style={{ backgroundColor: activeStep.color }}
                  >
                      <activeStep.icon size={28} />
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mb-2">
                    {activeStep.title}
                  </h3>
                  
                  <p className={`font-bold text-lg mb-4 ${activeStep.textColor}`}>
                    {activeStep.subtitle}
                  </p>

                  <p className="text-gray-500 leading-relaxed mb-8">
                      {activeStep.desc}
                  </p>

                  <Link 
                    to={`/discipulado/${activeStep.id}`}
                    className="flex items-center justify-between w-full py-4 px-6 rounded-xl bg-slate-900 text-white font-bold hover:bg-black transition-all group shadow-lg"
                  >
                    <span>Ver Comportamientos</span>
                    <span className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                  </Link>
              </motion.div>
            </AnimatePresence>
            
             {/* Indicadores Móviles */}
             <div className="flex justify-center gap-3 mt-8 lg:hidden">
                {steps.map((s) => (
                    <button 
                        key={s.id}
                        onClick={() => setActiveStep(s)}
                        className={`rounded-full transition-all duration-300 h-2 ${activeStep.id === s.id ? 'w-8' : 'w-2 bg-gray-300'}`}
                        style={{ backgroundColor: activeStep.id === s.id ? s.color : undefined }}
                    />
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Discipleship;
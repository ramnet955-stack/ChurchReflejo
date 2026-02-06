import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, Heart, Sun, Users, LifeBuoy } from 'lucide-react';
import anime from 'animejs';

// Assets
import RLogo from '../assets/logo.webp';
import ReconocerImg from '../assets/Reconocer.webp';
import RefugiarseImg from '../assets/refugiarse.webp';
import RestaurarImg from '../assets/Restaurar.webp';
import RenovarImg from '../assets/Renovar.webp';
import RelacionarImg from '../assets/Relacionar.webp';
import RescatarImg from '../assets/Rescatar.webp';

// Configuración de pasos
const steps = [
  { 
    id: 1, 
    title: 'Reconócelo', 
    subtitle: 'Reconoce a Jesús como tu Señor y Salvador.',
    icon: BookOpen,
    img: ReconocerImg,
    desc: 'El inicio del viaje empieza con la fe. Reconocer que necesitamos a Jesús es el primer paso para una vida transformada.', 
    color: '#fbbf24',
    accentColor: '#d97706',
    textColor: 'text-amber-500'
  },
  { 
    id: 2, 
    title: 'Refúgiate', 
    subtitle: 'Encuentra seguridad en la comunidad.',
    icon: Shield, 
    img: RefugiarseImg,
    desc: 'La iglesia es tu refugio seguro. Aquí encontrarás protección, apoyo y una familia que te ama.', 
    color: '#15803d',
    accentColor: '#166534',
    textColor: 'text-green-700'
  },
  { 
    id: 3, 
    title: 'Restáurate', 
    subtitle: 'Permite que Dios sane tus heridas.',
    icon: Heart, 
    img: RestaurarImg,
    desc: 'Dios es experto en sanar corazones rotos. En este paso trabajamos en la sanidad interior y el perdón.', 
    color: '#ec4899',
    accentColor: '#be185d',
    textColor: 'text-pink-600'
  },
  { 
    id: 4, 
    title: 'Renuévate', 
    subtitle: 'Transforma tu mente y tus hábitos.',
    icon: Sun, 
    img: RenovarImg,
    desc: 'Aprende a pensar como Jesús. La renovación de la mente es clave para cambiar nuestra forma de vivir.', 
    color: '#1e3a8a',
    accentColor: '#172554',
    textColor: 'text-blue-900'
  },
  { 
    id: 5, 
    title: 'Relaciónate', 
    subtitle: 'Conecta con otros creyentes.',
    icon: Users,
    img: RelacionarImg,
    desc: 'No fuimos creados para estar solos. Construye amistades significativas que te impulsen a crecer.', 
    color: '#f97316',
    accentColor: '#c2410c',
    textColor: 'text-orange-600'
  },
  { 
    id: 6, 
    title: 'Rescátalos', 
    subtitle: 'Comparte el mensaje de esperanza.',
    icon: LifeBuoy,
    img: RescatarImg,
    desc: 'Tu historia puede cambiar la vida de alguien más. Aprende a compartir tu fe con valentía.', 
    color: '#dc2626',
    accentColor: '#991b1b',
    textColor: 'text-red-600'
  },
];

const HexagonSlice = ({ step, index, isActive, onClick, onHover, onLeave }) => {
  const groupRef = useRef(null);
  
  const center = { x: 250, y: 250 };
  const innerRadius = 95; 
  const outerRadius = 240; 
  
  const angleOffset = -90; 
  const toRad = (deg) => (deg * Math.PI) / 180;
  
  const startAngle = (index * 60) + angleOffset;
  const endAngle = ((index + 1) * 60) + angleOffset;
  
  const skew = 0; 

  // Puntos del trapezoide
  const x1_out = center.x + outerRadius * Math.cos(toRad(startAngle));
  const y1_out = center.y + outerRadius * Math.sin(toRad(startAngle));
  const x2_out = center.x + outerRadius * Math.cos(toRad(endAngle));
  const y2_out = center.y + outerRadius * Math.sin(toRad(endAngle));
  
  const x1_in = center.x + innerRadius * Math.cos(toRad(startAngle + skew));
  const y1_in = center.y + innerRadius * Math.sin(toRad(startAngle + skew));
  const x2_in = center.x + innerRadius * Math.cos(toRad(endAngle + skew));
  const y2_in = center.y + innerRadius * Math.sin(toRad(endAngle + skew));
  
  const pathData = `M ${x1_in} ${y1_in} L ${x1_out} ${y1_out} L ${x2_out} ${y2_out} L ${x2_in} ${y2_in} Z`;

  // Centro radial del slice (punto medio entre inner y outer en el ángulo medio)
  const midAngle = (startAngle + endAngle) / 2 + (skew / 2);
  const midRadius = (innerRadius + outerRadius) / 2;
  const sliceCenterX = center.x + midRadius * Math.cos(toRad(midAngle));
  const sliceCenterY = center.y + midRadius * Math.sin(toRad(midAngle));

  // Tamaño de la imagen - suficiente para cubrir el slice
  const bgImageSize = 280;

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
  }, [isActive, moveX, moveY]);
  
  const clipId = `clip-slice-${step.id}`;
  const gradientId = `gradient-${step.id}`;

  return (
    <g 
      ref={groupRef}
      onClick={() => onClick(step)}
      onMouseEnter={() => onHover && onHover(true)}
      onMouseLeave={() => onLeave && onLeave(true)}
      className="cursor-pointer group select-none"
      style={{ transformOrigin: '250px 250px' }}
    >
      <defs>
        {/* Máscara de recorte */}
        <clipPath id={clipId}>
          <path d={pathData} />
        </clipPath>
        
        {/* Gradiente radial desde el centro del hexágono */}
        <radialGradient 
          id={gradientId} 
          cx={center.x} 
          cy={center.y} 
          r={outerRadius}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={step.color} stopOpacity="0.9" />
          <stop offset="40%" stopColor={step.color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={step.color} stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* Sombra */}
      <path 
        d={pathData} 
        fill="black" 
        fillOpacity="0.15" 
        transform="translate(4,4)" 
        filter="url(#blur)" 
      />

      {/* Color base sólido */}
      <path
        d={pathData}
        fill={step.color}
        className="transition-all duration-300"
      />
      
      {/* IMAGEN - SIN ROTACIÓN, centrada en el slice */}
      <image
        href={step.img}
        x={sliceCenterX - (bgImageSize / 2)}
        y={sliceCenterY - (bgImageSize / 2)}
        width={bgImageSize}
        height={bgImageSize}
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid slice"
        className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}
        style={{ filter: isActive ? 'brightness(1.1)' : 'brightness(0.95)' }}
      />
      
      {/* Overlay de color con gradiente radial */}
      <path 
        d={pathData} 
        fill={`url(#${gradientId})`}
        className="transition-opacity duration-300"
        style={{ opacity: isActive ? 0.3 : 0.5 }}
        pointerEvents="none" 
      />
      
      {/* Brillo superior tipo "plástico" */}
      <path 
        d={pathData} 
        fill="url(#gloss)" 
        style={{ mixBlendMode: 'soft-light', opacity: 0.4 }} 
        pointerEvents="none" 
      />
      
      {/* Borde blanco */}
      <path
        d={pathData}
        fill="none"
        stroke="white"
        strokeWidth="5"
        className="transition-all duration-300"
        style={{ 
          filter: isActive ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'none' 
        }}
      />
      
      {/* Indicador de selección - brillo en el borde */}
      {isActive && (
        <path
          d={pathData}
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.8"
          style={{ filter: 'blur(2px)' }}
        />
      )}
    </g>
  );
};

const Discipleship = () => {
  const [activeStep, setActiveStep] = useState(steps[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  // Auto-Carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const currentIndex = steps.findIndex(s => s.id === prev.id);
        const nextI = (currentIndex + 1) % steps.length;
        return steps[nextI];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeStep, isPaused]);

  const handleNext = () => {
    const currentIndex = steps.findIndex(s => s.id === activeStep.id);
    const nextI = (currentIndex + 1) % steps.length;
    setActiveStep(steps[nextI]);
  };

  const handlePrev = () => {
    const currentIndex = steps.findIndex(s => s.id === activeStep.id);
    const prevI = (currentIndex - 1 + steps.length) % steps.length;
    setActiveStep(steps[prevI]);
  };

  const activeIndex = steps.findIndex((s) => s.id === activeStep.id);
  const angle = (activeIndex * 60) - 60;
  const connectorX = 250 + 240 * Math.cos((angle * Math.PI) / 180);
  const connectorY = 250 + 240 * Math.sin((angle * Math.PI) / 180);

  return (
    <section className="py-14 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 flex flex-col items-center justify-center relative font-sans overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-slate-100 tracking-tight uppercase">
            TU CAMINO EN <span className="text-blue-600">REFLEJO</span>
          </h2>
          <p className="text-gray-500 dark:text-slate-300 mt-2 text-base">Descubre los 6 pasos hacia una vida transformada</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
          {/* --- SVG HEXÁGONO --- */}
          <div 
            className="relative w-[360px] h-[360px] md:w-[460px] md:h-[460px] flex-shrink-0 select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible drop-shadow-2xl">
              <defs>
                {/* Gradiente de brillo */}
                <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0.9"/>
                  <stop offset="50%" stopColor="white" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="black" stopOpacity="0.1"/>
                </linearGradient>
                
                {/* Filtro de blur para sombras */}
                <filter id="blur">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
                </filter>
                
                {/* Sombra para el centro */}
                <filter id="centerShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.2"/>
                </filter>
              </defs>

              {/* Slices */}
              {steps.map((step, index) => (
                <HexagonSlice
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeStep.id === step.id}
                  onClick={setActiveStep}
                  onHover={() => setIsPaused(true)}
                  onLeave={() => setIsPaused(false)}
                />
              ))}

              <line
                x1="250"
                y1="250"
                x2={connectorX}
                y2={connectorY}
                stroke={activeStep.color}
                strokeWidth="3"
                strokeDasharray="10 8"
                opacity="0.8"
              />
              
              {/* CENTRO BLANCO */}
              <g
                style={{ transformOrigin: '250px 250px' }}
                filter="url(#centerShadow)"
                onMouseEnter={() => setShowAllCards(true)}
                onMouseLeave={() => setShowAllCards(false)}
              >
                <polygon 
                  points="250,155 332,197 332,302 250,345 168,302 168,197" 
                  fill="white"
                  transform="rotate(0, 250, 250)" 
                />
                <polygon 
                  points="250,155 332,197 332,302 250,345 168,302 168,197" 
                  fill="url(#gloss)"
                  style={{ mixBlendMode: 'overlay', opacity: 0.5 }}
                  transform="rotate(0, 250, 250)" 
                />
                
                <image 
                  href={RLogo} 
                  x="205" 
                  y="205" 
                  height="90" 
                  width="90" 
                  style={{ opacity: 0.95 }}
                />
              </g>
            </svg>
            
            {/* Indicadores de pasos alrededor del hexágono */}
            <div className="absolute inset-0 pointer-events-none">
              {steps.map((step, index) => {
                const angle = (index * 60) - 60;
                const radius = 52;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <div
                    key={step.id}
                    className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${
                      activeStep.id === step.id 
                        ? 'scale-125 ring-4 ring-white ring-opacity-50' 
                        : 'scale-100 opacity-60'
                    }`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: step.color,
                      boxShadow: activeStep.id === step.id 
                        ? `0 0 20px ${step.color}` 
                        : 'none'
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* --- INFO CARD --- */}
          <div 
            className="w-full max-w-[450px] relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showAllCards ? 'all-cards' : activeStep?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white/70 backdrop-blur-lg dark:bg-slate-900/60 rounded-3xl p-6 border border-gray-100 dark:border-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative overflow-hidden"
              >
                {showAllCards ? (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {steps.map((step) => (
                      <button
                        key={step.id}
                        onClick={() => {
                          setActiveStep(step);
                          setShowAllCards(false);
                        }}
                        className="text-left rounded-xl border border-white/40 dark:border-slate-700 p-3 bg-white/70 dark:bg-slate-800/60 hover:scale-[1.01] transition"
                      >
                        <p className="text-xs uppercase tracking-wider text-slate-500">Paso {step.id}</p>
                        <p className="font-semibold" style={{ color: step.color }}>{step.title}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">{step.subtitle}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <>
                {/* Barra de color superior */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1.5"
                  style={{ backgroundColor: activeStep.color }}
                  layoutId="colorBar"
                />
                
                {/* Navegación */}
                <div className="absolute top-6 right-6 flex gap-2 z-20">
                  <button 
                    onClick={handlePrev} 
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all hover:scale-105 active:scale-95"
                  >
                    ←
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all hover:scale-105 active:scale-95"
                  >
                    →
                  </button>
                </div>
                
                {/* Contador */}
                <div className="absolute top-8 right-28 font-mono text-xs text-slate-400 font-bold tracking-widest">
                  {String(steps.findIndex(s => s.id === activeStep.id) + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                </div>

                {/* Icono */}
                <motion.div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
                  style={{ backgroundColor: activeStep.color }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {React.createElement(activeStep.icon, { size: 28, strokeWidth: 2.5 })}
                </motion.div>

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
                  className="flex items-center justify-between w-full py-4 px-6 rounded-xl text-white font-bold transition-all group shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: activeStep.color }}
                >
                  <span>Ver Comportamientos</span>
                  <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                </Link>
                
                {/* Decoración de fondo */}
                <div 
                  className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full opacity-5"
                  style={{ backgroundColor: activeStep.color }}
                />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
            
            {/* Progress dots mobile */}
            <div className="flex justify-center gap-2 mt-8 lg:hidden">
              {steps.map((s) => (
                <button 
                  key={s.id}
                  onClick={() => setActiveStep(s)}
                  className={`rounded-full transition-all duration-300 h-2 ${
                    activeStep.id === s.id ? 'w-8' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={{ backgroundColor: activeStep.id === s.id ? s.color : undefined }}
                  aria-label={`Ir a ${s.title}`}
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

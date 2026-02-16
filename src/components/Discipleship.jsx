import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, Heart, Sun, Users, LifeBuoy, ChevronRight, X, MousePointerClick } from 'lucide-react';
import anime from 'animejs';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import RLogo from '../assets/logo.png';
import ReconocerImg from '../assets/a (1).jpeg';
import RefugiarseImg from '../assets/a (3).jpeg';
import RestaurarImg from '../assets/a (2).jpeg';
import RenovarImg from '../assets/a (4).jpeg';
import RelacionarImg from '../assets/a (5).jpeg';
import RescatarImg from '../assets/a (6).jpeg';

const steps = [
  {
    id: 1,
    title: 'Reconócelo',
    subtitle: 'Reconoce a Jesús como tu Señor y Salvador.',
    icon: BookOpen,
    img: ReconocerImg,
    color: '#fbbf24',
    description: 'El primer paso es reconocer a Jesús como el Hijo de Dios que murió y resucitó por ti.'
  },
  {
    id: 2,
    title: 'Refúgiate',
    subtitle: 'Encuentra seguridad en Cristo.',
    icon: Shield,
    img: RefugiarseImg,
    color: '#16a34a',
    description: 'En un mundo incierto, Cristo es tu refugio seguro y tu fortaleza.'
  },
  {
    id: 3,
    title: 'Restáurate',
    subtitle: 'Experimenta sanidad interior.',
    icon: Heart,
    img: RestaurarImg,
    color: '#ec4899',
    description: 'Dios restaura lo que está quebrantado y sana las heridas del pasado.'
  },
  {
    id: 4,
    title: 'Renuévate',
    subtitle: 'Transforma tu mente con la Palabra.',
    icon: Sun,
    img: RenovarImg,
    color: '#2563eb',
    description: 'Renueva tu mente cada día a través de la lectura y meditación de las Escrituras.'
  },
  {
    id: 5,
    title: 'Relaciónate',
    subtitle: 'Crece en comunidad cristiana.',
    icon: Users,
    img: RelacionarImg,
    color: '#f97316',
    description: 'La comunidad fortalece tu fe y te ayuda a crecer en el camino con Cristo.'
  },
  {
    id: 6,
    title: 'Rescátalos',
    subtitle: 'Comparte el evangelio con otros.',
    icon: LifeBuoy,
    img: RescatarImg,
    color: '#dc2626',
    description: 'Lleva esperanza a otros compartiendo el amor transformador de Jesús.'
  },
];

/* ── Hexagon Slice (central SVG) ─────────────────────── */
const HexagonSlice = ({ step, index, isActive, onEnter, onLeave, isCenterHovered }) => {
  const groupRef = useRef(null);
  const center = { x: 250, y: 250 };
  const innerRadius = 65;
  const outerRadius = 245;
  const angleOffset = -90;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const startAngle = (index * 60) + angleOffset;
  const endAngle = ((index + 1) * 60) + angleOffset;
  const getPoint = (r, a) => ({ x: center.x + r * Math.cos(toRad(a)), y: center.y + r * Math.sin(toRad(a)) });
  const p1_in = getPoint(innerRadius, startAngle);
  const p2_in = getPoint(innerRadius, endAngle);
  const p1_out = getPoint(outerRadius, startAngle);
  const p2_out = getPoint(outerRadius, endAngle);
  const pathData = `M ${p1_in.x} ${p1_in.y} L ${p1_out.x} ${p1_out.y} L ${p2_out.x} ${p2_out.y} L ${p2_in.x} ${p2_in.y} Z`;

  const midAngle = (startAngle + endAngle) / 2;
  const imgRadius = (innerRadius + outerRadius) / 2;
  const imgCenter = getPoint(imgRadius, midAngle);
  const imgRotation = midAngle + 90;

  useEffect(() => {
    const midA = (startAngle + endAngle) / 2;
    const moveX = 18 * Math.cos(toRad(midA));
    const moveY = 18 * Math.sin(toRad(midA));

    if (isActive || isCenterHovered) {
      anime({ targets: groupRef.current, translateX: moveX, translateY: moveY, scale: 1.08, duration: 400, easing: 'spring(1, 80, 10, 0)' });
    } else {
      anime({ targets: groupRef.current, translateX: 0, translateY: 0, scale: 1, duration: 400, easing: 'spring(1, 80, 10, 0)' });
    }
  }, [isActive, isCenterHovered]);

  return (
    <g
      ref={groupRef}
      onMouseEnter={() => onEnter(step)}
      onMouseLeave={onLeave}
      className="cursor-pointer"
      style={{ transformOrigin: '250px 250px' }}
      role="button"
      tabIndex={0}
      aria-label={`Paso ${step.id}: ${step.title}`}
    >
      <defs>
        <linearGradient id={`gradient-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={step.color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={step.color} stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <path
        d={pathData}
        fill={`url(#gradient-${step.id})`}
        stroke="white"
        strokeWidth={isActive || isCenterHovered ? 3 : 1.5}
        strokeOpacity={isActive || isCenterHovered ? 1 : 0.8}
        filter={isActive || isCenterHovered ? 'url(#glow)' : 'none'}
      />

      {/* Step Number */}
      <text
        x={imgCenter.x}
        y={imgCenter.y}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="28"
        fontWeight="800"
        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', pointerEvents: 'none' }}
      >
        {step.id}
      </text>
    </g>
  );
};

/* ── Arrow connector SVG ─────────────────────────────── */
const ArrowConnector = ({ direction, isVisible }) => {
  // direction: 'left' = arrow points left (←), 'right' = arrow points right (→)
  const w = 100;
  const h = 24;
  const headSize = 8;
  const lineY = h / 2;

  // Visual state controlled by opacity to prevent layout shifts
  const opacityClass = isVisible ? 'opacity-100' : 'opacity-0 lg:opacity-0';

  if (direction === 'right') {
    return (
      <svg
        width={w} height={h}
        viewBox={`0 0 ${w} ${h}`}
        className={`hidden lg:block flex-shrink-0 transition-opacity duration-500 ${opacityClass}`}
        aria-hidden="true"
      >
        <line x1="0" y1={lineY} x2={w - headSize} y2={lineY} stroke="#b0b8c8" strokeWidth="2" />
        <polygon points={`${w},${lineY} ${w - headSize},${lineY - headSize / 2} ${w - headSize},${lineY + headSize / 2}`} fill="#b0b8c8" />
      </svg>
    );
  }
  return (
    <svg
      width={w} height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={`hidden lg:block flex-shrink-0 transition-opacity duration-500 ${opacityClass}`}
      aria-hidden="true"
    >
      <line x1={headSize} y1={lineY} x2={w} y2={lineY} stroke="#b0b8c8" strokeWidth="2" />
      <polygon points={`0,${lineY} ${headSize},${lineY - headSize / 2} ${headSize},${lineY + headSize / 2}`} fill="#b0b8c8" />
    </svg>
  );
};

/* ── Step Card ───────────────────────────────────────── */
const StepCard = ({ step, side, isVisible, isMobile, onEnter, onLeave }) => {
  // Desktop: hidden by default (opacity 0), visible on hover
  // Mobile/Tablet: always visible
  // We use opacity-0 but keep layout space. pointer-events-none prevents clicking when hidden.
  const visibilityClass = isMobile
    ? 'opacity-100 pointer-events-auto'
    : (isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none');

  return (
    <div
      className={`w-full transition-all duration-500 ease-out transform ${visibilityClass}`}
      onMouseEnter={() => !isMobile && onEnter && onEnter(step)}
      onMouseLeave={() => !isMobile && onLeave && onLeave()}
    >
      <Link to={`/discipulado/${step.id}`} className="block group">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl border border-slate-200/70 dark:border-slate-700/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
          {/* Content */}
          <div className="p-3 flex items-start gap-3 h-full">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: step.color + '22' }}
            >
              <step.icon className="w-4 h-4" style={{ color: step.color }} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-sm text-slate-800 dark:text-white leading-tight">
                  {step.title}
                </h3>
                <span className="ml-2 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {step.id}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
                {step.subtitle}
              </p>
              <span className="inline-flex items-center text-xs font-semibold mt-1 group-hover:gap-1.5 transition-all" style={{ color: step.color }}>
                Explorar paso
                <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

/* ── Main Component ──────────────────────────────────── */
const Discipleship = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeout = useRef(null);

  // Clear timeout on unmount or state change
  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const handleStepEnter = (step) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setActiveStep(step);
  };

  const handleStepLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      if (!isCenterHovered) {
        setActiveStep(null);
      }
    }, 2500); // 2.5 seconds delay
  };

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      // lg breakpoint in Tailwind is 1024px. Below this, we consider it mobile/tablet interaction.
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Welcome modal on first visit
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('hasSeenDiscipleshipWelcome');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
        sessionStorage.setItem('hasSeenDiscipleshipWelcome', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Left cards: steps 6, 5, 4 — Right cards: steps 1, 2, 3
  const leftSteps = [steps[5], steps[4], steps[3]]; // Rescátalos, Relaciónate, Renuévate
  const rightSteps = [steps[0], steps[1], steps[2]]; // Reconócelo, Refúgiate, Restáurate

  // Determine visibility: Center hovered OR specific step active
  const isStepVisible = (stepId) => isCenterHovered || activeStep?.id === stepId;

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden relative font-sans pt-14 pb-1 md:pt-16 md:pb-2">
      {/* Header */}
      <div className="text-center mb-0 md:mb-1 z-20 px-4 relative">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
          TU CAMINO EN{' '}
          <span className="text-blue-600 dark:text-blue-400 italic">REFLEJO</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm max-w-2xl mx-auto mt-0.5 leading-tight">
          Explora los pasos para crecer en tu fe.
        </p>

        {/* Desktop-only hint */}
        {!isMobile && (
          <div className="mt-1 flex items-center justify-center gap-2 text-xs text-slate-400 animate-pulse">
            <MousePointerClick className="w-3 h-3" />
            <span>Pasa el mouse para descubrir. Doble clic al centro para intro.</span>
          </div>
        )}
      </div>

      {/* ── Desktop Layout: 3-column grid with arrows ── */}
      <div className="hidden lg:flex items-center justify-center gap-0 max-w-5xl mx-auto px-4">
        {/* Left Cards Column */}
        <div className="flex flex-col gap-2 w-[210px] xl:w-[230px] flex-shrink-0">
          {leftSteps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              side="left"
              isVisible={isStepVisible(step.id)}
              isMobile={false}
              onEnter={handleStepEnter}
              onLeave={handleStepLeave}
            />
          ))}
        </div>

        {/* Left Arrows */}
        <div className="flex flex-col gap-2 items-center justify-around self-stretch py-2 mx-1">
          {leftSteps.map((step) => (
            <div key={step.id} className="flex-1 flex items-center">
              <ArrowConnector
                direction="left"
                isVisible={isStepVisible(step.id)}
              />
            </div>
          ))}
        </div>

        {/* Central Hexagon */}
        <div className="flex-shrink-0 w-[280px] xl:w-[320px] flex items-center justify-center z-10">
          <motion.div
            className="relative w-[260px] h-[260px] xl:w-[300px] xl:h-[300px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', damping: 15, stiffness: 150 }}
          >
            {/* SVG Filter definitions */}
            <svg viewBox="0 0 500 500" className="absolute opacity-0 w-0 h-0">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood floodColor="#ffffff" floodOpacity="0.7" result="glowColor" />
                  <feComposite in="glowColor" in2="blur" operator="in" result="softGlow" />
                  <feBlend in="SourceGraphic" in2="softGlow" mode="screen" />
                </filter>
              </defs>
            </svg>


            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl">
              {steps.map((step, i) => (
                <HexagonSlice
                  key={step.id}
                  index={i}
                  step={step}
                  isActive={activeStep?.id === step.id}
                  isCenterHovered={isCenterHovered}
                  onEnter={handleStepEnter}
                  onLeave={handleStepLeave}
                />
              ))}

              {/* Center hexagon — pointy-top to match outer hex */}
              <g
                onMouseEnter={() => { setIsCenterHovered(true); setActiveStep(null); }}
                onMouseLeave={() => setIsCenterHovered(false)}
                onDoubleClick={() => setShowWelcome(true)}
                className="cursor-pointer"
              >
                <polygon points="250,125 358.3,187.5 358.3,312.5 250,375 141.7,312.5 141.7,187.5" fill="none" stroke={isCenterHovered ? '#3b82f6' : '#bfdbfe'} strokeWidth={isCenterHovered ? 3 : 1.5} strokeOpacity={isCenterHovered ? 0.8 : 0.4} className="transition-all duration-500" filter={isCenterHovered ? 'url(#glow)' : 'none'} />
                <polygon points="250,135 349.6,192.5 349.6,307.5 250,365 150.4,307.5 150.4,192.5" fill="white" className="dark:fill-slate-800" />
                <polygon points="250,138 347,194.6 347,305.4 250,362 153,305.4 153,194.6" fill="none" stroke="#f1f5f9" strokeWidth="2" className="dark:stroke-slate-700" />
                <polygon points="250,155 332.3,197.5 332.3,302.5 250,345 167.7,302.5 167.7,197.5" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6" />
                <image href={RLogo} x="115" y="115" width="270" height="270" className="drop-shadow-sm" preserveAspectRatio="xMidYMid meet" />
              </g>
            </svg>
          </motion.div>
        </div>

        {/* Right Arrows */}
        <div className="flex flex-col gap-2 items-center justify-around self-stretch py-2 mx-2">
          {rightSteps.map((step) => (
            <div key={step.id} className="flex-1 flex items-center">
              <ArrowConnector
                direction="right"
                isVisible={isStepVisible(step.id)}
              />
            </div>
          ))}
        </div>

        {/* Right Cards Column */}
        <div className="flex flex-col gap-2 w-[280px] xl:w-[300px] flex-shrink-0">
          {rightSteps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              side="right"
              isVisible={isStepVisible(step.id)}
              isMobile={false}
              onEnter={handleStepEnter}
              onLeave={handleStepLeave}
            />
          ))}
        </div>
      </div>

      {/* ── Tablet Layout: hexagon on top, cards in 2-col grid ── */}
      <div className="hidden md:flex lg:hidden flex-col items-center gap-4 max-w-3xl mx-auto px-6">
        <div className="w-[300px] h-[300px]">
          <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-xl">
            {steps.map((step, i) => (
              <HexagonSlice
                key={step.id}
                index={i}
                step={step}
                isActive={activeStep?.id === step.id}
                isCenterHovered={isCenterHovered}
                onEnter={handleStepEnter}
                onLeave={handleStepLeave}
              />
            ))}
            <g
              onMouseEnter={() => { setIsCenterHovered(true); setActiveStep(null); }}
              onMouseLeave={() => setIsCenterHovered(false)}
            >
              <polygon points="250,135 349.6,192.5 349.6,307.5 250,365 150.4,307.5 150.4,192.5" fill="white" className="dark:fill-slate-800" />
              <polygon points="250,138 347,194.6 347,305.4 250,362 153,305.4 153,194.6" fill="none" stroke="#f1f5f9" strokeWidth="2" className="dark:stroke-slate-700" />
              <image href={RLogo} x="115" y="115" width="270" height="270" preserveAspectRatio="xMidYMid meet" />
            </g>
          </svg>
        </div>
        {/* Cards always visible on tablet */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              side="left"
              isVisible={true}
              isMobile={true}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile Layout: hexagon on top, cards stacked ── */}
      <div className="flex md:hidden flex-col items-center gap-3 max-w-sm mx-auto px-4">
        <div className="w-[240px] h-[240px]">
          <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-lg">
            {steps.map((step, i) => (
              <HexagonSlice
                key={step.id}
                index={i}
                step={step}
                isActive={activeStep?.id === step.id}
                isCenterHovered={isCenterHovered}
                onEnter={handleStepEnter}
                onLeave={handleStepLeave}
              />
            ))}
            <g
              onMouseEnter={() => { setIsCenterHovered(true); setActiveStep(null); }}
              onMouseLeave={() => setIsCenterHovered(false)}
            >
              <polygon points="250,135 349.6,192.5 349.6,307.5 250,365 150.4,307.5 150.4,192.5" fill="white" className="dark:fill-slate-800" />
              <polygon points="250,138 347,194.6 347,305.4 250,362 153,305.4 153,194.6" fill="none" stroke="#f1f5f9" strokeWidth="2" className="dark:stroke-slate-700" />
              <image href={RLogo} x="115" y="115" width="270" height="270" preserveAspectRatio="xMidYMid meet" />
            </g>
          </svg>
        </div>
        {/* Cards always visible on mobile */}
        <div className="flex flex-col gap-2 w-full">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              side="left"
              isVisible={true}
              isMobile={true}
            />
          ))}
        </div>
      </div>

      {/* Welcome Modal */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWelcome(false)}
          >
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full mx-4 overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8 text-center">
                <button
                  onClick={() => setShowWelcome(false)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                  <img src={RLogo} className="relative w-20 h-20 mx-auto rounded-full bg-white p-2 shadow-lg" alt="Reflejo logo" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                  ¡Bienvenido a tu camino!
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                  Descubre los seis pasos transformadores para crecer en tu fe y reflejar a Cristo en tu vida diaria.
                </p>
                <button
                  onClick={() => setShowWelcome(false)}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Comenzar mi camino
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Discipleship;
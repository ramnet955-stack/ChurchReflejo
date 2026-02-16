import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Shield, Heart, Sun, Users, LifeBuoy, CheckCircle } from 'lucide-react';

// Assets
import ReconocerImg from '../assets/a (1).jpeg';
import RefugiarseImg from '../assets/a (3).jpeg';
import RestaurarImg from '../assets/a (2).jpeg';
import RenovarImg from '../assets/a (4).jpeg';
import RelacionarImg from '../assets/a (5).jpeg';
import RescatarImg from '../assets/a (6).jpeg';

const stepsData = {
  1: {
    title: 'Reconócelo',
    icon: BookOpen,
    img: ReconocerImg,
    color: '#fbbf24', // Amber
    description: 'Reconoce a Jesús como tu Señor y Salvador.',
    content: `
      El inicio del viaje empieza con la fe. Reconocer que necesitamos a Jesús es el primer paso para una vida transformada.
      Implica entender que por nuestros propios méritos no podemos alcanzar la salvación, sino que es un regalo de Dios (Efesios 2:8-9).
      
      En este paso exploramos:
      - La naturaleza de Dios y su amor.
      - El problema del pecado y la separación.
      - La solución en Jesús y su sacrificio.
      - La decisión de fe.
    `,
    verses: ['Romanos 10:9', 'Juan 3:16', 'Hechos 4:12'],
    nextStep: 2
  },
  2: {
    title: 'Refúgiate',
    icon: Shield,
    img: RefugiarseImg,
    color: '#16a34a', // Green
    description: 'Encuentra seguridad en la comunidad.',
    content: `
      La iglesia es tu refugio seguro. Aquí encontrarás protección, apoyo y una familia que te ama.
      No fuimos diseñados para luchar solos; la comunidad de fe es el entorno donde somos cuidados y nutridos.
      
      En este paso aprenderás sobre:
      - La importancia de congregarse.
      - El bautismo como identificación pública.
      - La membresía y el compromiso mutuo.
    `,
    verses: ['Hebreos 10:25', 'Salmos 46:1', 'Hechos 2:42'],
    nextStep: 3
  },
  3: {
    title: 'Restáurate',
    icon: Heart,
    img: RestaurarImg,
    color: '#ec4899', // Pink
    description: 'Permite que Dios sane tus heridas.',
    content: `
      Dios es experto en sanar corazones rotos. En este paso trabajamos en la sanidad interior y el perdón.
      Muchas veces arrastramos cargas del pasado que nos impiden avanzar; Jesús vino a libertar a los cautivos.
      
      Temas clave:
      - El perdón hacia otros y hacia uno mismo.
      - Sanando heridas emocionales.
      - Rompiendo ataduras y hábitos destructivos.
      - Identidad en Cristo.
    `,
    verses: ['Salmos 147:3', 'Isaías 61:1', '2 Corintios 5:17'],
    nextStep: 4
  },
  4: {
    title: 'Renuévate',
    icon: Sun,
    img: RenovarImg,
    color: '#2563eb', // Blue
    description: 'Transforma tu mente y tus hábitos.',
    content: `
      Aprende a pensar como Jesús. La renovación de la mente es clave para cambiar nuestra forma de vivir.
      No nos conformamos a este siglo, sino que nos transformamos mediante la renovación de nuestro entendimiento.
      
      Enfoque práctico:
      - Disciplinas espirituales (Oración, Lectura Bíblica).
      - Gestión de pensamientos y emociones.
      - Carácter cristiano y fruto del Espíritu.
      - Mayordomía de vida.
    `,
    verses: ['Romanos 12:2', 'Efesios 4:23', 'Colosenses 3:10'],
    nextStep: 5
  },
  5: {
    title: 'Relaciónate',
    icon: Users,
    img: RelacionarImg,
    color: '#f97316', // Orange
    description: 'Conecta con otros creyentes.',
    content: `
      No fuimos creados para estar solos. Construye amistades significativas que te impulsen a crecer.
      La fe se vive en relación. Es tiempo de dejar de ser solo un espectador y comenzar a servir y conectar profundamente.
      
      Áreas de desarrollo:
      - Grupos pequeños de crecimiento.
      - El servicio dentro de la iglesia.
      - Dones espirituales y talentos.
      - Mentoría y discipulado mutuo.
    `,
    verses: ['Proverbios 27:17', 'Eclesiastés 4:9-10', '1 Pedro 4:10'],
    nextStep: 6
  },
  6: {
    title: 'Rescátalos',
    icon: LifeBuoy,
    img: RescatarImg,
    color: '#dc2626', // Red
    description: 'Comparte el mensaje de esperanza.',
    content: `
      Tu historia puede cambiar la vida de alguien más. Aprende a compartir tu fe con valentía.
      El ciclo se completa cuando ayudamos a otros a iniciar su propio camino. Somos llamados a ser luz.
      
      Misión práctica:
      - Evangelismo personal y relacional.
      - Misiones locales y globales.
      - Liderazgo de servicio.
      - Hacer discípulos.
    `,
    verses: ['Mateo 28:19-20', 'Hechos 1:8', 'Marcos 16:15'],
    nextStep: 1
  }
};

const DiscipleshipDetail = () => {
  const { id } = useParams();
  const stepId = parseInt(id) || 1;
  const step = stepsData[stepId];

  if (!step) return <div className="p-20 text-center">Paso no encontrado</div>;

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden relative">
      {/* Dynamic Background Header */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: step.color, minHeight: '25vh' }}
      >
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={step.img}
            alt=""
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="absolute inset-0 bg-black/20 mix-blend-multiply z-0"></div>
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0"></div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white py-6">
          <Link to="/" className="absolute top-4 left-4 md:left-8 text-white/80 hover:text-white flex items-center gap-2 font-bold transition-colors">
            <ArrowLeft size={24} /> Regresar
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20 mb-2 shadow-xl relative overflow-hidden group"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/30 bg-white/10">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-1"
          >
            {step.title}
          </motion.h1>
          <p className="text-sm md:text-base text-white/90 font-medium max-w-2xl mx-auto">{step.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8 max-w-5xl relative z-10 -mt-6 md:-mt-10">
        <div className="bg-white rounded-2xl p-5 md:p-8 shadow-xl border border-slate-100">
          <div className="grid md:grid-cols-[2fr_1fr] gap-6 md:gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">En detalle</h2>
              <div className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line mb-4">
                {step.content}
              </div>

              <h3 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
                <BookOpen size={18} className="text-slate-400" />
                Versículos Clave
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {step.verses.map((verse, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 font-semibold rounded-lg text-sm">
                    {verse}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar / Actions */}
            <div className="flex flex-col gap-4">
              {/* Navigation Buttons (Moved Up) */}
              <div className="flex flex-col gap-3">
                {stepId < 6 ? (
                  <Link to={`/discipulado/${stepId + 1}`}
                    className="flex items-center justify-center gap-2 text-white font-bold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm w-full group"
                    style={{ backgroundColor: step.color }}
                  >
                    Siguiente Paso <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <Link to="/"
                    className="flex items-center justify-center gap-2 text-white font-bold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm w-full group"
                    style={{ backgroundColor: step.color }}
                  >
                    Completar Ciclo <CheckCircle size={20} />
                  </Link>
                )}

                {stepId > 1 && (
                  <Link to={`/discipulado/${stepId - 1}`} className="flex items-center justify-center gap-2 text-slate-500 hover:text-slate-800 font-bold px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all text-sm w-full">
                    <ArrowLeft size={20} /> Anterior
                  </Link>
                )}
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 text-sm">Tu progreso</h4>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={20} style={{ color: step.color }} />
                  <span className="text-sm text-slate-600 font-medium">Este es el paso {stepId} de 6</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(stepId / 6) * 100}%`, backgroundColor: step.color }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipDetail;
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Shield, Heart, Sun, Users, LifeBuoy, CheckCircle } from 'lucide-react';

const stepsData = {
  1: {
    title: 'Reconócelo',
    icon: BookOpen,
    color: '#2563eb',
    accentColor: 'bg-blue-600',
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
    color: '#3b82f6',
    accentColor: 'bg-blue-500',
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
    color: '#60a5fa',
    accentColor: 'bg-blue-400',
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
    color: '#fbbf24',
    accentColor: 'bg-amber-400',
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
    color: '#f59e0b',
    accentColor: 'bg-amber-500',
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
    color: '#d97706',
    accentColor: 'bg-amber-600',
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
    nextStep: 1 // Cycle restarts or implies leadership
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
      <div className={`h-[40vh] ${step.accentColor} relative flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10 text-center text-white">
              <Link to="/" className="absolute top-[-80px] left-4 md:left-0 text-white/80 hover:text-white flex items-center gap-2 font-bold transition-colors">
                  <ArrowLeft size={24} /> Regresar
              </Link>
              
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="inline-flex p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 shadow-2xl"
              >
                  <step.icon size={64} strokeWidth={1.5} />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tight mb-4"
            >
                {step.title}
            </motion.h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">{step.description}</p>
          </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10 -mt-20">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-slate-100">
             <div className="grid md:grid-cols-[2fr_1fr] gap-12">
                 <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">En detalle</h2>
                    <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line mb-8">
                        {step.content}
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <BookOpen size={20} className="text-slate-400" />
                        Versículos Clave
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {step.verses.map((verse, idx) => (
                            <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg text-sm">
                                {verse}
                            </span>
                        ))}
                    </div>
                 </div>

                 {/* Sidebar / Actions */}
                 <div className="flex flex-col gap-6">
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-4">¿Listo para comenzar?</h4>
                        <button className={`w-full py-3 ${step.accentColor} text-white rounded-xl font-bold shadow-lg hover:brightness-110 transition-all mb-3`}>
                            Inscribirme al curso
                        </button>
                        <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
                            Descargar material
                        </button>
                    </div>

                    <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-4">Tu progreso</h4>
                        <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="text-blue-500" size={24} />
                            <span className="text-sm text-blue-800 font-medium">Este es el paso {stepId} de 6</span>
                        </div>
                        <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full rounded-full" style={{ width: `${(stepId/6)*100}%` }}></div>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
          
          {/* Navigation between steps */}
          <div className="flex justify-between mt-12">
                {stepId > 1 ? (
                    <Link to={`/discipulado/${stepId - 1}`} className="flex items-center gap-3 text-slate-500 hover:text-slate-900 font-bold px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
                        <ArrowLeft size={18} /> Anterior
                    </Link>
                ) : <div></div>}
                
                 {stepId < 6 ? (
                    <Link to={`/discipulado/${stepId + 1}`} className="flex items-center gap-3 text-white font-bold px-8 py-3 bg-slate-900 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                         Siguiente Paso <ArrowLeft size={18} className="rotate-180" />
                    </Link>
                ) : (
                    <Link to="/" className="flex items-center gap-3 text-white font-bold px-8 py-3 bg-slate-900 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                         Completar Ciclo <CheckCircle size={18} />
                    </Link>
                )}
          </div>
      </div>
    </div>
  );
};

export default DiscipleshipDetail;
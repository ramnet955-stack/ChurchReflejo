import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, User, Zap, Globe, Sparkles, Shield } from 'lucide-react';
import RebanitoImg from '../assets/Rebanito.webp';
import MatrimoniosImg from '../assets/MatrimoniosReflejo.webp';
import RenuevoImg from '../assets/Renuevo.webp';
import RugidoImg from '../assets/RUGIDOdeFE.webp';
import GeneracionRImg from '../assets/GeneracionR.webp';
import MisionImg from '../assets/Mision.webp';

// Leader Images
import GenRLeaderImg from '../assets/generacion_R_Emmanuel_Clarisa.jpeg';
import RebanitoLeaderImg from '../assets/Rebanito_lideresCami_Dulce.jpeg';

const ministries = [
  {
    id: 'ninos',
    title: 'Rebañito',
    desc: 'Sembrando la semilla de la fe en los más pequeños con amor y diversión.',
    img: RebanitoImg,
    leaderImg: RebanitoLeaderImg,
    color: '#f59e0b',
    icon: Sparkles
  },
  {
    id: 'matrimonios',
    title: 'Matrimonio Reflejo',
    desc: 'Fortaleciendo la unión familiar bajo los principios bíblicos.',
    img: MatrimoniosImg,
    color: '#ef4444',
    icon: Heart
  },
  {
    id: 'mujeres',
    title: 'Mujeres Renuevo',
    desc: 'Un espacio para crecer juntas en fe, gracia y propósito de vida.',
    img: RenuevoImg,
    color: '#ec4899',
    icon: User
  },
  {
    id: 'hombres',
    title: 'Hombres Rugido de Fe',
    desc: 'Forjando el carácter de hombres de valor e integridad en Cristo.',
    img: RugidoImg,
    color: '#3b82f6',
    icon: Shield
  },
  {
    id: 'jovenes',
    title: 'Jóvenes Generación R',
    desc: 'Apasionados por descubrir su identidad y propósito en Dios.',
    img: GeneracionRImg,
    leaderImg: GenRLeaderImg,
    color: '#8b5cf6',
    icon: Zap
  },
  {
    id: 'evangelismo',
    title: 'Evangelismo Misión R',
    desc: 'Llevando el mensaje de esperanza a cada rincón de nuestra ciudad.',
    img: MisionImg,
    color: '#10b981',
    icon: Globe
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Ministries = () => {
  return (
    <section id="ministries" className="pt-2 pb-8 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-[10px] tracking-wider uppercase rounded-full mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Comunidad
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Nuestros Ministerios
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Hay un lugar especial para ti en nuestra familia, donde puedes desarrollar tus dones y ser parte del cambio.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ministries.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link to={`/ministerios/${item.id}`} className="block h-full">
                <div className="h-full bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 border border-slate-100 flex flex-col">

                  {/* Image Area */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                    />

                    {/* Floating Icon Badge */}
                    <div
                      className="absolute top-6 left-6 z-20 w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    >
                      <item.icon size={24} className="text-white" />
                    </div>

                    {/* Category Label on Image */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <h3 className="text-white font-bold text-2xl mb-1 leading-tight group-hover:text-white/90 transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-10 h-1 rounded-full transition-all duration-500 group-hover:w-20" style={{ backgroundColor: item.color }}></div>
                    </div>

                    {/* Leader Avatar (if exists) */}
                    {item.leaderImg && (
                      <div className="absolute -bottom-5 right-6 z-30 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img src={item.leaderImg} alt="Líderes" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-slate-600 text-base leading-relaxed mb-8 min-h-[3rem]">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <span
                        className="font-bold text-sm tracking-wide uppercase transition-colors"
                        style={{ color: item.color }}
                      >
                        Descubrir más
                      </span>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-2"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <ArrowRight size={18} style={{ color: item.color }} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-block p-1 bg-white rounded-full shadow-lg border border-slate-100">
            <Button
              component={Link}
              to="/ubicacion"
              size="large"
              sx={{
                backgroundColor: '#1e293b',
                color: 'white',
                borderRadius: '9999px',
                px: 5,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#0f172a',
                  boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.3)',
                }
              }}
              endIcon={<ArrowRight size={18} />}
            >
              Visítanos y conoce más
            </Button>
          </div>
          <p className="mt-4 text-slate-400 text-sm font-medium">
            ¿No estás seguro por dónde empezar? ¡Contáctanos!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries;

import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import RebanitoImg from '../assets/Rebanito.webp';
import MatrimoniosImg from '../assets/MatrimoniosReflejo.webp';
import RenuevoImg from '../assets/Renuevo.webp';
import RugidoImg from '../assets/RUGIDOdeFE.webp';
import GeneracionRImg from '../assets/GeneracionR.webp';
import MisionImg from '../assets/Mision.webp';

const ministries = [
  { 
    id: 'ninos',
    title: 'Rebañito', 
    desc: 'Sembrando la semilla de la fe en los más pequeños.',
    img: RebanitoImg,
    color: '#f59e0b'
  },
  { 
    id: 'matrimonios',
    title: 'Matrimonio Reflejo', 
    desc: 'Fortaleciendo la unión bajo los principios bíblicos.',
    img: MatrimoniosImg,
    color: '#ef4444'
  },
  { 
    id: 'mujeres',
    title: 'Mujeres Renuevo', 
    desc: 'Creciendo juntas en fe, gracia y propósito.',
    img: RenuevoImg,
    color: '#ec4899'
  },
  { 
    id: 'hombres',
    title: 'Hombres Rugido de Fe', 
    desc: 'Forjando hombres de valor e integridad en Cristo.',
    img: RugidoImg,
    color: '#3b82f6'
  },
  { 
    id: 'jovenes',
    title: 'Jóvenes Generación R', 
    desc: 'Apasionados por descubrir su identidad en Cristo.',
    img: GeneracionRImg,
    color: '#8b5cf6'
  },
  { 
    id: 'evangelismo',
    title: 'Evangelismo Misión R', 
    desc: 'Llevando el mensaje de esperanza a cada rincón.',
    img: MisionImg,
    color: '#10b981'
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
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Ministries = () => {
  return (
    <section id="ministries" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comunidad
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Ministerios</h2>
          <motion.div 
            className="w-20 h-1 bg-secondary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Hay un lugar para ti en nuestra familia, donde puedes servir y ser edificado.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ministries.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  borderRadius: '24px', 
                  boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  '&:hover': {
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)',
                  }
                }}
              >
                {/* Image container with overlay */}
                <div className="relative overflow-hidden h-52 group">
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    sx={{ 
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    className="group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${item.color}40, ${item.color}80)` }}
                  />
                  {/* Floating badge */}
                  <motion.div 
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-bold backdrop-blur-sm"
                    style={{ backgroundColor: `${item.color}dd` }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.id === 'ninos' && '👶 Niños'}
                    {item.id === 'matrimonios' && '💒 Parejas'}
                    {item.id === 'mujeres' && '🌸 Mujeres'}
                    {item.id === 'hombres' && '💪 Hombres'}
                    {item.id === 'jovenes' && '⚡ Jóvenes'}
                    {item.id === 'evangelismo' && '🌍 Misiones'}
                  </motion.div>
                </div>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#1e3a8a',
                      fontSize: '1.25rem',
                      mb: 1
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ color: '#64748b', lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button 
                    component={Link}
                    to={`/ministerios/${item.id}`}
                    size="medium"
                    className="group/btn"
                    sx={{ 
                      color: item.color, 
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: '9999px',
                      px: 2,
                      '&:hover': {
                        backgroundColor: `${item.color}10`,
                      }
                    }}
                    endIcon={
                      <ArrowRight 
                        size={18} 
                        className="transition-transform duration-300 group-hover/btn:translate-x-1" 
                      />
                    }
                  >
                    Más información
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 mb-4">¿No encuentras tu lugar?</p>
          <Button
            component={Link}
            to="/ubicacion"
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#1e3a8a',
              color: '#1e3a8a',
              borderWidth: 2,
              borderRadius: '9999px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                borderWidth: 2,
                backgroundColor: '#1e3a8a',
                color: 'white'
              }
            }}
          >
            Visítanos y descubre más
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries;

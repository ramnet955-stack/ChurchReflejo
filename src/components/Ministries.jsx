import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import RebanitoImg from '../assets/Rebanito.webp';
import MatrimoniosImg from '../assets/MatrimoniosReflejo.webp';
import RenuevoImg from '../assets/Renuevo.webp';
import RugidoImg from '../assets/RUGIDOdeFE.webp';
import GeneracionRImg from '../assets/GeneracionR.webp';
import MisionImg from '../assets/Mision.webp';

const ministries = [
  { 
    id: 'matrimonios',
    title: 'Matrimonio Reflejo', 
    desc: 'Fortaleciendo la unión bajo los principios bíblicos.',
    img: MatrimoniosImg 
  },
  { 
    id: 'mujeres',
    title: 'Mujeres Renuevo', 
    desc: 'Creciendo juntas en fe, gracia y propósito.',
    img: RenuevoImg 
  },
  { 
    id: 'hombres',
    title: 'Hombres Refugio de Fe', 
    desc: 'Forjando hombres de valor e integridad en Cristo.',
    img: RugidoImg 
  },
  { 
    id: 'jovenes',
    title: 'Jóvenes Generación R', 
    desc: 'Apasionados por descubrir su identidad en Cristo.',
    img: GeneracionRImg 
  },
  { 
    id: 'evangelismo',
    title: 'Evangelismo Misión R', 
    desc: 'Llevando el mensaje de esperanza a cada rincón.',
    img: MisionImg 
  },
];

const Ministries = () => {
  return (
    <section id="ministries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Ministerios</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hay un lugar para ti en nuestra familia, donde puedes servir y ser edificado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {ministries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '16px', boxShadow: 3 }}>
                <div className="overflow-hidden h-48">
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.img}
                    alt={item.title}
                    sx={{ transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.05)' } }}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#1e3a8a' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button 
                    component={Link}
                    to={`/ministerios/${item.id}`}
                    size="small" 
                    sx={{ color: '#f59e0b', fontWeight: 'bold' }}
                    endIcon={<span className="text-xl">→</span>}
                  >
                    Más información
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;

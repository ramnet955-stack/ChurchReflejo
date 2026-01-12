import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Congregación adorando"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Gradient Overlay with animated opacity */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-primary-DEFAULT/95 via-primary-dark/70 to-primary-dark/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        {/* Subtle animated particles/grain effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Servicio en vivo · Domingos 10:00 AM</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-2xl"
        >
          Iglesia Bíblica{' '}
          <span className="relative">
            <span className="text-secondary">REFLEJO</span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            />
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto opacity-90 leading-relaxed mb-10"
        >
          ¡Que el mundo vea a <span className="font-semibold text-secondary">Jesús</span> a través de nosotros!
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              component={Link}
              to="/ubicacion"
              variant="contained"
              color="warning"
              size="large"
              endIcon={<ChevronRight className="group-hover:translate-x-1 transition-transform" />}
              className="btn-shine"
              sx={{
                backgroundColor: '#f59e0b',
                fontSize: '1.1rem',
                py: 1.75,
                px: 5,
                borderRadius: '9999px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0 10px 40px -10px rgba(245, 158, 11, 0.5)',
                '&:hover': { 
                  backgroundColor: '#d97706',
                  boxShadow: '0 15px 50px -10px rgba(245, 158, 11, 0.6)'
                }
              }}
            >
              Visítanos este Domingo
            </Button>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              component={Link}
              to="/nosotros"
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.4)',
                borderWidth: 2,
                fontSize: '1.1rem',
                py: 1.6,
                px: 5,
                borderRadius: '9999px',
                textTransform: 'none',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255,255,255,0.05)',
                '&:hover': { 
                  borderColor: '#fbbf24',
                  color: '#fbbf24',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderWidth: 2
                }
              }}
            >
              Conoce nuestra Iglesia
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { value: '500+', label: 'Miembros' },
            { value: '2', label: 'Sedes' },
            { value: '15+', label: 'Años' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div 
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Descubre más</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

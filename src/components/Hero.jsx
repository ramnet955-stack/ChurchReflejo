import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Video1 from '../assets/BANNER/a (1).mp4';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [uptime, setUptime] = useState({ months: 0, days: 0, hours: 0 });
  const startDate = useMemo(() => new Date('2025-12-25T00:00:00'), []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diffMs = now - startDate;
      const totalDays = Math.floor(diffMs / 86400000);
      const months = Math.max(0, Math.floor(totalDays / 30));
      const days = Math.max(0, totalDays % 30);
      const hours = Math.max(0, Math.floor((diffMs % 86400000) / 3600000));
      setUptime({ months, days, hours });
    };
    tick();
    const id = setInterval(tick, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, [startDate]);

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
    <section id="home" className="relative min-h-[70vh] md:min-h-[78vh] py-10 md:py-12 flex items-center justify-center overflow-hidden">
      {/* Background Video with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.video
          key="video-bg"
          src={Video1}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.25}px) scale(1.05)`, // Keep consistent parallax
            objectPosition: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        {/* Gradient Overlay with animated opacity (más oscuro + tinte naranja) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary-DEFAULT/92 via-primary-dark/72 to-primary-dark/42"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Overlay ámbar para calidez */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/28 via-transparent to-transparent mix-blend-multiply" />
        {/* Spotlight radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.14),transparent_48%)]" />
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
        className="relative z-10 container mx-auto px-4 sm:px-5 text-center text-white max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight mb-2 drop-shadow-2xl leading-tight"
        >
          Iglesia Bíblica{' '}
          <span className="text-secondary">REFLEJO</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl font-extralight max-w-3xl mx-auto opacity-90 leading-snug mb-4"
        >
          ¡Que el mundo vea a <span className="font-semibold text-secondary">Jesús</span> a través de nosotros!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5"
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
                backgroundColor: 'rgba(245, 158, 11, 0.9)',
                fontSize: '1rem',
                py: 1.35,
                px: 4,
                borderRadius: '9999px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0 8px 30px -12px rgba(245, 158, 11, 0.55)',
                '&:hover': {
                  backgroundColor: '#d97706',
                  boxShadow: '0 12px 34px -12px rgba(245, 158, 11, 0.6)'
                }
              }}
            >
              Visítanos este Domingo
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              component={Link}
              to="/?tab=0"
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.35)',
                borderWidth: 1.5,
                fontSize: '1rem',
                py: 1.25,
                px: 4,
                borderRadius: '9999px',
                textTransform: 'none',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255,255,255,0.08)',
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
          className="flex flex-wrap justify-center gap-2.5 md:gap-3 mt-6"
        >
          {[
            { value: '250+', label: 'Miembros' },
            { value: '2', label: 'Sedes' },
            { value: `${uptime.months}m ${uptime.days}d ${uptime.hours}h`, label: 'Desde 25 Dic 2025' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center px-3.5 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/15">
              <div className="text-[11px] text-secondary">•</div>
              <div className="text-xl md:text-2xl font-semibold text-secondary leading-tight">{stat.value}</div>
              <div className="text-[11px] tracking-wide text-white/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;

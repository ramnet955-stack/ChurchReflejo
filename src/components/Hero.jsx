import React from 'react';
import { Button } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Congregación adorando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-DEFAULT/90 to-primary-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          Iglesia Bíblica <span className="text-secondary">REFLEJO</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90 leading-relaxed">
          ¡Que el mundo vea a Jesús a través de nosotros!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            component={Link}
            to="/ubicacion"
            variant="contained"
            color="warning"
            size="large"
            endIcon={<ChevronRight />}
            sx={{
              backgroundColor: '#f59e0b',
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
              '&:hover': { backgroundColor: '#d97706' }
            }}
          >
            Visítanos este Domingo
          </Button>
          
          <Button
            component={Link}
            to="/nosotros"
            variant="outlined"
            size="large"
            sx={{
              color: 'white',
              borderColor: 'white',
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
              '&:hover': { 
                borderColor: '#fbbf24',
                color: '#fbbf24',
                backgroundColor: 'rgba(255,255,255,0.1)' 
              }
            }}
          >
            Conoce nuestra Iglesia
          </Button>
        </div>
      </div>

      {/* Scroll indicator maybe? */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="h-2 w-1 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

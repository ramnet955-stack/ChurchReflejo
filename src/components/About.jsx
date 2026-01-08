import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import YoshimarImg from '../assets/yoshimar.webp';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="animate-in fade-in py-8"
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
};

const About = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab !== null) {
      setValue(parseInt(tab));
      // Scroll to about section if we came from another page
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Somos una familia imperfecta sirviendo a un Dios perfecto.
          </p>
        </div>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              aria-label="about tabs" 
              variant="scrollable"
              scrollButtons="auto"
              centered={false}
              sx={{
                '& .MuiTabs-indicator': { backgroundColor: '#f59e0b' },
                '& .Mui-selected': { color: '#f59e0b !important' },
              }}
            >
              <Tab label="Visión / Misión" className="font-sans font-bold" />
              <Tab label="En esto creemos" className="font-sans font-bold" />
              <Tab label="Nuestra Historia" className="font-sans font-bold" />
              <Tab label="Nuestros Pastores" className="font-sans font-bold" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-3">Nuestra Misión</h3>
                    <p className="text-gray-700 leading-relaxed">
                      ¡Que el mundo vea a Jesús a través de nosotros!
                    </p>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-secondary">
                    <h3 className="text-2xl font-bold text-secondary mb-3">Nuestra Visión</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ser una iglesia que transforma su comunidad mediante el amor de Dios, la enseñanza bíblica y el servicio activo.
                    </p>
                  </div>
                </div>
                <div>
                   <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Comunidad" className="rounded-xl shadow-lg" />
                </div>
             </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "La Biblia es la Palabra de Dios",
                  "Dios es Trino: Padre, Hijo y Espíritu Santo",
                  "Salvación por Gracia a través de la Fe",
                  "Jesucristo es el único camino",
                  "El Bautismo y la Santa Cena",
                  "La Segunda Venida de Cristo"
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                      {idx + 1}
                    </div>
                    <h4 className="font-semibold text-gray-800">{item}</h4>
                  </div>
                ))}
             </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
             <div className="max-w-4xl mx-auto text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Más de 20 años sirviendo</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                   Iglesia Bíblica Reflejo nació con el deseo de ser un faro de luz en la ciudad. 
                   Desde nuestros inicios, nuestra prioridad ha sido la enseñanza fiel de las Escrituras 
                   y el amor al prójimo.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                   <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">2008</div>
                      <div className="text-sm text-gray-500">Fundación</div>
                   </div>
                   <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-gray-500">Miembros</div>
                   </div>
                   <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">2</div>
                      <div className="text-sm text-gray-500">Sedes</div>
                   </div>
                   <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">15</div>
                      <div className="text-sm text-gray-500">Ministerios</div>
                   </div>
                </div>
             </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center group">
                   <div className="relative overflow-hidden rounded-xl mb-4 aspect-square max-w-sm mx-auto">
                     <img src={YoshimarImg} alt="Pastor Yoshimar Mora" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">Pastor CdMx</h3>
                   <p className="text-primary font-medium">Yoshimar Mora</p>
                   <p className="text-sm text-gray-500 mt-2 px-4">Apasionado por la enseñanza expositiva de las Escrituras y el cuidado de las almas.</p>
                </div>
                <div className="text-center group">
                   <div className="relative overflow-hidden rounded-xl mb-4 aspect-square max-w-sm mx-auto">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pastora" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">Director de Ministerios</h3>
                   <p className="text-primary font-medium">Julio</p>
                   <p className="text-sm text-gray-500 mt-2 px-4">Coordinando los esfuerzos para que cada miembro encuentre su lugar de servicio.</p>
                </div>
             </div>
          </TabPanel>
        </Box>
      </div>
    </section>
  );
};

export default About;

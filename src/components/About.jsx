import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import YoshimarImg from '../assets/yoshimar.png';
import EstebanImg from '../assets/esteban.webp';
import JulioImg from '../assets/julio.webp';
import GenRLeaderImg from '../assets/generacion_R_Emmanuel_Clarisa.jpeg';
import RebanitoLeaderImg from '../assets/Rebanito_lideresCami_Dulce.jpeg';
import MisionVisionImg from '../assets/BANNER/image.png';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="animate-in fade-in py-6"
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
    <section id="about" className="py-8 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">Sobre Nosotros</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
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
                '& .MuiTab-root': { color: 'text.secondary' },
                '& .MuiTabs-scrollButtons': { color: 'text.secondary' },
              }}
            >
              <Tab label="Visión / Misión" className="font-sans font-bold" />
              <Tab label="En esto creemos" className="font-sans font-bold" />
              <Tab label="Nuestro Pastor" className="font-sans font-bold" />
              <Tab label="Nuestros Líderes" className="font-sans font-bold" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div className="bg-blue-50 dark:bg-slate-900/70 p-5 rounded-lg border-l-4 border-primary">
                  <h3 className="text-2xl font-bold text-primary mb-3">Nuestra Misión</h3>
                  <p className="text-gray-700 dark:text-slate-200 leading-relaxed">
                    ¡Que el mundo vea a Jesús a través de nosotros!
                  </p>
                </div>
                <div className="bg-amber-50 dark:bg-slate-900/70 p-5 rounded-lg border-l-4 border-secondary">
                  <h3 className="text-2xl font-bold text-secondary mb-3">Nuestra Visión</h3>
                  <p className="text-gray-700 dark:text-slate-200 leading-relaxed">
                    Ser una iglesia que transforma su comunidad mediante el amor de Dios, la enseñanza bíblica y el servicio activo.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={MisionVisionImg}
                  alt="Comunidad"
                  className="rounded-xl shadow-lg w-full h-full object-cover sepia-[.25] brightness-110 contrast-[.9] saturate-[1.2]"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-1 tracking-tight">DECLARACIÓN DE FE</h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 mb-5 uppercase tracking-widest font-semibold">Creemos:</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: 'I', title: 'La Biblia', desc: 'La Biblia es la', bold: 'Palabra de Dios,', desc2: 'totalmente', boldItalic: 'inspirada, inerrante y suficiente.', refs: '2 Tim 3:16-17;  2 Pedro 1:20-21.' },
                { num: 'II', title: 'Dios', bold: 'Un solo Dios', desc: 'en tres Personas:', boldItalic: 'Padre, Hijo y Espíritu Santo.', refs: 'Deut. 6:4;  Mateo 28:19;  2 Cor 13:14.' },
                { num: 'III', title: 'Jesucristo', desc: 'Jesús es', bold: '100% Dios y 100% hombre,', boldItalic: 'Salvador y Señor.', refs: 'Juan 1:1,14;  Colosenses 1:15-20.' },
                { num: 'IV', title: 'Espíritu Santo', desc: 'El Espíritu Santo', boldItalic: 'regenera, convence, santifica', desc2: 'y', boldItalic2: 'mora en los creyentes.', refs: 'Juan 16:7-15;  Efesios 1:13-14.' },
                { num: 'V', title: 'El Hombre y el Pecado', desc: 'El hombre fue creado a', bold: 'imagen de Dios', desc2: 'pero', boldItalic: 'cayó en pecado.', refs: 'Gén 1:26-27;  Rom 3:23.' },
                { num: 'VI', title: 'La Salvación', desc: 'La salvación es', bold: 'por gracia mediante la fe en Cristo,', desc2: 'no por obras.', refs: 'Efesios 2:8-9;  Tito 3:5.' },
                { num: 'VII', title: 'La Iglesia', desc: 'La Iglesia es el', bold: 'cuerpo de Cristo', desc2: 'compuesto por', boldItalic: 'creyentes regenerados.', refs: 'Efesios 4:11-16;  Hechos 2:42-47.' },
                { num: 'VIII', title: 'Las Últimas Cosas', boldItalic: 'Jesucristo volverá', desc: 'físicamente a establecer', boldItalic2: 'Su reino y a juzgar al mundo.', refs: '1 Tesalonicenses 4:14-18;  Apocalipsis 20-22.' },
                { num: 'IX', title: 'La Gran Comisión', desc: 'La', bold: 'iglesia existe', desc2: 'para', boldItalic: 'hacer discípulos', desc3: 'de todas las naciones.', refs: 'Mateo 28:19-20.' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-gray-50 dark:bg-slate-900/60 rounded-xl border border-gray-100 dark:border-slate-700/50 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-amber-600/10 text-amber-700 dark:text-amber-400 rounded-full flex items-center justify-center font-black text-sm">
                      {item.num}
                    </span>
                    <h4 className="font-black text-lg text-slate-800 dark:text-white leading-tight mt-1 uppercase tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.desc && <>{item.desc} </>}
                    {item.bold && <strong>{item.bold}</strong>}{' '}
                    {item.desc2 && <>{item.desc2} </>}
                    {item.boldItalic && <strong className="italic">{item.boldItalic}</strong>}{' '}
                    {item.desc3 && <>{item.desc3} </>}
                    {item.boldItalic2 && <strong className="italic">{item.boldItalic2}</strong>}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-slate-500 mt-2 font-medium">{item.refs}</p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="flex justify-center">
              <div className="text-center group max-w-sm">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                  <img src={YoshimarImg} alt="Pastor Yoshimar Mora" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">Pastor</h3>
                <p className="text-primary font-medium">Yoshimar Mora (CDMX y Metepec)</p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 px-4">Apasionado por la enseñanza expositiva de las Escrituras y el cuidado de las almas.</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square max-w-sm mx-auto">
                  <img src={JulioImg} alt="Líder Julio" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">Director de Ministerios</h3>
                <p className="text-primary font-medium">Julio (CDMX)</p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 px-4">Coordinando los esfuerzos para que cada miembro encuentre su lugar de servicio.</p>
              </div>

              <div className="text-center group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square max-w-sm mx-auto">
                  <img src={EstebanImg} alt="Líder Esteban" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">Co-pastor</h3>
                <p className="text-primary font-medium">Esteban (CDMX y Metepec)</p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 px-4">Sirviendo con fidelidad en el pastoreo y la enseñanza.</p>
              </div>

              <div className="text-center group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square max-w-sm mx-auto">
                  <img src={YoshimarImg} alt="Líder Yoshimar" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">Pastor</h3>
                <p className="text-primary font-medium">Yoshimar Mora (CDMX y Metepec)</p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 px-4">Liderando con visión y amor a la congregación.</p>
              </div>

              <div className="text-center group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square max-w-sm mx-auto">
                  <img src={GenRLeaderImg} alt="Líderes Generación R" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">Líderes Generación R</h3>
                <p className="text-primary font-medium">Emmanuel y Clarisa</p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 px-4">Guiando a los jóvenes a descubrir su identidad en Cristo.</p>
              </div>

              <div className="text-center group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square max-w-sm mx-auto">
                  <img src={RebanitoLeaderImg} alt="Líderes Rebañito" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">Líderes Rebañito</h3>
                <p className="text-primary font-medium">Cami y Dulce</p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 px-4">Sembrando amor y fe en los corazones de los más pequeños.</p>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </section>
  );
};

export default About;

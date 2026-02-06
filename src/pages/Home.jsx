import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import Discipleship from '../components/Discipleship';
import Events from '../components/Events';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Iglesia Bíblica Reflejo - ¡Que el mundo vea a Jesús!</title>
        <meta name="description" content="Comunidad cristiana enfocada en reflejar a Jesús. Servicios dominicales en Metepec y CdMx, ministerios para toda la familia y discipulado transformador." />
        <meta property="og:title" content="Iglesia Bíblica Reflejo" />
        <meta property="og:description" content="¡Que el mundo vea a Jesús a través de nosotros! Únete a nuestra comunidad." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Discipleship />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
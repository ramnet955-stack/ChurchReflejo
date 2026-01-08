import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Events from '../components/Events';

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Location from '../components/Location';

const LocationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;

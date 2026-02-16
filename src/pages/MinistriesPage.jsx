import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ministries from '../components/Ministries';

const MinistriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <Ministries />
      </main>
      <Footer />
    </div>
  );
};

export default MinistriesPage;

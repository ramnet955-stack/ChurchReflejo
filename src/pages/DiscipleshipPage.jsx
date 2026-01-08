import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Discipleship from '../components/Discipleship';

const DiscipleshipPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Discipleship />
      </main>
      <Footer />
    </div>
  );
};

export default DiscipleshipPage;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Heart, Gift } from 'lucide-react';

const Donate = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-20 px-4">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors">
        <ArrowLeft size={20} /> Volver al Inicio
      </Link>

      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
           <div className="inline-block p-4 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Gift size={40} />
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Tu Generosidad Transforma Vidas</h1>
           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             Cada donación nos ayuda a seguir extendiendo el amor de Jesús en nuestra comunidad y más allá.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Bank Transfer Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
            >
               <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <CreditCard className="text-blue-600" />
                  Transferencia Bancaria
               </h3>
               
               <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">Banco</p>
                    <p className="text-lg font-bold text-slate-900">BBVA Bancomer</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">CLABE</p>
                    <p className="text-lg font-bold text-slate-900 font-mono tracking-wide">012 345 6789012345 6</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">Cuenta</p>
                    <p className="text-lg font-bold text-slate-900 font-mono tracking-wide">1234567890</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">Titular</p>
                    <p className="text-lg font-bold text-slate-900">Iglesia Bíblica Reflejo A.R.</p>
                  </div>
               </div>
            </motion.div>

            {/* Online Donation Card (Placeholder for Stripe/PayPal) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
               
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                  <Heart className="text-pink-400" />
                  Donación en Línea
               </h3>
               
               <p className="text-blue-100 mb-8 relative z-10 leading-relaxed">
                 Realiza tu donativo de forma segura utilizando tu tarjeta de crédito o débito a través de nuestra plataforma segura.
               </p>

               <div className="space-y-4 relative z-10">
                  <button className="w-full py-4 bg-white text-blue-700 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-colors">
                     Donar con PayPal
                  </button>
                  <button className="w-full py-4 bg-blue-500/30 border border-blue-400/30 text-white rounded-xl font-bold hover:bg-blue-500/50 transition-colors">
                     Donar con Tarjeta
                  </button>
               </div>
            </motion.div>
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
           <p>Iglesia Bíblica Reflejo es una Asociación Religiosa registrada. Todos los donativos son deducibles de impuestos.</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
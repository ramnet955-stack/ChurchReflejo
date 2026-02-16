import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Donate = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankDetails = {
    banco: 'Scotiabank',
    clabe: '044 180 001 234 567 890', // Placeholder updated format
    cuenta: '001 234 567 89',
    titular: 'Iglesia Bíblica Reflejo A.R.'
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[45vh] bg-blue-900 rounded-b-[3rem] md:rounded-b-[5rem] z-0"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10 py-6 md:py-8 flex flex-col items-center">
        <Link to="/" className="self-start text-blue-200 hover:text-white font-bold transition-colors flex items-center gap-2 mb-4">
          <ArrowLeft size={20} /> Volver al Inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Tu Generosidad Transforma Vidas</h1>
          <p className="text-sm text-blue-100 max-w-xl mx-auto font-light leading-snug">
            "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." <br /> <span className="font-semibold mt-2 block opacity-80">2 Corintios 9:7</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 relative">
            <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500"></div>

            <div className="p-5 md:p-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-inner">
                  <CreditCard size={22} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-800 text-center mb-4">Datos Bancarios</h3>

              <div className="space-y-3">
                <div className="group relative bg-slate-50 p-3 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Banco</p>
                  <p className="text-base font-semibold text-slate-900">{bankDetails.banco}</p>
                </div>

                <div className="group relative bg-slate-50 p-3 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">CLABE Interbancaria</p>
                      <p className="text-base font-mono font-semibold text-slate-900 tracking-wide">{bankDetails.clabe}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(bankDetails.clabe, 'clabe')}
                      className="text-slate-400 hover:text-blue-600 transition-colors p-1"
                      title="Copiar CLABE"
                    >
                      {copied === 'clabe' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                <div className="group relative bg-slate-50 p-3 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Número de Cuenta</p>
                      <p className="text-base font-mono font-semibold text-slate-900 tracking-wide">{bankDetails.cuenta}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(bankDetails.cuenta, 'cuenta')}
                      className="text-slate-400 hover:text-blue-600 transition-colors p-1"
                      title="Copiar Cuenta"
                    >
                      {copied === 'cuenta' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                <div className="group relative bg-slate-50 p-3 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Titular</p>
                  <p className="text-base font-semibold text-slate-900">{bankDetails.titular}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500">
                  ¿Tienes dudas? <a href="mailto:contacto@iglesiareflejo.com" className="text-blue-600 font-semibold hover:underline">Contáctanos</a>
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-400 text-xs mt-4 max-w-xs mx-auto">
            Iglesia Bíblica Reflejo A.R. es una organización sin fines de lucro.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Donate;
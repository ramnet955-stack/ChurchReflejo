import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const ContactForm = ({ ministry = '', title = 'Contáctanos' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ministerio: ministry,
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      ministerio: ministry,
      mensaje: ''
    });
    setIsSubmitting(false);
  };

  const ministries = [
    { value: '', label: 'Selecciona un ministerio' },
    { value: 'general', label: 'Información General' },
    { value: 'discipulado', label: 'Discipulado' },
    { value: 'ninos', label: 'Rebañito (Niños)' },
    { value: 'matrimonios', label: 'Matrimonio Reflejo' },
    { value: 'mujeres', label: 'Mujeres Renuevo' },
    { value: 'hombres', label: 'Hombres Refugio de Fe' },
    { value: 'jovenes', label: 'Jóvenes Generación R' },
    { value: 'evangelismo', label: 'Misión R' },
    { value: 'donaciones', label: 'Donaciones' },
    { value: 'otro', label: 'Otro' }
  ];

  return (
    <>
      <Helmet>
        <title>{title} - Iglesia Bíblica Reflejo</title>
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 mb-6">
            ¿Tienes preguntas o quieres saber más sobre nosotros? Escríbenos y con gusto te atenderemos.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Tu teléfono"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="ministerio" className="block text-sm font-medium text-gray-700 mb-1">
                Área de interés
              </label>
              <select
                id="ministerio"
                name="ministerio"
                value={formData.ministerio}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              >
                {ministries.map(m => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-amber-500 hover:bg-amber-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactForm;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { Heart, Send, Shield } from 'lucide-react';

const PrayerRequest = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      nombre: 'María G.',
      fecha: '2026-01-08',
      categoria: 'Sanidad',
      peticion: 'Por la pronta recuperación de mi padre que está delicado de salud.',
      oracion: 24
    },
    {
      id: 2,
      nombre: 'Carlos R.',
      fecha: '2026-01-07',
      categoria: 'Trabajo',
      peticion: 'Por un nuevo empleo que he estado buscando, que Dios abra las puertas.',
      oracion: 18
    },
    {
      id: 3,
      nombre: 'Ana L.',
      fecha: '2026-01-06',
      categoria: 'Familia',
      peticion: 'Por la restauración de mi matrimonio, que Dios obre milagrosamente.',
      oracion: 42
    }
  ]);

  const [formData, setFormData] = useState({
    nombre: '',
    categoria: 'General',
    peticion: '',
    esPrivada: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newRequest = {
      id: Date.now(),
      ...formData,
      fecha: new Date().toISOString().split('T')[0],
      oracion: 0
    };
    
    setRequests([newRequest, ...requests]);
    setFormData({ nombre: '', categoria: 'General', peticion: '', esPrivada: false });
    setIsSubmitting(false);
    
    toast.success('¡Tu petición ha sido añadida a la lista de oración!');
  };

  const categorias = [
    { value: 'General', color: 'bg-gray-100 text-gray-700' },
    { value: 'Sanidad', color: 'bg-red-100 text-red-700' },
    { value: 'Trabajo', color: 'bg-blue-100 text-blue-700' },
    { value: 'Familia', color: 'bg-green-100 text-green-700' },
    { value: 'Finanzas', color: 'bg-yellow-100 text-yellow-700' },
    { value: 'Relaciones', color: 'bg-pink-100 text-pink-700' },
    { value: 'Paz', color: 'bg-purple-100 text-purple-700' }
  ];

  const getCategoryStyle = (cat) => {
    const category = categorias.find(c => c.value === cat);
    return category ? category.color : 'bg-gray-100 text-gray-700';
  };

  return (
    <>
      <Helmet>
        <title>Pedidos de Oración - Iglesia Bíblica Reflejo</title>
        <meta name="description" content="Comparte tus peticiones de oración con nuestra comunidad. Estamos para orar por ti." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pedidos de Oración</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            "La oración eficaz del justo puede mucho" - Santiago 5:16
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Nueva Petición</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tu nombre (opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    placeholder="Puedes dejarlo en blanco"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoría
                  </label>
                  <select
                    value={formData.categoria}
                    onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                  >
                    {categorias.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.value}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tu petición de oración *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.peticion}
                    onChange={(e) => setFormData({ ...formData, peticion: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 resize-none"
                    placeholder="Escribe aquí tu petición..."
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.esPrivada}
                    onChange={(e) => setFormData({ ...formData, esPrivada: e.target.checked })}
                    className="w-4 h-4 text-amber-500 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-gray-600">Petición privada (solo el equipo de oración la verá)</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Petición
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Lista de peticiones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Peticiones de la Comunidad</h2>
                <span className="text-sm text-gray-500">{requests.length} peticiones</span>
              </div>

              <AnimatePresence>
                <div className="space-y-4">
                  {requests.map((request, index) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryStyle(request.categoria)}`}>
                            {request.categoria}
                          </span>
                          <span className="text-sm text-gray-500">{request.fecha}</span>
                        </div>
                        <button
                          onClick={() => {
                            setRequests(requests.map(r => 
                              r.id === request.id ? { ...r, oracion: r.oracion + 1 } : r
                            ));
                            toast.success('¡Oración registrada!');
                          }}
                          className="flex items-center gap-1 text-amber-600 hover:text-amber-700 transition-colors"
                        >
                          <Heart className="w-4 h-4" />
                          <span className="text-sm font-medium">{request.oracion}</span>
                        </button>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{request.peticion}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4" />
                        <span>Oración por: {request.nombre || 'Anónimo'}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>

              {requests.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <Heart className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>No hay peticiones de oración actualmente.</p>
                  <p className="text-sm mt-2">Sé el primero en compartir una petición.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrayerRequest;

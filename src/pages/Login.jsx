import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, LogIn, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { loginRequest } from '../services/api';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        try {
            const data = await loginRequest({ email, password });
            setSuccess('Sesión iniciada. Bienvenido de vuelta.');
            // Puedes guardar tokens o redirigir aquí, según la respuesta del backend
            console.log('Login success', data);
        } catch (err) {
            setError(err.message || 'No se pudo iniciar sesión.');
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-colors z-50">
        <ArrowLeft size={20} /> Regresar
      </Link>

      {/* Left Side - Image/Brand */}
      <div className="hidden md:flex flex-col justify-between w-1/2 lg:w-5/12 bg-slate-900 p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/90 z-10"></div>
          {/* Abstract blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="relative z-20">
             <h2 className="text-3xl font-black tracking-tight">REFLEJO</h2>
             <p className="text-blue-200">Comunidad y Fe</p>
          </div>
          
          <div className="relative z-20 mb-12">
             <h1 className="text-5xl font-black leading-tight mb-6 white">Bienvenido a casa.</h1>
             <p className="text-slate-300 text-lg max-w-md">Inicia sesión para acceder a recursos exclusivos, inscribirte a eventos y gestionar tu perfil de miembro.</p>
          </div>
          
          <div className="relative z-20 text-xs text-slate-500">
             © 2026 Iglesia Bíblica Reflejo.
          </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
         <div className="w-full max-w-md">
            <div className="text-center mb-10 md:hidden">
                <h2 className="text-3xl font-black text-slate-900">REFLEJO</h2>
                <p className="text-slate-500">Iniciar Sesión</p>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100"
            >
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Hola de nuevo</h3>
                    <p className="text-slate-500">Ingresa tus credenciales para continuar.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Correo Electrónico</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium"
                                placeholder="nombre@ejemplo.com"
                                required
                            />
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-center mb-2">
                             <label className="block text-sm font-bold text-slate-700">Contraseña</label>
                             <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                        <input 
                                                                type="password" 
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium"
                                                                placeholder="••••••••"
                                                                required
                                                        />
                        </div>

                                        {error && (
                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 text-red-700 border border-red-100">
                                                <AlertCircle size={18} className="mt-0.5" />
                                                <p className="text-sm font-medium">{error}</p>
                                            </div>
                                        )}

                                        {success && (
                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 text-green-700 border border-green-100">
                                                <CheckCircle2 size={18} className="mt-0.5" />
                                                <p className="text-sm font-medium">{success}</p>
                                            </div>
                                        )}
                    </div>

                    <button 
                       type="submit" 
                       disabled={isLoading}
                       className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 transform active:scale-95"
                    >
                        {isLoading ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                            <>
                              <LogIn size={20} /> Iniciar Sesión
                            </>
                        )}
                    </button>
                    
                    <p className="text-center text-slate-500 mt-6">
                        ¿Aún no tienes cuenta? <a href="#" className="font-bold text-blue-600 hover:text-blue-700">Regístrate</a>
                    </p>
                </form>
            </motion.div>
         </div>
      </div>
    </div>
  );
};

export default Login;
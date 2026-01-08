import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">Iglesia Bíblica Reflejo</p>
          <h1 className="text-4xl font-black text-slate-900 mt-2">Términos y Condiciones</h1>
          <p className="text-slate-500 mt-3">Última actualización: 7 de enero de 2026</p>
        </div>

        <div className="space-y-8 bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Uso del sitio</h2>
            <p className="text-slate-600 leading-relaxed">Al utilizar este sitio aceptas hacerlo únicamente para fines lícitos y respetando estos términos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Registro y cuentas</h2>
            <p className="text-slate-600 leading-relaxed">Eres responsable de la veracidad de la información que proporciones y de mantener la confidencialidad de tus credenciales.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Contenido</h2>
            <p className="text-slate-600 leading-relaxed">El contenido publicado pertenece a Iglesia Bíblica Reflejo. No está permitido reproducirlo sin autorización previa.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Eventos y donaciones</h2>
            <p className="text-slate-600 leading-relaxed">Los horarios y lugares pueden cambiar. Las donaciones se destinan a los fines ministeriales de la iglesia.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Limitación de responsabilidad</h2>
            <p className="text-slate-600 leading-relaxed">Hacemos esfuerzos razonables por mantener el sitio disponible, pero no garantizamos disponibilidad ininterrumpida.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Modificaciones</h2>
            <p className="text-slate-600 leading-relaxed">Podemos actualizar estos términos en cualquier momento. Los cambios serán efectivos al publicarse en este sitio.</p>
          </section>
        </div>

        <div className="mt-10 flex items-center justify-between text-sm text-slate-500">
          <Link to="/" className="font-bold text-blue-700 hover:text-blue-800">Regresar al inicio</Link>
          <Link to="/privacidad" className="font-bold text-slate-700 hover:text-slate-900">Ver Aviso de Privacidad</Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;

import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">Iglesia Bíblica Reflejo</p>
          <h1 className="text-4xl font-black text-slate-900 mt-2">Aviso de Privacidad</h1>
          <p className="text-slate-500 mt-3">Última actualización: 7 de enero de 2026</p>
        </div>

        <div className="space-y-8 bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Responsable</h2>
            <p className="text-slate-600 leading-relaxed">Iglesia Bíblica Reflejo es responsable del tratamiento de los datos personales que nos proporciones.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Datos que recabamos</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Identificación y contacto: nombre, correo electrónico, teléfono.</li>
              <li>Datos de interacción: eventos en los que te registras, formularios enviados.</li>
              <li>Preferencias ministeriales y áreas de interés.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Finalidades</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Gestionar tu registro a eventos, discipulado y ministerios.</li>
              <li>Comunicarnos contigo sobre información relevante de la iglesia.</li>
              <li>Mejorar la experiencia en nuestros sitios y servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Conservación y seguridad</h2>
            <p className="text-slate-600 leading-relaxed">Tus datos se conservan únicamente el tiempo necesario para los fines descritos y se resguardan con medidas de seguridad administrativas y técnicas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Derechos ARCO</h2>
            <p className="text-slate-600 leading-relaxed">Puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición escribiendo a <a href="mailto:contacto@reflejo.org" className="text-blue-600 font-semibold">contacto@reflejo.org</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Transferencias</h2>
            <p className="text-slate-600 leading-relaxed">No compartimos tus datos con terceros, salvo obligación legal o para cumplir finalidades estrictamente necesarias para brindarte nuestros servicios.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Cambios al aviso</h2>
            <p className="text-slate-600 leading-relaxed">Cualquier modificación se publicará en este mismo sitio. Te recomendamos revisarlo periódicamente.</p>
          </section>
        </div>

        <div className="mt-10 flex items-center justify-between text-sm text-slate-500">
          <Link to="/" className="font-bold text-blue-700 hover:text-blue-800">Regresar al inicio</Link>
          <Link to="/terminos" className="font-bold text-slate-700 hover:text-slate-900">Ver Términos y Condiciones</Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

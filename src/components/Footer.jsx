import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import RLogo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-8">
          
          {/* Identity & Socials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={RLogo} alt="Logo" className="w-10 h-10 brightness-0 invert" />
              <div>
                <h3 className="text-xl font-black text-white leading-none tracking-tight">REFLEJO</h3>
                <p className="text-[9px] uppercase tracking-[0.2em] text-secondary mt-1 font-bold">Iglesia Bíblica</p>
              </div>
            </div>
            <div className="flex gap-3">
               <a href="https://www.facebook.com/iglesiabiblicareflejo" className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-secondary hover:text-white transition-all border border-slate-700/50" target="_blank" rel="noopener noreferrer"><Facebook size={14} /></a>
               <a href="https://www.instagram.com/iglesiabiblicareflejo" className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-secondary hover:text-white transition-all border border-slate-700/50" target="_blank" rel="noopener noreferrer"><Instagram size={14} /></a>
               <a href="https://m.youtube.com/@iglesiabiblicareflejo" className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-secondary hover:text-white transition-all border border-slate-700/50" target="_blank" rel="noopener noreferrer"><Youtube size={14} /></a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="flex-grow grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 md:px-12">
             <div className="space-y-3">
                <h4 className="text-white font-bold text-[9px] uppercase tracking-[0.3em] opacity-40">Nosotros</h4>
                <ul className="space-y-1.5 text-xs font-medium">
                   <li><Link to="/nosotros" className="hover:text-secondary">Conócenos</Link></li>
                   <li><Link to="/nosotros?tab=1" className="hover:text-secondary">Qué creemos</Link></li>
                </ul>
             </div>
             <div className="space-y-3">
                <h4 className="text-white font-bold text-[9px] uppercase tracking-[0.3em] opacity-40">Caminar</h4>
                <ul className="space-y-1.5 text-xs font-medium">
                   <li><Link to="/discipulado" className="hover:text-secondary">Discipulado</Link></li>
                   <li><Link to="/eventos" className="hover:text-secondary">Próximos eventos</Link></li>
                </ul>
             </div>
             <div className="space-y-3">
                <h4 className="text-white font-bold text-[9px] uppercase tracking-[0.3em] opacity-40">Comunidad</h4>
                <ul className="space-y-1.5 text-xs font-medium">
                   <li><Link to="/ministerios" className="hover:text-secondary">Nuestros Ministerios</Link></li>
                   <li><Link to="/ubicacion" className="hover:text-secondary">Visítanos <span className="opacity-50 text-[10px] font-normal tracking-tight">Metepec / CdMx</span></Link></li>
                </ul>
             </div>
             <div className="space-y-3">
                <h4 className="text-white font-bold text-[9px] uppercase tracking-[0.3em] opacity-40">Acciones</h4>
                <ul className="space-y-1.5 text-xs font-medium">
                   <li><Link to="/donar" className="text-secondary font-bold hover:brightness-110">Donar ahora</Link></li>
                   <li><Link to="/login" className="hover:text-secondary">Plataforma</Link></li>
                </ul>
             </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right min-w-[200px]">
             <h4 className="text-white font-bold text-[9px] uppercase tracking-[0.3em] opacity-40">Contacto</h4>
             <div className="space-y-0.5 text-xs font-semibold">
                <p className="hover:text-secondary transition-colors">+52 1 729 121 9121</p>
                <p className="hover:text-secondary transition-colors opacity-70">contacto@reflejo.org.mx</p>
                <p className="text-[9px] opacity-40 italic mt-1 uppercase tracking-[0.2em] font-black">Estado de México • CDMX</p>
             </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] uppercase font-black tracking-[0.3em] opacity-20">
           <p>© 2026 Iglesia Bíblica REFLEJO</p>
           <div className="flex gap-8">
              <Link to="/privacidad" className="hover:text-white">Aviso de Privacidad</Link>
              <Link to="/terminos" className="hover:text-white">Términos y Condiciones</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

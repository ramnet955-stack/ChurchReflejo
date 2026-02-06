import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RLogo from '../assets/logo.webp';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/iglesiabiblicareflejo', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/iglesiabiblicareflejo', label: 'Instagram' },
    { icon: Youtube, href: 'https://m.youtube.com/@iglesiabiblicareflejo', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 w-full overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={RLogo} alt="Logo" className="w-12 h-12 brightness-0 invert" />
              <div>
                <h3 className="text-2xl font-black text-white leading-none tracking-tight">REFLEJO</h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-secondary mt-1 font-bold">Iglesia Bíblica</p>
              </div>
            </motion.div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Una comunidad de fe dedicada a reflejar el amor de Cristo en cada vida y cada rincón de nuestra ciudad.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a 
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-secondary hover:scale-110"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Explora</h4>
            <ul className="space-y-3">
              {[
                { name: 'Nosotros', href: '/nosotros' },
                { name: 'Qué creemos', href: '/nosotros?tab=1' },
                { name: 'Discipulado', href: '/discipulado' },
                { name: 'Eventos', href: '/eventos' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-slate-400 hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-secondary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Comunidad</h4>
            <ul className="space-y-3">
              {[
                { name: 'Ministerios', href: '/ministerios' },
                { name: 'Visítanos', href: '/ubicacion' },
                { name: 'Donar', href: '/donar', highlight: true },
                { name: 'Plataforma', href: '/login' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className={`text-sm flex items-center gap-2 group transition-colors duration-300 ${
                      link.highlight 
                        ? 'text-secondary font-semibold hover:text-secondary-light' 
                        : 'text-slate-400 hover:text-secondary'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      link.highlight ? 'bg-secondary' : 'bg-slate-600 group-hover:bg-secondary'
                    }`} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contacto</h4>
            <div className="space-y-2">
              <a 
                href="tel:+527291219121" 
                className="flex items-center gap-3 text-slate-400 hover:text-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-slate-700/50">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">+52 1 729 121 9121</p>
                  <p className="text-xs text-slate-500">Llámanos</p>
                </div>
              </a>
              <a 
                href="mailto:contacto@reflejo.org.mx" 
                className="flex items-center gap-3 text-slate-400 hover:text-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-slate-700/50">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">contacto@reflejo.org.mx</p>
                  <p className="text-xs text-slate-500">Escríbenos</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">Metepec & CDMX</p>
                  <p className="text-xs text-slate-500">2 ubicaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>© 2026 Iglesia Bíblica REFLEJO.</span>
            <span className="hidden sm:inline">Hecho con</span>
            <Heart size={12} className="text-red-500 hidden sm:inline" />
            <span className="hidden sm:inline">para la gloria de Dios</span>
          </div>
          
          <div className="flex items-center gap-6 text-xs">
            <Link to="/privacidad" className="text-slate-500 hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link to="/terminos" className="text-slate-500 hover:text-white transition-colors">
              Términos
            </Link>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-500 hover:text-secondary transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline">Volver arriba</span>
              <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-slate-700/50">
                <ArrowUp size={14} />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

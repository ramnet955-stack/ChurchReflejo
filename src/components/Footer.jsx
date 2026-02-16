import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RLogo from '../assets/logo.png';

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
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 pt-6 pb-4 border-t border-slate-800 w-full overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-4">

          {/* Brand Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28 }}
          >
            <div className="flex items-center gap-3">
              <img src={RLogo} alt="Logo" className="w-12 h-12 brightness-0 invert" />
              <div>
                <h3 className="text-2xl font-black text-white leading-none tracking-tight">REFLEJO</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-secondary mt-1 font-bold">Iglesia Bíblica</p>
              </div>
            </div>
            <p className="text-base text-slate-400 leading-relaxed max-w-sm">
              Reflejando a Jesús en Metepec y CDMX. Una comunidad apasionada por servir, amar y crecer juntos en la fe.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-secondary hover:scale-105 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links compactos */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, delay: 0.05 }}
          >
            <h4 className="text-white font-bold text-sm uppercase tracking-widest relative inline-block">
              Explora
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full"></span>
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm pt-2">
              {[
                { name: 'Nosotros', href: '/nosotros' },
                { name: 'Qué creemos', href: '/nosotros?tab=1' },
                { name: 'Discipulado', href: '/discipulado' },
                { name: 'Ministerios', href: '/ministerios' },
                { name: 'Eventos', href: '/eventos' },
                { name: 'Ubicación', href: '/ubicacion' },
                { name: 'Donar', href: '/donar', highlight: true },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`flex items-center gap-2 group transition-colors duration-200 ${link.highlight
                    ? 'text-secondary font-bold'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-125 ${link.highlight ? 'bg-secondary' : 'bg-slate-600 group-hover:bg-secondary'}`} />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contacto + CTA */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, delay: 0.08 }}
          >
            <h4 className="text-white font-bold text-sm uppercase tracking-widest relative inline-block">
              Contacto
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full"></span>
            </h4>
            <div className="space-y-4 text-sm pt-2">
              <a
                href="tel:+527291219121"
                className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 mt-1 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700/50 group-hover:border-secondary/50 group-hover:text-secondary transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-bold text-white text-base">+52 1 729 121 9121</p>
                  <p className="text-xs text-slate-500">Lunes a Sábado, 9am - 6pm</p>
                </div>
              </a>
              <a
                href="mailto:contacto@reflejo.org.mx"
                className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 mt-1 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700/50 group-hover:border-secondary/50 group-hover:text-secondary transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-bold text-white text-base">contacto@reflejo.org.mx</p>
                  <p className="text-xs text-slate-500">Respondemos en menos de 24h</p>
                </div>
              </a>
              <Link
                to="/ubicacion"
                className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 mt-1 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700/50 group-hover:border-secondary/50 group-hover:text-secondary transition-colors">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-bold text-white text-base">Metepec & CDMX</p>
                  <p className="text-xs text-slate-500">Ver horarios de servicios</p>
                </div>
              </Link>
            </div>

            <div className="pt-2">
              <Link
                to="/ubicacion"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-secondary text-slate-950 px-6 py-3 text-sm font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <MapPin size={16} />
                Planear mi visita
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-4" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>© 2026 Iglesia Bíblica REFLEJO.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart size={10} className="text-red-500 fill-red-500" /> para la gloria de Dios
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacidad" className="hover:text-secondary transition-colors">
              Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-secondary transition-colors">
              Términos
            </Link>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors group ml-4"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Subir</span>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-secondary group-hover:text-slate-900 transition-all">
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

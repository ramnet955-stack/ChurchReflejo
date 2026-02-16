import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import RLogo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);


  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const root = document.documentElement;
    root.classList.add('theme-transition');
    window.setTimeout(() => root.classList.remove('theme-transition'), 350);
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    root.classList.toggle('dark', nextTheme === 'dark');
    window.dispatchEvent(new CustomEvent('theme-change', { detail: nextTheme }));
  };

  const navItems = [
    { name: 'Nosotros', href: '/?tab=0', dropdown: true },
    { name: 'Recorrido Discipulado', href: '/discipulado' },
    { name: 'Iglesia', href: '/ministerios' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Ubicación', href: '/ubicacion' },
  ];

  const aboutLinks = [
    { name: 'Visión / Misión', href: '/?tab=0' },
    { name: 'En esto creemos', href: '/?tab=1' },
    { name: 'Nuestro Pastor', href: '/?tab=2' },
    { name: 'Nuestros Líderes', href: '/?tab=3' },
  ];

  const isActive = (href) => {
    // For 'Nosotros', check if we are on home and tab param is present OR if path starts with /nosotros (backward compat)
    if (href.startsWith('/?tab=')) {
      return location.pathname === '/' && location.search.includes(href.split('?')[1]);
    }
    return location.pathname === href;
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center transition-all duration-300 h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.img
                src={RLogo}
                alt="Logo Reflejo"
                className="w-auto object-contain transition-all duration-300 h-24"
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/40 dark:border-slate-700/50 px-1 py-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    onClick={handleClick}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-normal text-sm lg:text-[15px] transition-all duration-300 ${isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-600 dark:text-slate-300 hover:text-primary hover:bg-white/60 dark:hover:bg-slate-800/70'
                      }`}
                  >
                    {item.name}
                    <motion.span
                      animate={{ rotate: anchorEl ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    elevation={0}
                    TransitionProps={{ timeout: 200 }}
                    sx={{
                      '& .MuiPaper-root': {
                        borderRadius: '16px',
                        marginTop: '12px',
                        minWidth: '200px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                        overflow: 'visible',
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          left: 24,
                          width: 12,
                          height: 12,
                          bgcolor: 'white',
                          transform: 'translateY(-50%) rotate(45deg)',
                          borderLeft: '1px solid #e2e8f0',
                          borderTop: '1px solid #e2e8f0',
                        }
                      }
                    }}
                  >
                    {aboutLinks.map((link, idx) => (
                      <MenuItem
                        key={link.name}
                        component={Link}
                        to={link.href}
                        onClick={handleClose}
                        sx={{
                          fontSize: '14px',
                          fontWeight: 500,
                          py: 1.5,
                          px: 3,
                          borderRadius: '8px',
                          mx: 1,
                          my: 0.5,
                          transition: 'all 0.2s',
                          '&:hover': {
                            backgroundColor: '#fef3c7',
                            color: '#1e3a8a'
                          }
                        }}
                      >
                        {link.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-1.5 rounded-full font-normal text-sm lg:text-[15px] transition-all duration-300 ${isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-600 dark:text-slate-300 hover:text-primary hover:bg-white/60 dark:hover:bg-slate-800/70'
                    }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Alternar tema"
              aria-pressed={theme === 'dark'}
              className="relative w-14 h-7 rounded-full border border-slate-200 bg-slate-100/80 text-slate-600 shadow-inner transition-colors dark:border-slate-700 dark:bg-slate-800/80"
            >
              <span className="absolute left-1 top-1/2 -translate-y-1/2 text-amber-500/80">
                <Sun size={12} />
              </span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-slate-400/80">
                <Moon size={12} />
              </span>
              <span
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${theme === 'dark'
                  ? 'translate-x-7 bg-slate-900 text-amber-300'
                  : 'translate-x-0 text-amber-500'
                  }`}
              >
                {theme === 'light' ? <Sun size={12} /> : <Moon size={12} />}
              </span>
            </button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={Link}
                to="/donar"
                variant="contained"
                color="warning"
                className="btn-shine"
                sx={{
                  backgroundColor: '#f59e0b',
                  '&:hover': { backgroundColor: '#d97706' },
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '9999px',
                  px: 2.5,
                  boxShadow: '0 4px 15px -3px rgba(245, 158, 11, 0.4)',
                }}
              >
                Donar
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Alternar tema"
              aria-pressed={theme === 'dark'}
              className="relative w-12 h-6 rounded-full border border-slate-200 bg-slate-100/80 text-slate-600 shadow-inner transition-colors dark:border-slate-700 dark:bg-slate-800/80"
            >
              <span className="absolute left-1 top-1/2 -translate-y-1/2 text-amber-500/80">
                <Sun size={10} />
              </span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-slate-400/80">
                <Moon size={10} />
              </span>
              <span
                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${theme === 'dark'
                  ? 'translate-x-6 bg-slate-900 text-amber-300'
                  : 'translate-x-0 text-amber-500'
                  }`}
              >
                {theme === 'light' ? <Sun size={10} /> : <Moon size={10} />}
              </span>
            </button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={Link}
                to="/donar"
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#f59e0b',
                  '&:hover': { backgroundColor: '#d97706' },
                  color: 'white',
                  minWidth: 'auto',
                  px: 2,
                  borderRadius: '9999px',
                  fontWeight: 600
                }}
              >
                Donar
              </Button>
            </motion.div>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2 rounded-full hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item, idx) => (
                <React.Fragment key={item.name}>
                  <motion.div
                    custom={idx}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${isActive(item.href)
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                  {item.dropdown && (
                    <div className="pl-6 space-y-1 mb-2">
                      {aboutLinks.map((subLink, subIdx) => (
                        <motion.div
                          key={subLink.name}
                          custom={idx + subIdx + 1}
                          variants={menuItemVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <Link
                            to={subLink.href}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

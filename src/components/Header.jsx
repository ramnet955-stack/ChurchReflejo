import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, User, ChevronDown } from 'lucide-react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import RLogo from '../assets/logo.webp';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: 'Nosotros', href: '/nosotros', dropdown: true },
    { name: 'Recorrido Discipulado', href: '/discipulado' },
    { name: 'Iglesia', href: '/ministerios' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Ubicación', href: '/ubicacion' },
  ];

  const aboutLinks = [
    { name: 'Visión / Misión', href: '/nosotros?tab=0' },
    { name: 'En esto creemos', href: '/nosotros?tab=1' },
    { name: 'Nuestra Historia', href: '/nosotros?tab=2' },
    { name: 'Nuestro Pastor', href: '/nosotros?tab=3' },
    { name: 'Nuestros Líderes', href: '/nosotros?tab=4' },
  ];

  const isActive = (href) => {
    if (href === '/nosotros') return location.pathname.startsWith('/nosotros');
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100/50' 
          : 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img 
                src={RLogo} 
                alt="Logo Reflejo" 
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    onClick={handleClick}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium text-sm lg:text-base transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
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
                  className={`relative px-4 py-2 rounded-full font-medium text-sm lg:text-base transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
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
          <div className="hidden md:flex items-center space-x-3">
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
                  px: 3,
                  boxShadow: '0 4px 15px -3px rgba(245, 158, 11, 0.4)',
                }}
              >
                Donar
              </Button>
            </motion.div>
            <Link 
              to="/login" 
              className="flex items-center space-x-2 text-gray-500 hover:text-primary transition-all duration-300 px-3 py-2 rounded-full hover:bg-gray-50"
            >
              <User size={18} />
              <span className="text-sm font-medium">Iniciar Sesión</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
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
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        isActive(item.href)
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
              <motion.div 
                className="pt-4 border-t border-gray-100 mt-4"
                custom={navItems.length + 5}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="/login" 
                  className="flex w-full items-center justify-center space-x-2 text-gray-600 py-3 hover:text-primary rounded-xl hover:bg-gray-50 transition-all" 
                  onClick={() => setIsOpen(false)}
                >
                  <User size={20} />
                  <span className="font-medium">Iniciar Sesión</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

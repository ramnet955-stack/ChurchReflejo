import React, { useState } from 'react';
import { Menu as MenuIcon, X, User, ChevronDown } from 'lucide-react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

import RLogo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
    { name: 'Nuestros Pastores', href: '/nosotros?tab=3' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={RLogo} alt="Logo Reflejo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    onClick={handleClick}
                    className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors font-medium text-sm lg:text-base"
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    elevation={3}
                    sx={{
                      '& .MuiPaper-root': {
                        borderRadius: '12px',
                        marginTop: '10px',
                        minWidth: '180px',
                        border: '1px solid #f1f5f9'
                      }
                    }}
                  >
                    {aboutLinks.map((link) => (
                      <MenuItem 
                        key={link.name} 
                        component={Link} 
                        to={link.href} 
                        onClick={handleClose}
                        sx={{ 
                          fontSize: '14px', 
                          fontWeight: 500,
                          py: 1.5,
                          '&:hover': { backgroundColor: '#f8fafc', color: '#1e3a8a' }
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
                  className="text-gray-600 hover:text-primary transition-colors font-medium text-sm lg:text-base"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
             <Button 
                component={Link}
                to="/donar"
                variant="contained" 
                color="warning" 
                sx={{ 
                  backgroundColor: '#f59e0b', 
                  '&:hover': { backgroundColor: '#d97706' },
                  color: 'white',
                  fontWeight: 'bold',
                  textTransform: 'none'
                }}
              >
                Donar
              </Button>
            <Link to="/login" className="text-gray-500 hover:text-primary transition-colors flex items-center space-x-1">
              <User size={20} />
              <span className="text-sm font-medium">Iniciar Sesión</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
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
                  px: 2
                }}
              >
                Donar
              </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <Link
                  to={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 space-y-1 mb-2">
                    {aboutLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-2">
              <Link to="/login" className="flex w-full items-center justify-center space-x-2 text-gray-600 py-3 hover:text-primary" onClick={() => setIsOpen(false)}>
                <User size={20} />
                <span>Iniciar Sesión</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

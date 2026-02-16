import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import * as Sentry from '@sentry/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Lazy loading de páginas
const Home = React.lazy(() => import('./pages/Home'));

const DiscipleshipPage = React.lazy(() => import('./pages/DiscipleshipPage'));
const MinistriesPage = React.lazy(() => import('./pages/MinistriesPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage'));
const LocationPage = React.lazy(() => import('./pages/LocationPage'));
const Login = React.lazy(() => import('./pages/Login'));
const Donate = React.lazy(() => import('./pages/Donate'));
const DiscipleshipDetail = React.lazy(() => import('./pages/DiscipleshipDetail'));
const MinistryDetail = React.lazy(() => import('./pages/MinistryDetail'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Componente de carga mejorado
const LoadingSpinner = () => (
  <motion.div
    className="min-h-screen flex items-center justify-center bg-gray-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="text-center">
      {/* Logo animado */}
      <motion.div
        className="relative mx-auto mb-6"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-3xl font-black text-white">R</span>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl"
          animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        />
      </motion.div>
      {/* Dots loader */}
      <div className="flex items-center justify-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-amber-500"
            animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <motion.p
        className="mt-4 text-gray-500 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Cargando...
      </motion.p>
    </div>
  </motion.div>
);

// Componente para rastrear rutas y hacer scroll al inicio
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
};

// Page transition wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

// Tema helper
const buildTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: { main: '#1e3a8a' },
    secondary: { main: '#f59e0b' },
    warning: { main: '#f59e0b' },
    background: { default: mode === 'dark' ? '#020617' : '#f9fafb' }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          fontWeight: 500,
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        }
      }
    }
  }
});

// Componente de error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Ups!</h1>
            <p className="text-gray-600 mb-6">Algo salió mal. Por favor, intenta cargar la página nuevamente.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Inicializar Sentry
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN || undefined,
  environment: import.meta.env.MODE,
  integrations:
    typeof Sentry.browserTracingIntegration === 'function'
      ? [Sentry.browserTracingIntegration()]
      : [],
  tracesSampleRate: Number(import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE ?? 0)
});

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const onThemeChange = (event) => setMode(event.detail || localStorage.getItem('theme') || 'light');
    window.addEventListener('theme-change', onThemeChange);
    return () => window.removeEventListener('theme-change', onThemeChange);
  }, []);

  const theme = useMemo(() => buildTheme(mode), [mode]);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HashRouter>
            <ScrollToTop />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#1e3a8a',
                  color: '#fff',
                  borderRadius: '12px',
                  padding: '16px'
                },
                success: {
                  iconTheme: { primary: '#10b981', secondary: '#fff' }
                },
                error: {
                  iconTheme: { primary: '#ef4444', secondary: '#fff' }
                }
              }}
            />
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-amber-200">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/nosotros" element={<AboutPage />} /> */}
                    <Route path="/discipulado" element={<DiscipleshipPage />} />
                    <Route path="/ministerios" element={<MinistriesPage />} />
                    <Route path="/eventos" element={<EventsPage />} />
                    <Route path="/ubicacion" element={<LocationPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/donar" element={<Donate />} />
                    <Route path="/discipulado/:id" element={<DiscipleshipDetail />} />
                    <Route path="/ministerios/:id" element={<MinistryDetail />} />
                    <Route path="/privacidad" element={<Privacy />} />
                    <Route path="/terminos" element={<Terms />} />
                  </Routes>
                </div>
              </AnimatePresence>
            </Suspense>
          </HashRouter>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;

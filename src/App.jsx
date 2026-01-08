import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import Login from './pages/Login';
import Donate from './pages/Donate';
import DiscipleshipDetail from './pages/DiscipleshipDetail';
import MinistryDetail from './pages/MinistryDetail';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AboutPage from './pages/AboutPage';
import DiscipleshipPage from './pages/DiscipleshipPage';
import MinistriesPage from './pages/MinistriesPage';
import EventsPage from './pages/EventsPage';
import LocationPage from './pages/LocationPage';

// Create a custom MUI theme to match Tailwind
const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a', // blue-900
    },
    secondary: {
      main: '#f59e0b', // amber-500
    },
    warning: {
      main: '#f59e0b',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-amber-200">
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<AboutPage />} />
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
              {/* Fallback for other potential routes to be added */}
           </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

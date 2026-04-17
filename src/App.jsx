import React, { useState, useEffect, createContext, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

// Create theme context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2.5s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#3b82f6', // Bright modern blue
        light: '#60a5fa',
        dark: '#2563eb',
      },
      secondary: {
        main: '#8b5cf6', // Indigo/Purple accent
        light: '#a78bfa',
        dark: '#7c3aed',
      },
      background: {
        default: mode === 'light' ? '#f8fafc' : '#0f172a', // Slate backgrounds
        paper: mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 41, 59, 0.8)',
      },
      text: {
        primary: mode === 'light' ? '#0f172a' : '#f8fafc',
        secondary: mode === 'light' ? '#475569' : '#cbd5e1',
      },
    },
    typography: {
      fontFamily: '"Outfit", "Plus Jakarta Sans", "Inter", sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      button: {
        fontWeight: 600,
        textTransform: 'none', // Modern buttons don't always uppercase
      },
    },
    shape: {
      borderRadius: 16, // Modern rounded corners
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px', // Smooth rounded buttons
            padding: '10px 24px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 41, 59, 0.6)',
            backdropFilter: 'blur(12px)',
            borderRadius: '24px',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: mode === 'dark' ? '#334155 #0f172a' : '#cbd5e1 #f8fafc',
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              background: mode === 'dark' ? '#0f172a' : '#f8fafc',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: mode === 'dark' ? '#334155' : '#cbd5e1',
              borderRadius: '20px',
            },
            selection: {
              background: 'rgba(59, 130, 246, 0.3)',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Preloader isLoading={loading} />
        <Box sx={{ minHeight: '100vh', opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}>
          <Header />
          <Home />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

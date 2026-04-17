import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme as useMuiTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleColorMode } = useTheme();
  const isDark = mode === 'dark';

  const menuItems = ['Home', 'Skills', 'Education', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = menuItems.map((item) => item.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? isDark
              ? 'rgba(15, 23, 42, 0.85)'
              : 'rgba(248, 250, 252, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`
            : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={() => scrollToSection('Home')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1 }}
                  >
                    N
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: 'text.primary',
                    fontSize: '1.1rem',
                    letterSpacing: '-0.5px',
                  }}
                >
                  natnael.
                </Typography>
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {menuItems.map((item, i) => {
                  const isActive = activeSection === item.toLowerCase();
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Button
                        onClick={() => scrollToSection(item)}
                        sx={{
                          px: 2.5,
                          py: 1,
                          borderRadius: '10px',
                          color: isActive ? 'primary.main' : 'text.secondary',
                          fontWeight: isActive ? 700 : 500,
                          fontSize: '0.9rem',
                          position: 'relative',
                          bgcolor: isActive
                            ? isDark
                              ? 'rgba(59,130,246,0.1)'
                              : 'rgba(59,130,246,0.08)'
                            : 'transparent',
                          '&:hover': {
                            bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                            color: 'primary.main',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {item}
                      </Button>
                    </motion.div>
                  );
                })}
              </Box>
            )}

            {/* Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
              <IconButton
                onClick={toggleColorMode}
                size="small"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  color: 'text.secondary',
                  bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                  '&:hover': {
                    bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                {isDark ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
              </IconButton>

              {isMobile && (
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    color: 'text.primary',
                    bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                  }}
                >
                  <MenuIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1300,
              background: isDark ? 'rgba(15,23,42,0.98)' : 'rgba(248,250,252,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: 'text.primary',
              }}
            >
              <CloseIcon />
            </IconButton>

            {menuItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Button
                  onClick={() => scrollToSection(item)}
                  sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'text.primary',
                    py: 2,
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {item}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
};

export default Header;

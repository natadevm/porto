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
  Chip,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../App';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleColorMode } = useTheme();

  const menuItems = ['Home', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, p: 2 }}>
        <Avatar
          sx={{
            width: 48,
            height: 48,
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            color: 'white',
            fontWeight: 700,
            mr: 2,
          }}
        >
          NH
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
          Natnael Hailu
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={item} 
            onClick={() => scrollToSection(item)}
            sx={{ 
              mb: 1,
              borderRadius: 2,
              transition: 'all 0.3s ease-in-out',
              '&:hover': { 
                backgroundColor: 'primary.main',
                color: 'white',
                transform: 'translateX(8px)',
              } 
            }}
          >
            <ListItemText 
              primary={item} 
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: '1rem',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 8 : 0}
        sx={{ 
          backgroundColor: mode === 'light' 
            ? scrolled 
              ? 'rgba(255, 255, 255, 0.98)' 
              : 'rgba(255, 255, 255, 0.95)'
            : scrolled 
              ? 'rgba(18, 18, 18, 0.98)' 
              : 'rgba(18, 18, 18, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: mode === 'light' 
            ? '1px solid rgba(0, 0, 0, 0.1)' 
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Avatar
              sx={{
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                color: 'white',
                fontWeight: 700,
                mr: 2,
                boxShadow: '0 4px 16px rgba(25, 118, 210, 0.3)',
              }}
            >
              NH
            </Avatar>
            <Box>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  lineHeight: 1,
                }}
              >
                Natnael Hailu
              </Typography>
              <Chip
                label="MERN Developer"
                size="small"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontSize: '0.7rem',
                  height: 20,
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Dark Mode Toggle */}
            <IconButton
              onClick={toggleColorMode}
              color="primary"
              sx={{ 
                mr: 1,
                width: 48,
                height: 48,
                borderRadius: 2,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  transform: 'rotate(180deg)',
                }
              }}
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            
            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    color="primary"
                    onClick={() => scrollToSection(item)}
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 600,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 16px rgba(25, 118, 210, 0.3)',
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: mode === 'light' 
              ? 'linear-gradient(135deg, #ffffff, #f8f9fa)'
              : 'linear-gradient(135deg, #1e1e1e, #2a2a2a)',
            color: mode === 'light' ? '#333333' : '#ffffff',
            borderLeft: mode === 'light' 
              ? '1px solid rgba(0,0,0,0.1)' 
              : '1px solid rgba(255,255,255,0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
      
      <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }} /> {/* Spacer for fixed AppBar */}
    </>
  );
};

export default Header; 
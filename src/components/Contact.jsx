import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Button,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Email,
  Phone,
  GitHub,
  LinkedIn,
  Send,
  LocationOn,
  Work,
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const contactInfo = [
    {
      icon: <Email />,
      primary: 'Email',
      secondary: 'natanelhailu2809@gmail.com',
      link: 'mailto:natanelhailu2809@gmail.com',
      color: '#D44638',
    },
    {
      icon: <Phone />,
      primary: 'Phone',
      secondary: '+251980118769',
      link: 'tel:+251980118769',
      color: '#25D366',
    },
    {
      icon: <GitHub />,
      primary: 'GitHub',
      secondary: 'github.com/natabile',
      link: 'https://github.com/natabile',
      color: '#333333',
    }
  ];

  const availability = [
    {
      icon: <Work />,
      title: 'Freelance',
      status: 'Available',
      description: 'Open to project-based work',
    },
    {
      icon: <Work />,
      title: 'Full-time',
      status: 'Available',
      description: 'Looking for new opportunities',
    },
    {
      icon: <Work />,
      title: 'Collaboration',
      status: 'Open',
      description: 'Excited to work with teams',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: isDark 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isDark
            ? 'radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 80% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to work together!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={isDark ? 3 : 6}
              sx={{
                p: 4,
                height: '100%',
                background: isDark 
                  ? 'linear-gradient(145deg, #1e1e1e, #2a2a2a)'
                  : 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: isDark ? 8 : 12,
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: 'text.primary',
                  textAlign: 'center',
                  background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Contact Information
              </Typography>
              
              <List sx={{ pt: 0 }}>
                {contactInfo.map((info, index) => (
                  <ListItem
                    key={index}
                    component="a"
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    sx={{
                      textDecoration: 'none',
                      color: 'text.primary',
                      mb: 2,
                      p: 3,
                      borderRadius: 3,
                      background: isDark 
                        ? 'rgba(255,255,255,0.05)' 
                        : 'rgba(25, 118, 210, 0.05)',
                      border: isDark 
                        ? '1px solid rgba(255,255,255,0.1)' 
                        : '1px solid rgba(25, 118, 210, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        background: isDark 
                          ? 'rgba(255,255,255,0.1)' 
                          : 'rgba(25, 118, 210, 0.1)',
                        transform: 'translateX(8px) scale(1.02)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: info.color,
                        color: 'white',
                        mr: 2,
                        width: 48,
                        height: 48,
                        boxShadow: `0 4px 16px ${info.color}40`,
                      }}
                    >
                      {info.icon}
                    </Avatar>
                    <ListItemText
                      primary={info.primary}
                      secondary={info.secondary}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        color: 'text.primary',
                      }}
                      secondaryTypographyProps={{
                        color: 'text.secondary',
                        fontSize: '1rem',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Availability & Call to Action */}
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={isDark ? 3 : 6}
              sx={{
                p: 4,
                height: '100%',
                background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                color: 'white',
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 48px rgba(25, 118, 210, 0.3)',
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Let's Work Together
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Current Availability
                </Typography>
                
                <Grid container spacing={2}>
                  {availability.map((item, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          background: 'rgba(255,255,255,0.1)',
                          textAlign: 'center',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            background: 'rgba(255,255,255,0.2)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 1,
                            fontSize: '1.5rem',
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            mb: 0.5,
                            color: 'white',
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Chip
                          label={item.status}
                          size="small"
                          sx={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            fontWeight: 600,
                            mb: 1,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255,255,255,0.8)',
                            display: 'block',
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  I'm available for freelance work, full-time positions, and exciting collaborations. 
                  Don't hesitate to reach out!
                </Typography>
                
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Send />}
                  href="mailto:codernathailu@gmail.com"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(255,255,255,0.3)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 40px rgba(255,255,255,0.4)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 
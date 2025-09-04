import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
  Avatar,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import { GitHub, LinkedIn, Email, ArrowDownward, Code, Storage, Api, Web, Star } from '@mui/icons-material';

const Home = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const services = [
    {
      icon: <Web />,
      title: 'Frontend Development',
      description: 'Modern React applications with responsive design',
      color: '#61DAFB',
      features: ['React.js', 'Material-UI', 'Responsive Design'],
    },
    {
      icon: <Api />,
      title: 'Backend Development',
      description: 'RESTful APIs and server-side logic with Node.js',
      color: '#339933',
      features: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      icon: <Storage />,
      title: 'Database Design',
      description: 'MongoDB schemas and data optimization',
      color: '#47A248',
      features: ['MongoDB', 'Mongoose', 'Data Modeling'],
    },
    {
      icon: <Code />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end web application development',
      color: '#764ABC',
      features: ['MERN Stack', 'Redux', 'JWT Auth'],
    },
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: isDark 
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isDark
            ? 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          zIndex: 1,
          animation: 'backgroundFloat 20s ease-in-out infinite',
        }}
      />

      {/* Floating Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(25, 118, 210, 0.2)',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 1,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {/* Profile Avatar */}
              <Box sx={{ mb: 4, display: { xs: 'flex', md: 'block' }, justifyContent: 'center' }}>
                <Avatar
                  sx={{
                    width: { xs: 140, md: 180 },
                    height: { xs: 140, md: 180 },
                    fontSize: { xs: '3.5rem', md: '4.5rem' },
                    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                    border: '6px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 16px 64px rgba(25, 118, 210, 0.4)',
                    mb: { xs: 2, md: 0 },
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                >
                  NH
                </Avatar>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                  fontWeight: 700,
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'slideInLeft 1s ease-out',
                }}
              >
                Natnael Hailu
              </Typography>
              
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                  fontWeight: 600,
                  mb: 3,
                  color: 'rgba(255,255,255,0.9)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  animation: 'slideInLeft 1s ease-out 0.2s both',
                }}
              >
                MERN Stack Developer
              </Typography>
              {/* Experience Badge */}
              <Box sx={{ mb: 3, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                
              </Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '500px',
                  mx: { xs: 'auto', md: 0 },
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  animation: 'slideInLeft 1s ease-out 0.6s both',
                }}
              >
                I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. 
                Passionate about creating scalable, user-friendly solutions that make a difference.
              </Typography>

              {/* Stats */}
              <Box sx={{ 
                display: 'flex', 
                gap: 3, 
                mb: 4, 
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap',
                animation: 'slideInLeft 1s ease-out 0.8s both',
              }}>
                {stats.map((stat, index) => (
                  <Box key={index} sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: '#FFD700',
                        fontSize: { xs: '1.5rem', md: '2rem' },
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.8rem',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                justifyContent: { xs: 'center', md: 'flex-start' }, 
                flexWrap: 'wrap',
                animation: 'slideInLeft 1s ease-out 1s both',
              }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<GitHub />}
                  href="https://github.com/natabile"
                  target="_blank"
                  sx={{
                    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 40px rgba(25, 118, 210, 0.4)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Email />}
                  href="mailto:codernathailu@gmail.com"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Contact
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={8}
              sx={{
                p: 4,
                background: isDark 
                  ? 'rgba(255,255,255,0.05)' 
                  : 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: 4,
                border: isDark 
                  ? '1px solid rgba(255,255,255,0.1)' 
                  : '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 16px 64px rgba(0,0,0,0.2)',
                animation: 'slideInRight 1s ease-out 0.5s both',
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  textAlign: 'center',
                  background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                What I Do
              </Typography>
              
              <Grid container spacing={3}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card
                      sx={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 3,
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                        height: '100%',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          background: 'rgba(255,255,255,0.1)',
                          '& .service-icon': {
                            transform: 'scale(1.1) rotate(5deg)',
                          },
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, textAlign: 'center' }}>
                        <Box
                          className="service-icon"
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                            color: 'white',
                            mb: 2,
                            mx: 'auto',
                            transition: 'all 0.3s ease-in-out',
                            fontSize: '1.5rem',
                            boxShadow: `0 8px 32px ${service.color}40`,
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: 'white',
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255,255,255,0.8)',
                            lineHeight: 1.5,
                            mb: 2,
                          }}
                        >
                          {service.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                          {service.features.map((feature, featureIndex) => (
                            <Chip
                              key={featureIndex}
                              label={feature}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                fontSize: '0.7rem',
                                height: 24,
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <style>
        {`
          @keyframes backgroundFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Home; 
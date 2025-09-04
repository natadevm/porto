import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  CardMedia,
  useTheme,
  Avatar,
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  GitHub,
  Launch,
  AttachMoney,
  Home,
  Article,
  Star,
  Visibility,
} from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const projects = [
    {
      title: 'FMS – Personal Finance Management',
      description: 'Track personal finances, view budgets with attractive UI, and follow crypto prices.',
      github: 'https://github.com/natabile/FMs',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: 'birr',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: '#4CAF50',
      completion: 100,
      complexity: 'Advanced',
    },
    {
      title: 'Endebet – Home Rental Platform',
      description: 'Rental platform with listings, map search,real-time chat,location and gallery.',
      github: 'https://github.com/natabile/home',
      image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
      icon: <Home />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      color: '#2196F3',
      completion: 100,
      complexity: 'Expert',
    },
    {
      title: 'Tech News App',
      description: 'A modern tech news aggregator with responsive layout and filter functionality.',
      github: 'https://github.com/natabile/news',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: <Article />,
      technologies: ['React', 'API Integration', 'Responsive Design'],
      color: '#FF9800',
      completion: 100,
      complexity: 'Intermediate',
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        background: isDark 
          ? 'linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #0f0f0f 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
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
            ? 'radial-gradient(circle at 80% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
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
            Featured Projects
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
            Here are some of my recent projects that showcase my skills and passion for web development
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                elevation={isDark ? 3 : 6}
                sx={{
                  width: '100%',
                  height: '700px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  background: isDark 
                    ? 'linear-gradient(145deg, #1e1e1e, #2a2a2a)'
                    : 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: isDark ? 16 : 20,
                    '& .project-image': {
                      transform: 'scale(1.08)',
                    },
                    '& .project-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                  },
                }}
              >
                <Box sx={{ 
                  position: 'relative', 
                  overflow: 'hidden', 
                  flexShrink: 0,
                  height: '220px',
                }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    className="project-icon"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                      color: 'white',
                      borderRadius: '16px',
                      width: 56,
                      height: 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 32px ${project.color}40`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: '1.5rem',
                    }}
                  >
                    {project.icon}
                  </Box>
                  
                  {/* Project Status Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Chip
                      icon={<Star />}
                      label={project.complexity}
                      size="small"
                      sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        fontWeight: 600,
                        '& .MuiChip-icon': {
                          color: '#FFD700',
                        },
                      }}
                    />
                  </Box>
                </Box>

                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 4, 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '360px',
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: 'text.primary',
                      lineHeight: 1.3,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      height: '3.6rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                      height: '4.8rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Completion Progress */}
                  <Box sx={{ mb: 3, height: '40px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        Completion
                      </Typography>
                      <Typography variant="caption" color="primary.main" fontWeight={600}>
                        {project.completion}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={project.completion}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 3,
                          background: `linear-gradient(90deg, ${project.color}, ${project.color}dd)`,
                        },
                      }}
                    />
                  </Box>

                  <Divider sx={{ mb: 3 }} />

                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 1, 
                    mb: 3,
                    height: '32px',
                    overflow: 'hidden',
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          fontSize: '0.75rem',
                          backgroundColor: isDark ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ 
                  p: 4, 
                  pt: 0, 
                  flexShrink: 0,
                  height: '80px',
                }}>
                  <Button
                    size="medium"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      fontWeight: 600,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: 4,
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Want to see more?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Explore my complete portfolio on GitHub to see all my projects and contributions
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/natabile"
            target="_blank"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(25, 118, 210, 0.4)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Visit My GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 
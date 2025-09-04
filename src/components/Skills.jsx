import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  useTheme,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  Code,
  Storage,
  Api,
  Web,
  DataObject,
  Schema,
  Star,
  TrendingUp,
} from '@mui/icons-material';

const Skills = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const skills = [
    {
      name: 'React.js',
      icon: <Web />,
      color: '#61DAFB',
      description: 'Frontend development with React hooks and components',
      proficiency: 90,
      level: 'Expert',
    },
    {
      name: 'Redux',
      icon: <DataObject />,
      color: '#764ABC',
      description: 'State management and predictable state container',
      proficiency: 85,
      level: 'Advanced',
    },
    {
      name: 'Node.js',
      icon: <Code />,
      color: '#339933',
      description: 'Server-side JavaScript runtime environment',
      proficiency: 80,
      level: 'Expert',
    },
    {
      name: 'Express.js',
      icon: <Api />,
      color: '#000000',
      description: 'Web application framework for Node.js',
      proficiency: 85,
      level: 'Advanced',
    },
    {
      name: 'MongoDB',
      icon: <Storage />,
      color: '#47A248',
      description: 'NoSQL database for scalable applications',
      proficiency: 82,
      level: 'Advanced',
    },
    {
      name: 'Mongoose',
      icon: <Schema />,
      color: '#880000',
      description: 'MongoDB object modeling for Node.js',
      proficiency: 80,
      level: 'Advanced',
    },
    {
      name: 'Material-UI',
      icon: <Web />,
      color: '#1976d2',
      description: 'React UI framework for building beautiful interfaces',
      proficiency: 100,
      level: 'Expert',
    },
  ];

  const additionalSkills = [
    { name: 'JavaScript (ES6+)', category: 'Language', icon: '⚡' },
    { name: 'HTML5 & CSS3', category: 'Frontend', icon: '🎨' },
    { name: 'Git & GitHub', category: 'Tools', icon: '📚' },
    { name: 'RESTful APIs', category: 'Backend', icon: '🔌' },
    { name: 'JWT Authentication', category: 'Security', icon: '🔐' },
    { name: 'Responsive Design', category: 'Frontend', icon: '📱' },
    { name: 'Agile Methodology', category: 'Process', icon: '🔄' },
    { name: 'Postman', category: 'Tools', icon: '📮' },
    { name: 'VS Code', category: 'Tools', icon: '💻' },
  ];

  const skillCategories = [...new Set(additionalSkills.map(skill => skill.category))];

  return (
    <Box
      id="skills"
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
            Skills & Technologies
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
            I work with modern technologies to build robust and scalable web applications. 
            Here's my expertise level across different technologies.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={isDark ? 2 : 4}
                sx={{
                  height: '100%',
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
                    boxShadow: isDark ? 12 : 16,
                    '& .skill-icon': {
                      transform: 'scale(1.15) rotate(5deg)',
                    },
                    '& .skill-progress': {
                      '& .MuiLinearProgress-bar': {
                        animation: 'progressAnimation 1s ease-in-out',
                      },
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box
                  className="skill-icon"
                  sx={{
                    width: 80,
                    height: 80,
                      borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                      background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                    color: 'white',
                      mb: 3,
                      mx: 'auto',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: '2.5rem',
                      boxShadow: `0 8px 32px ${skill.color}40`,
                  }}
                >
                  {skill.icon}
                </Box>
                
                <Typography
                    variant="h5"
                  sx={{
                      fontWeight: 700,
                    mb: 1,
                    color: 'text.primary',
                      textAlign: 'center',
                  }}
                >
                  {skill.name}
                </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <Chip
                      icon={<Star />}
                      label={skill.level}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                      textAlign: 'center',
                      flexGrow: 1,
                  }}
                >
                  {skill.description}
                </Typography>

                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        Proficiency
                      </Typography>
                      <Typography variant="caption" color="primary.main" fontWeight={600}>
                        {skill.proficiency}%
                      </Typography>
                    </Box>
                    <Box className="skill-progress">
                      <LinearProgress
                        variant="determinate"
                        value={skill.proficiency}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Skills Section */}
        <Box sx={{ mt: 12 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
              variant="h3"
            sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Additional Skills
          </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              A comprehensive toolkit of technologies and methodologies I use in my development workflow
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {skillCategories.map((category) => (
              <Grid item xs={12} md={6} lg={4} key={category}>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <TrendingUp sx={{ color: 'primary.main', mr: 2, fontSize: '2rem' }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {category}
                    </Typography>
                  </Box>
                  
                  <Divider sx={{ mb: 3 }} />
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {additionalSkills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <Box
                key={index}
                sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 2,
                            borderRadius: 2,
                            background: isDark 
                              ? 'rgba(255,255,255,0.05)' 
                              : 'rgba(25, 118, 210, 0.05)',
                            transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                              background: isDark 
                                ? 'rgba(255,255,255,0.1)' 
                                : 'rgba(25, 118, 210, 0.1)',
                              transform: 'translateX(4px)',
                            },
                          }}
                        >
                          <Typography sx={{ fontSize: '1.5rem', mr: 2 }}>
                            {skill.icon}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: 500,
                              color: 'text.primary',
                            }}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <style>
        {`
          @keyframes progressAnimation {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
        `}
      </style>
    </Box>
  );
};

export default Skills; 
import React, { useState } from "react";
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
} from "@mui/material";
import { GitHub, Article } from "@mui/icons-material";

const Projects = () => {
  const projects = [
    {
      title: "FMS  Personal Finance Management",
      description: `FMS is  personal finance management platform designed to help users track income, expenses, and savings effortlessly. 
    
    Users can categorize transactions, set financial goals. The platform is responsive, secure, and built with scalability in mind, making it ideal for both casual users and finance enthusiasts.`,
      github: "https://github.com/natabile/FMs",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      color: "#2196F3",
    },
    {
      title: "Endebet – Home Rental Platform",
      description: `Endebet is a modern home rental platform designed to simplify property searching and rental management. 
    Users can browse listings with detailed photos, descriptions, and reviews. The platform offers map, real-time chat with property owners, booking management. 
    It is built for scalability and user engagement, ensuring a seamless experience for renters, landlords, and agencies alike. The platform also supports notifications, wishlists, and analytics to enhance decision-making.`,
      github: "https://github.com/natabile/home",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      color: "#2196F3",
    },
    {
      title: "Tech News App",
      description: `Tech News App is an intuitive news aggregator that collects technology news from multiple sources in real time. 
    It provides a clean and responsive reading experience with categorized filters, bookmarking features, and search functionality. 
    Users can personalize the news feed based on topics, get notifications for trending news, and enjoy smooth navigation across articles. 
    The application is optimized for performance and offers mobile-friendly layouts to make reading tech news convenient anywhere.`,
      github: "https://github.com/natabile/news",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "API Integration", "Responsive Design"],
      color: "#2196F3",
    },
    {
      title: "Harone Forex",
      description: `Harone Forex is a robust online forex exchange platform built with Frappe/ERPNext. 
    It provides users with real-time currency rates, secure transaction management, and a full-featured dashboard to monitor foreign exchange activities. 
    The platform supports multi-currency wallets, detailed transaction history, and reporting features for both individual and business users. 
    Harone Forex ensures high security and reliability while offering an easy-to-use interface for managing all forex-related operations efficiently.`,
      github: "https://www.haronforex.com/",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Frappe", "ERPNext", "Jinja"],
      color: "#2196F3",
      isLineProject: true,
    },
  ];

  // State to track which description is expanded
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const truncateText = (text, limit = 15) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  };

  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            Featured Projects
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            A selection of my latest work and projects.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="200"
                  image={project.image}
                  sx={{ objectFit: "cover" }}
                />

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      height: "3rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {expanded[index]
                      ? project.description
                      : truncateText(project.description, 10)}
                  </Typography>

                  {project.description.split(" ").length > 10 && (
                    <Button
                      size="small"
                      onClick={() => toggleExpand(index)}
                      sx={{ mb: 2 }}
                    >
                      {expanded[index] ? "See Less" : "See More"}
                    </Button>
                  )}

                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    startIcon={project.isLineProject ? <Article /> : <GitHub />}
                    href={project.github}
                    target="_blank"
                    sx={{
                      marginLeft: "30%",
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: 2,
                      bgcolor: project.color,
                      "&:hover": {
                        bgcolor: project.color,
                        filter: "brightness(0.9)",
                      },
                    }}
                  >
                    {project.isLineProject ? "View Live" : "View Code"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

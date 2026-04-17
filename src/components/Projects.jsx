import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  useTheme,
} from "@mui/material";
import { GitHub, OpenInNew, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const projects = [
    {
      title: "FMS — Personal Finance",
      description:
        "Full-stack finance tracker for income, expenses, and savings. Features categorized transactions, financial goals, and responsive design.",
      github: "https://github.com/natabile/FMs",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Endebet — Home Rentals",
      description:
        "Modern rental platform with map search, real-time chat, booking management, wishlists, and analytics for renters and landlords.",
      github: "https://github.com/natabile/home",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      title: "Tech News App",
      description:
        "Real-time news aggregator with categorized filters, personalized feeds, bookmarking, and mobile-friendly layouts.",
      github: "https://github.com/natabile/news",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tech: ["React", "API Integration", "Responsive"],
    },
    {
      title: "Harone Forex",
      description:
        "Online forex exchange built with Frappe/ERPNext. Real-time rates, secure transactions, multi-currency wallets, and reporting.",
      github: "https://www.haronforex.com/",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tech: ["Frappe", "ERPNext", "Jinja", "React"],
      isLive: true,
    },
  ];

  return (
    <Box id="projects" sx={{ py: 15, bgcolor: isDark ? "rgba(30,41,59,0.15)" : "rgba(241,245,249,0.5)" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 8, flexWrap: "wrap", gap: 2 }}>
            <Box>
              <Typography
                variant="overline"
                sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3, display: "block", mb: 1 }}
              >
                Portfolio
              </Typography>
              <Typography variant="h2" fontWeight={800} color="text.primary">
                Featured Work
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Project Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Box
                component={motion.div}
                whileHover="hover"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: i % 2 === 0 ? "row" : "row-reverse" },
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                  bgcolor: isDark ? "rgba(30,41,59,0.4)" : "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)",
                    boxShadow: isDark
                      ? "0 30px 60px rgba(0,0,0,0.4)"
                      : "0 30px 60px rgba(0,0,0,0.08)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    minHeight: { xs: "250px", md: "380px" },
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Subtle overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: isDark
                        ? "linear-gradient(135deg, rgba(15,23,42,0.3), transparent)"
                        : "linear-gradient(135deg, rgba(248,250,252,0.2), transparent)",
                    }}
                  />
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    p: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* Project number */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      letterSpacing: 2,
                      mb: 2,
                      fontFamily: '"Outfit", monospace',
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 800, mb: 2, color: "text.primary", lineHeight: 1.2 }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 4, lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tech chips */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                    {project.tech.map((t, idx) => (
                      <Chip
                        key={idx}
                        label={t}
                        size="small"
                        sx={{
                          borderRadius: "8px",
                          fontWeight: 600,
                          fontSize: "0.78rem",
                          bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                          color: "text.secondary",
                          border: "none",
                        }}
                      />
                    ))}
                  </Box>

                  {/* Actions */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      component={motion.a}
                      whileHover={{ x: 3 }}
                      variant="text"
                      href={project.github}
                      target="_blank"
                      endIcon={project.isLive ? <OpenInNew /> : <ArrowForward />}
                      sx={{
                        color: "text.primary",
                        fontWeight: 700,
                        px: 0,
                        "&:hover": { bgcolor: "transparent", color: "primary.main" },
                      }}
                    >
                      {project.isLive ? "View Live" : "View Code"}
                    </Button>
                    {!project.isLive && (
                      <Button
                        component={motion.a}
                        whileHover={{ x: 3 }}
                        variant="text"
                        href={project.github}
                        target="_blank"
                        startIcon={<GitHub />}
                        sx={{
                          color: "text.secondary",
                          fontWeight: 600,
                          px: 0,
                          "&:hover": { bgcolor: "transparent", color: "text.primary" },
                        }}
                      >
                        Source
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;

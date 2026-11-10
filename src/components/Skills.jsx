import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { Code, Storage, Api, Web, Business, Layers } from "@mui/icons-material";
import { motion } from "framer-motion";

const Skills = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const coreSkills = [
    { name: "React.js", icon: <Web />, color: "#61DAFB", desc: "Frontend UI components & hooks" },
    { name: "Redux", icon: <Layers />, color: "#764ABC", desc: "State management library" },
    { name: "Tailwind CSS", icon: <Web />, color: "#06B6D4", desc: "Utility-first CSS framework" },
    { name: "Node.js", icon: <Code />, color: "#339933", desc: "Server-side runtime" },
    { name: "Express.js", icon: <Api />, color: "#F97316", desc: "RESTful API framework" },
    { name: "MongoDB", icon: <Storage />, color: "#47A248", desc: "NoSQL database solutions" },
    { name: "MariaDB", icon: <Storage />, color: "#003545", desc: "Relational database systems" },
    { name: "Frappe/ERPNext", icon: <Business />, color: "#E11D48", desc: "Enterprise ERP systems" },
    { name: "Material-UI", icon: <Layers />, color: "#3b82f6", desc: "Design system & components" },
    { name: "TanStack Query", icon: <Api />, color: "#FF4154", desc: "Data fetching & caching" },
    { name: "TanStack Table", icon: <Layers />, color: "#5A67D8", desc: "Headless table library" },
    { name: "TanStack Form", icon: <Api />, color: "#EF4444", desc: "Form state management" },
  ];

  const tools = [
    "JavaScript ES6+", "TypeScript", "Redux", "HTML5 & CSS3",
    "Python", "Jinja", "Mongoose", "JWT Auth",
    "Git & GitHub", "RESTful APIs", "Responsive Design",
    "Agile", "Postman", "Docker", "VS Code",
  ];

  return (
    <Box id="skills" sx={{ py: 15, bgcolor: "background.default", position: "relative", overflow: "hidden" }}>

      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3, display: "block", mb: 1 }}
            >
              Skills & Tools
            </Typography>
            <Typography variant="h2" fontWeight={800} color="text.primary">
              My Tech Stack
            </Typography>
          </Box>
        </motion.div>

        {/* Core Skills — Large Cards */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
          gap: 3,
          mb: 12,
        }}>
          {coreSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Box
                component={motion.div}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                  bgcolor: isDark ? "#1e293b" : "#ffffff",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 3,
                  "&:hover": {
                    borderColor: skill.color,
                    boxShadow: isDark ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box sx={{
                  width: 52,
                  height: 52,
                  minWidth: 52,
                  borderRadius: "14px",
                  bgcolor: skill.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}>
                  {skill.icon}
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={700} color="text.primary" sx={{ mb: 0.5 }}>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.desc}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Tools — Floating Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography variant="h5" fontWeight={700} color="text.primary" sx={{ mb: 1 }}>
              Tools & Technologies
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The full ecosystem I work with daily
            </Typography>
          </Box>

          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.5,
            maxWidth: "800px",
            mx: "auto",
          }}>
            {tools.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                <Box sx={{
                  px: 2.5,
                  py: 1.2,
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                  bgcolor: isDark ? "#1e293b" : "#ffffff",
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  cursor: "default",
                  transition: "all 0.2s ease",
                  fontFamily: '"Outfit", sans-serif',
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: isDark ? "#334155" : "#f1f5f9",
                    color: "primary.main",
                  },
                }}>
                  {tool}
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;

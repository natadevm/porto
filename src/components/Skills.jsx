import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

import {
  Code,
  Storage,
  Api,
  Web,
  DataObject,
  Schema,
  Business,
} from "@mui/icons-material";

const Skills = () => {
  const skills = [
    {
      name: "React.js",
      icon: <Web />,
      color: "#61DAFB",
      description: "Frontend development with React hooks and components",
    },
    {
      name: "Redux",
      icon: <DataObject />,
      color: "#764ABC",
      description: "State management and predictable state container",
    },
    {
      name: "Node.js",
      icon: <Code />,
      color: "#339933",
      description: "Server-side JavaScript runtime environment",
    },
    {
      name: "Express.js",
      icon: <Api />,
      color: "#000000",
      description: "Web application framework for Node.js",
    },
    {
      name: "MongoDB",
      icon: <Storage />,
      color: "#47A248",
      description: "NoSQL database for scalable applications",
    },
    {
      name: "Mongoose",
      icon: <Schema />,
      color: "#880000",
      description: "MongoDB object modeling for Node.js",
    },
    {
      name: "Material-UI",
      icon: <Web />,
      color: "#1976d2",
      description: "React UI framework for building beautiful interfaces",
    },
    {
      name: "Frappe ERP",
      icon: <Business />,
      color: "#2a9d8f",
      description:
        "ERP development using Frappe framework for business solutions",
    },
    {
      name: "ERPNext",
      icon: <Business />,
      color: "#264653",
      description: "Open-source ERP system implementation and customization",
    },
  ];

  const additionalSkills = [
    { name: "JavaScript (ES6+)", category: "Language", icon: "⚡" },
    { name: "HTML5 & CSS3", category: "Frontend", icon: "🎨" },
    { name: "Git & GitHub", category: "Tools", icon: "📚" },
    { name: "RESTful APIs", category: "Backend", icon: "🔌" },
    { name: "JWT Authentication", category: "Security", icon: "🔐" },
    { name: "Responsive Design", category: "Frontend", icon: "📱" },
    { name: "Agile Methodology", category: "Process", icon: "🔄" },
    { name: "Postman", category: "Tools", icon: "📮" },
    { name: "VS Code", category: "Tools", icon: "💻" },
    { name: "Python", category: "Language", icon: "🐍" },
    { name: "MariaDB/MySQL", category: "Database", icon: "🗄️" },
    { name: "ERP Customization", category: "ERP", icon: "⚙️" },
    { name: "Workflow Automation", category: "ERP", icon: "🔄" },
    { name: "Business Process Mapping", category: "ERP", icon: "📊" },
  ];

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" fontWeight={700}>
            Skills & Technologies
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            maxWidth: 1000,
            mx: "auto",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)", // 1 column on very small screens
              sm: "repeat(2, 1fr)", // 2 columns on small screens
              md: "repeat(3, 1fr)", // 3 columns on medium and larger screens
            },
          }}
        >
          {skills.map((skill, index) => (
            <Card
              key={index}
              sx={{
                aspectRatio: "1 / 1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                textAlign: "center",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                {/* ICON */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: skill.color,
                    color: "#fff",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {skill.icon}
                </Box>

                {/* NAME */}
                <Typography fontWeight={700} mb={1}>
                  {skill.name}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {skill.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* ADDITIONAL SKILLS */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h5" mb={3}>
            Additional Skills
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: 2,
            }}
          >
            {additionalSkills.map((skill, index) => (
              <Paper
                key={index}
                sx={{
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: 3,
                  },
                }}
              >
                <Typography sx={{ fontSize: "1.5rem" }}>
                  {skill.icon}
                </Typography>
                <Typography fontSize="0.85rem" fontWeight={600}>
                  {skill.name}
                </Typography>
                <Typography variant="caption">{skill.category}</Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;

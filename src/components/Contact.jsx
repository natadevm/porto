import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  Avatar,
  Button,
  useTheme,
} from "@mui/material";
import { Email, Phone, GitHub, LinkedIn, Send } from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const personalContacts = [
    {
      icon: <Email />,
      title: "Email",
      value: "natanelhailu2809@gmail.com",
      link: "mailto:natanelhailu2809@gmail.com",
      color: "#D44638",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+251980118769",
      link: "tel:+251980118769",
      color: "#25D366",
    },
  ];

  const githubAccounts = [
    {
      icon: <GitHub />,
      title: "GitHub (Main)",
      value: "github.com/natabile",
      link: "https://github.com/natabile",
      color: "#333333",
    },
    {
      icon: <GitHub />,
      title: "GitHub (Secondary)",
      value: "github.com/natadevm",
      link: "https://github.com/natadevm",
      color: "#333333",
    },
  ];

  const linkedInProfile = [
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      value: "linkedin.com/in/natnael-hailu",
      link: "https://www.linkedin.com/in/natnael-hailu-b60438376/",
      color: "#0A66C2",
    },
  ];

  const renderList = (list) =>
    list.map((info, idx) => (
      <ListItem
        key={idx}
        component="a"
        href={info.link}
        target="_blank"
        sx={{
          textDecoration: "none",
          borderRadius: 2,
          mb: 1,
          p: 2,
          bgcolor: isDark ? "#1e1e1e" : "#e3f2fd",
          transition: "0.3s",
          "&:hover": { transform: "translateX(5px)", boxShadow: 2 },
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar sx={{ bgcolor: info.color }}>{info.icon}</Avatar>
        <Box>
          <Typography fontWeight={600}>{info.title}</Typography>
          <Typography color="text.secondary">{info.value}</Typography>
        </Box>
      </ListItem>
    ));

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        background: isDark ? "#121212" : "#f5f5f5",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Get In Touch
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            I’m always open to new opportunities and exciting projects. Reach
            out if you’d like to work together!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Card 1: Personal Contacts */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Contact Info
              </Typography>
              {renderList(personalContacts)}
            </Paper>
          </Grid>

          {/* Card 2: GitHub Accounts */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                GitHub Accounts
              </Typography>
              {renderList(githubAccounts)}
            </Paper>
          </Grid>

          {/* Card 3: LinkedIn */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                LinkedIn
              </Typography>
              {renderList(linkedInProfile)}
            </Paper>
          </Grid>
        </Grid>

        {/* CTA Button */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            color={isDark ? "primary" : "secondary"}
            size="large"
            startIcon={<Send />}
            href="mailto:codernathailu@gmail.com"
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

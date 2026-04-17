import React from "react";
import { Box, Container, Typography, Grid, Button, IconButton, useTheme } from "@mui/material";
import { Email, Phone, GitHub, LinkedIn, ArrowForward, NorthEast } from "@mui/icons-material";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const links = [
    {
      icon: <Email />,
      title: "Email",
      value: "codernathailu@gmail.com",
      href: "mailto:codernathailu@gmail.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+251 980 118 769",
      href: "tel:+251980118769",
    },
    {
      icon: <GitHub />,
      title: "GitHub",
      value: "natabile",
      href: "https://github.com/natabile",
    },
    {
      icon: <GitHub />,
      title: "GitHub (Alt)",
      value: "natadevm",
      href: "https://github.com/natadevm",
    },
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      value: "natnael-hailu",
      href: "https://www.linkedin.com/in/natnael-hailu-b60438376/",
    },
  ];

  return (
    <Box id="contact" sx={{ py: 15, bgcolor: "background.default", position: "relative", overflow: "hidden" }}>
      {/* Background accent */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left side — Simple CTA */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3, display: "block", mb: 2 }}
              >
                Get In Touch
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "3.5rem", sm: "4.5rem" },
                  lineHeight: 1,
                  mb: 4,
                  color: "text.primary",
                }}
              >
                Ready to start
                <br />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  your project?
                </Box>
              </Typography>

              <Typography variant="h5" color="text.secondary" sx={{ mb: 5, maxWidth: "450px", lineHeight: 1.6, fontWeight: 500 }}>
                I'm currently available for new opportunities. Reach out via any of these channels to get the conversation started.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right side — Contact links */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {links.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Box
                    component={motion.a}
                    href={link.href}
                    target="_blank"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      textDecoration: "none",
                      p: 3,
                      borderRadius: "16px",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                      bgcolor: isDark ? "rgba(30,41,59,0.3)" : "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: isDark ? "rgba(59,130,246,0.05)" : "rgba(59,130,246,0.03)",
                      },
                      "&:hover .contact-arrow": {
                        opacity: 1,
                        transform: "translate(0, 0)",
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box sx={{
                      width: 44,
                      height: 44,
                      minWidth: 44,
                      borderRadius: "12px",
                      bgcolor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "text.secondary",
                    }}>
                      {link.icon}
                    </Box>

                    {/* Text */}
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase" }}>
                        {link.title}
                      </Typography>
                      <Typography variant="body1" color="text.primary" sx={{ fontWeight: 600 }}>
                        {link.value}
                      </Typography>
                    </Box>

                    {/* Arrow on hover */}
                    <NorthEast
                      className="contact-arrow"
                      sx={{
                        fontSize: 18,
                        color: "primary.main",
                        opacity: 0,
                        transform: "translate(-4px, 4px)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{
          mt: 15,
          pt: 4,
          borderTop: "1px solid",
          borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}>
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            © {new Date().getFullYear()} Natnael Hailu
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { School, CalendarMonth, LocationOn } from "@mui/icons-material";
import { motion } from "framer-motion";

const Education = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box id="education" sx={{ py: 15, bgcolor: isDark ? "rgba(30,41,59,0.15)" : "rgba(241,245,249,0.5)" }}>
      <Container maxWidth="lg">
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
              Background
            </Typography>
            <Typography variant="h2" fontWeight={800} color="text.primary">
              Education
            </Typography>
          </Box>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Box
            component={motion.div}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            sx={{
              maxWidth: 700,
              mx: "auto",
              p: { xs: 4, md: 6 },
              borderRadius: "24px",
              border: "1px solid",
              borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
              bgcolor: isDark ? "rgba(30,41,59,0.4)" : "rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)",
                boxShadow: isDark
                  ? "0 20px 40px rgba(0,0,0,0.3)"
                  : "0 20px 40px rgba(0,0,0,0.08)",
              },
            }}
          >
            {/* Accent gradient bar */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
              }}
            />

            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
              {/* Icon */}
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  minWidth: 56,
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <School fontSize="medium" />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" fontWeight={800} color="text.primary" sx={{ mb: 1 }}>
                  Bachelor of Software Engineering
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Debre Berhan University
                </Typography>

                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOn sx={{ fontSize: 18, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                      Debre Berhan, Ethiopia
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 3, lineHeight: 1.7 }}
                >
                  Studied core computer science fundamentals including data structures, 
                  algorithms, software architecture, database systems, and modern web 
                  development practices. Built a strong foundation in full-stack development 
                  and enterprise software engineering.
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;

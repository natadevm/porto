import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import {
  GitHub,
  ArrowForward,
} from "@mui/icons-material";
import { motion, useScroll, useTransform, useInView } from "framer-motion";



// Animated text with word-by-word reveal
const AnimatedText = ({ text, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <Box component="span" sx={{ display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: delay + i * 0.05 }}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </Box>
  );
};

const Home = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);



  const services = [
    { title: "Frontend", desc: "React, MUI, responsive interfaces", color: "#3b82f6" },
    { title: "Backend", desc: "Node.js, Express, RESTful APIs", color: "#10b981" },
    { title: "Database", desc: "MongoDB, Mongoose, data modeling", color: "#f59e0b" },
    { title: "ERP", desc: "Frappe, ERPNext, Jinja templates", color: "#ef4444" },
  ];

  return (
    <Box ref={containerRef} id="home" sx={{ position: "relative" }}>
      {/* ============ HERO SECTION ============ */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          bgcolor: "background.default",
        }}
      >


        <motion.div style={{ y: heroY, opacity: heroOpacity, position: "relative", zIndex: 1, width: "100%" }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center" sx={{ minHeight: "85vh" }}>
              {/* LEFT — Text Content */}
              <Grid item xs={12} md={7}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Name */}
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                      lineHeight: 1.05,
                      mb: 2,
                      color: "text.primary",
                    }}
                  >
                    <AnimatedText text="Natnael Hailu" delay={0.3} />
                  </Typography>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        fontWeight: 500,
                        color: "primary.main",
                      }}
                    >
                      MERN Stack Developer & ERP Specialist
                    </Typography>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        maxWidth: "480px",
                        mb: 5,
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                      }}
                    >
                      I build full-stack web applications with MongoDB, Express.js, React.js, 
                      and Node.js. Passionate about creating scalable, beautiful solutions 
                      that drive real impact.
                    </Typography>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      <Button
                        component={motion.a}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForward />}
                        href="#projects"
                        sx={{
                          px: 5,
                          py: 2,
                          fontSize: "1rem",
                          borderRadius: "14px",
                          boxShadow: "0 8px 30px rgba(59,130,246,0.35)",
                          "&:hover": {
                            boxShadow: "0 12px 40px rgba(59,130,246,0.45)",
                          },
                        }}
                      >
                        View My Work
                      </Button>
                      <Button
                        component={motion.a}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        variant="outlined"
                        size="large"
                        startIcon={<GitHub />}
                        href="https://github.com/natadevm"
                        target="_blank"
                        sx={{
                          px: 5,
                          py: 2,
                          fontSize: "1rem",
                          borderRadius: "14px",
                          borderWidth: 2,
                          borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)",
                          color: "text.primary",
                          "&:hover": {
                            borderWidth: 2,
                            borderColor: "primary.main",
                            bgcolor: "transparent",
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Box>
                  </motion.div>
                </motion.div>
              </Grid>

              {/* RIGHT — Profile Image */}
              <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 40 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: 280, sm: 340, md: 400 },
                      height: { xs: 280, sm: 340, md: 400 },
                    }}
                  >
                    {/* Light blue background for image */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        bgcolor: "#60a5fa",
                        zIndex: 0,
                      }}
                    />
                    {/* Image container */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "4px solid rgba(255,255,255,0.2)",
                        zIndex: 1,
                      }}
                    >
                      <Box
                        component="img"
                        src="/profile.png"
                        alt="Natnael Hailu"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </motion.div>
      </Box>



      {/* ============ SERVICES SECTION ============ */}
      <Box sx={{ py: 15, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 3, display: "block", mb: 1 }}
            >
              What I Do
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 8, maxWidth: "500px", color: "text.primary" }}>
              Building digital experiences that matter
            </Typography>
          </motion.div>

          <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: 3,
          }}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ height: "100%" }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "20px",
                    border: "1px solid",
                    borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                    bgcolor: isDark ? "rgba(30,41,59,0.3)" : "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    "&:hover": {
                      borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)",
                      boxShadow: isDark
                        ? "0 20px 40px rgba(0,0,0,0.3)"
                        : "0 20px 40px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "14px",
                      bgcolor: service.color,
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ color: "white", fontWeight: 800, fontSize: "1.1rem" }}>
                      {service.title.charAt(0)}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {service.desc}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

    </Box>
  );
};

export default Home;

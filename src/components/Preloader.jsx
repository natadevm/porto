import React from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#0f172a",
            overflow: "hidden",
          }}
        >
          {/* Background grid pattern */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              pointerEvents: "none",
            }}
          />

          {/* Animated gradient orb */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "20px",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 4,
                boxShadow: "0 0 60px rgba(59,130,246,0.4)",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: "2rem",
                  fontFamily: '"Outfit", sans-serif',
                }}
              >
                N
              </Typography>
            </Box>
          </motion.div>

          {/* Name text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: "1.5rem",
                letterSpacing: "-0.5px",
                fontFamily: '"Outfit", sans-serif',
                mb: 1,
              }}
            >
              Natnael Hailu
            </Typography>
          </motion.div>

          {/* Role text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Typography
              sx={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: '"Outfit", sans-serif',
                mb: 6,
              }}
            >
              Software Engineer
            </Typography>
          </motion.div>

          {/* Loading bar */}
          <Box
            sx={{
              width: 200,
              height: 3,
              borderRadius: "10px",
              bgcolor: "rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{
                height: "100%",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

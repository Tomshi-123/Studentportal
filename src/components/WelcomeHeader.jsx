// src/components/WelcomeHeader.jsx
import React from "react";
import { Paper, Typography, Box, useMediaQuery } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const WelcomeHeader = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={0}
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        py: 6,
        px: 2,
        textAlign: "center",
        backgroundColor: "transparent",
        mb: 4,
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1}
        mb={2}
        flexDirection={isSmall ? "column" : "row"}
      >
        <SchoolIcon color="primary" sx={{ fontSize: isSmall ? 40 : 50 }} />
        <Typography
          variant={isSmall ? "h5" : "h4"}
          component="h1"
          fontWeight="bold"
        >
          Välkommen till StudentPortalen
        </Typography>
      </Box>
      <Typography
        variant={isSmall ? "body1" : "subtitle1"}
        color="text.secondary"
      >
        Här kan du bläddra bland kurser, läsa nyheter och registrera dig.
      </Typography>
    </Paper>
  );
};

export default WelcomeHeader;

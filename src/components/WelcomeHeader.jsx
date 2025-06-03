// src/components/WelcomeHeader.jsx
import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const WelcomeHeader = () => (
  <Paper
    elevation={0}
    sx={{
      padding: 4,
      textAlign: "center",
      backgroundColor: "none",
      marginBottom: 4,
    }}
  >
    <Box display="flex" justifyContent="center" alignItems="center" gap={1} mb={2}>
      <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
      <Typography variant="h4" component="h1" fontWeight="bold">
        Välkommen till StudentPortalen
      </Typography>
    </Box>
    <Typography variant="subtitle1" color="text.secondary">
      Här kan du bläddra bland kurser, läsa nyheter och registrera dig.
    </Typography>
  </Paper>
);

export default WelcomeHeader;

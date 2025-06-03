// src/pages/MyCourses.jsx
import React, { useContext } from "react";
import { RegistrationContext } from "../context/RegistrationContext";
import { Container, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const MyCourses = () => {
  const { registeredCourses } = useContext(RegistrationContext);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Mina Registrerade Kurser
      </Typography>

      {registeredCourses.length === 0 ? (
        <Typography variant="body1">Du har inte registrerat dig på några kurser ännu.</Typography>
      ) : (
        <List>    
          {registeredCourses.map((course, index) => (
            <Paper key={index} sx={{ mb: 2, p: 2 }}>
              <ListItem>
                <ListItemText
                  primary={`${course.course}`}
                  secondary={`Namn: ${course.name} • E-post: ${course.email}`}
                />
              </ListItem>
            </Paper>
          ))}
        </List>
      )}
    </Container>
  );
};

export default MyCourses;

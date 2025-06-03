import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { RegistrationContext } from "../context/RegistrationContext";

const courses = ["Webbutveckling", "Datavetenskap", "UI/UX Design"];

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
  });
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const { registerStudent } = useContext(RegistrationContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerStudent(form);
    setDialogOpen(true); // öppna Dialog
  };

  const handleClose = () => {
    setDialogOpen(false);
    setForm({ name: "", email: "", password: "", course: "" }); // nollställ formuläret
  };

  return (
    <>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" mb={2} fontWeight="bold">
        Registrera dig till en kurs
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label="Namn"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="E-post"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Lösenord"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        select
        margin="normal"
        label="Välj en kurs"
        name="course"
        value={form.course}
        onChange={handleChange}
        required
      >
        {courses.map((course, index) => (
          <MenuItem key={index} value={course}>
            {course}
          </MenuItem>
        ))}
      </TextField>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        sx={{ mt: 3 }}
      >
        Registrera
      </Button>
    </Box>

          <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Registrering lyckades!</DialogTitle>
        <DialogContent>
          <Typography>
            Tack <strong>{form.name}</strong>, du har registrerat dig för <strong>{form.course}</strong>!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Stäng
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegisterForm;

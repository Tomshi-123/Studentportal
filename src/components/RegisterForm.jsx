// src/components/RegisterForm.jsx
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registrering skickad:", form);
    alert("Tack för din registrering!");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto" }}>
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
      <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
        Registrera
      </Button>
    </Box>
  );
};

export default RegisterForm;

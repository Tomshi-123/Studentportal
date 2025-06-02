// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => (
  <BSNavbar expand="lg" variant="dark" className="bg-primary shadow-sm">
    <Container>
      <BSNavbar.Brand as={Link} to="/" className="fw-bold">
        <i className="bi bi-mortarboard-fill me-2"></i> StudentPortal
      </BSNavbar.Brand>
      <BSNavbar.Toggle />
      <BSNavbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Start</Nav.Link>
          <Nav.Link as={Link} to="/courses">Kurser</Nav.Link>
          <Nav.Link as={Link} to="/news">Nyheter</Nav.Link>
          <Nav.Link as={Link} to="/register">Registrera</Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;

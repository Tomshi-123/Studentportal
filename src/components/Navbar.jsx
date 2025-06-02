// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => (
  <BSNavbar bg="light" expand="lg">
    <Container>
      <BSNavbar.Brand as={Link} to="/">
        StudentPortal
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


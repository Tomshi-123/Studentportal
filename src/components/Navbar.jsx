// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Navbar as BSNavbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import courses from '../data/courses';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const match = courses.find((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );
    if (match) {
      navigate(`/courses/${match.id}`);
    } else {
      alert('Ingen kurs hittades.');
    }
    setQuery('');
  };

  return (
    <BSNavbar expand="lg" variant="dark" className="bg-primary shadow-sm">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="fw-bold">
          <i className="bi bi-mortarboard-fill me-2"></i> StudentPortal
        </BSNavbar.Brand>
        <BSNavbar.Toggle />
        <BSNavbar.Collapse className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Start</Nav.Link>
            <Nav.Link as={Link} to="/courses">Kurser</Nav.Link>
            <Nav.Link as={Link} to="/news">Nyheter</Nav.Link>
            <Nav.Link as={Link} to="/register">Registrera</Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Sök"
              className="me-2"
              aria-label="Sök"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                maxWidth: '180px',
                fontSize: '0.9rem',
                borderRadius: '999px',
              }}
            />
            <Button
              type="submit"
              variant="outline-light"
              size="sm"
              style={{ borderRadius: '999px', padding: '4px 12px' }}
            >
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;

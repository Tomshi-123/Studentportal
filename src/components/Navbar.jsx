import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as BSNavbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import courses from "../data/courses";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // State som styr om hamburgermenyn är öppen
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  // Funktion som stänger menyn när vi scrollar
  useEffect(() => {
    const handleScroll = () => {
      if (expanded) {
        setExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expanded]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = query.trim().toLowerCase();

    if (searchTerm) {
      const matchedCourse = courses.find((course) =>
        course.title.toLowerCase().includes(searchTerm)
      );

      if (matchedCourse) {
        navigate(`/courses/${matchedCourse.id}`);
      } else {
        navigate(`/courses?search=${encodeURIComponent(searchTerm)}`);
      }

      setQuery("");
      setShowSearch(false);
      setExpanded(false); // Stäng menyn efter sök också
    }
  };

  return (
    <>
      <BSNavbar
        expanded={expanded}          // <- Här kopplar vi expanded state
        onToggle={setExpanded}       // <- Toggle-funktionen uppdaterar state
        expand="lg"
        variant="dark"
        className="bg-primary shadow-sm"
        sticky="top"
      >
        <Container fluid="md">
          <BSNavbar.Brand as={Link} to="/" className="fw-bold">
            <i className="bi bi-mortarboard-fill me-2"></i> StudentPortal
          </BSNavbar.Brand>
          <div className="d-flex align-items-center">
            {/* Mobil sökknapp - UTANFÖR BSNavbar.Collapse */}
            <Button
              variant="outline-light"
              className="d-lg-none me-2"
              onClick={() => setShowSearch(!showSearch)}
              style={{
                borderRadius: "50%",
                width: "38px",
                height: "38px",
                padding: 0,
              }}
              aria-label="Sök"
            >
              <i className="bi bi-search" />
            </Button>

            {/* Hamburger toggle */}
            <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                Start
              </Nav.Link>
              <Nav.Link as={Link} to="/courses" onClick={() => setExpanded(false)}>
                Kurser
              </Nav.Link>
              <Nav.Link as={Link} to="/news" onClick={() => setExpanded(false)}>
                Nyheter
              </Nav.Link>
              <Nav.Link as={Link} to="/register" onClick={() => setExpanded(false)}>
                Registrera dig
              </Nav.Link>
              <Nav.Link as={Link} to="/my-courses" onClick={() => setExpanded(false)}>
                Mina kurser
              </Nav.Link>
            </Nav>

            {/* Desktop sökfält */}
            <Form
              className="d-none d-lg-flex align-items-center"
              onSubmit={handleSearch}
              style={{ gap: "0.5rem" }}
            >
              <FormControl
                type="search"
                placeholder="Sök kurs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  maxWidth: "200px",
                  height: "35px",
                  borderRadius: "20px",
                  paddingLeft: "12px",
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "white",
                }}
                className="form-control"
              />
              <Button
                type="submit"
                variant="outline-light"
                style={{
                  height: "35px",
                  borderRadius: "20px",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-search" />
              </Button>
            </Form>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      {/* Mobil sökfält */}
      {showSearch && (
        <Container fluid="md" className="mt-2 d-lg-none">
          <Form
            onSubmit={handleSearch}
            className="d-flex"
            style={{ gap: "0.5rem" }}
          >
            <FormControl
              type="search"
              placeholder="Sök kurs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flexGrow: 1,
                height: "35px",
                borderRadius: "20px",
                paddingLeft: "12px",
                borderColor: "rgba(0, 0, 0, 0.15)",
              }}
              autoFocus
            />
            <Button
              type="submit"
              variant="outline-primary"
              style={{
                height: "35px",
                borderRadius: "20px",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="bi bi-search" />
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};

export default Navbar;

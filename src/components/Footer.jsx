// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark text-light pt-5 pb-4 mt-5">
    <Container>
      <Row>
        <Col md={4}>
          <h5 className="mb-3">Om StudentPortalen</h5>
          <p>
            En plats där studenter kan hitta information om kurser, nyheter och
            registrering.
          </p>
        </Col>
        <Col md={4}>
          <h5 className="mb-3">Snabblänkar</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="text-light text-decoration-none" to="/">
                Start
              </Link>
            </li>
            <li>
              <Link className="text-light text-decoration-none" to="/courses">
                Kurser
              </Link>
            </li>
            <li>
              <Link className="text-light text-decoration-none" to="/news">
                Nyheter
              </Link>
            </li>
            <li>
              <Link className="text-light text-decoration-none" to="/register">
                Registrering
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <h5 className="mb-3">Kontakt</h5>
          <p>Email: kontakt@studentportalen.se</p>
          <p>Telefon: 012-345 67 89</p>
          <p>Adress: Studentgatan 1, 123 45 Campusstad</p>
        </Col>
      </Row>
      <hr className="border-secondary" />
      <p className="text-center text-muted">
        © {new Date().getFullYear()} StudentPortalen. Alla rättigheter
        förbehållna.
      </p>
    </Container>
  </footer>
);

export default Footer;

// src/pages/CourseDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import courses from '../data/courses';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <Container className="my-5">
        <h2>Kursen hittades inte</h2>
        <p>Tyvärr, vi kunde inte hitta kursen du letar efter.</p>
        <Link to="/courses">
          <Button variant="primary">Tillbaka till kurser</Button>
        </Link>
      </Container>
    );
  }

  return (
    <div>
    <h1 className="display-6 fw-bold">{course.title}</h1>
    
    <Container className="my-5">
      <Card className="shadow-sm">
        <Card.Img 
          variant="top" 
          src={course.image} 
          alt={course.title} 
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            {course.description}
          </Card.Text>
          <Button as={Link} to="/courses" variant="outline-primary">
            Andra kurser
          </Button>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default CourseDetails;

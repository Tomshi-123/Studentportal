// src/components/CourseCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CourseCard = ({ course }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{course.title}</Card.Title>
      <Card.Text>{course.description}</Card.Text>
      <Link to={`/courses/${course.id}`}>
        <Button variant="primary">Läs mer</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default CourseCard;

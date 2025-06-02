// src/components/HeroCarousel.jsx
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Webbutveckling",
    description: "Lär dig HTML, CSS, JavaScript och moderna ramverk.",
    image: "https://picsum.photos/id/1011/1200/500",
  },
  {
    id: 2,
    title: "Datavetenskap",
    description: "Algoritmer, datastrukturer och programmering i djupet.",
    image: "https://picsum.photos/id/1005/1200/500",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designa användarupplevelser med stil och funktion.",
    image: "https://picsum.photos/id/1025/1200/500",
  },
];

const HeroCarousel = () => {
  const navigate = useNavigate();

  return (
    <Carousel fade interval={3000} className="shadow-lg rounded overflow-hidden">
      {courses.map((course) => (
        <Carousel.Item key={course.id}>
          <img
            className="d-block w-100"
            src={course.image}
            alt={course.title}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Button variant="light" onClick={() => navigate(`/courses/${course.id}`)}>
              Gå till kursen
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;

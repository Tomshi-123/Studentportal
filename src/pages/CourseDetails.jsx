// src/pages/CourseDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) return <p>Kursen kunde inte hittas.</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;

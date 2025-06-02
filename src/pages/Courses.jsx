// src/pages/Courses.jsx
import React from "react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

const Courses = () => (
  <div>
    <h2>Kurser</h2>
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);

export default Courses;

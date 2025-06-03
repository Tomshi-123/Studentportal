
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import News from "./pages/News";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import MyCourses from "./pages/MyCourses";
import NewsDetails from "./pages/NewsDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/news/:id" element={<NewsDetails />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

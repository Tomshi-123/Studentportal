// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => (
  <div >
    <h1 className="display-4 fw-bold text-center ">Välkommen till StudentPortalen</h1>
      <p className="lead mt-3 text-black text-center " >
        Här kan du bläddra bland kurser, läsa nyheter och registrera dig.
      </p>
    <HeroCarousel />
  </div>
);

export default Home;

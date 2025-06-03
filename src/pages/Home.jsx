// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import WelcomeHeader from "../components/WelcomeHeader";
import NewsSlider from "../components/NewsSlider";

const Home = () => (
  <div>
    <WelcomeHeader />
    <HeroCarousel />
    <NewsSlider />
  </div>
);

export default Home;

// src/components/NewsSlider.jsx
import React from "react";
import Slider from "react-slick";
import NewsPost from "./NewsPost";
import news from "../data/news";
import { Container } from "react-bootstrap";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

const NewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container className="my-5">
      <Typography
        variant={isSmall ? "h5" : "h4"}
        component="h2"
        fontWeight="bold"
        align="center"
        gutterBottom
      >
        Senaste Nyheterna
      </Typography>
      <Slider {...settings}>
        {news.map((post, index) => (
          <div key={index} className="px-2">
            <NewsPost post={post} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default NewsSlider;

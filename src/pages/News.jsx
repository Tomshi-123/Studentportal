// src/pages/News.jsx
import React from "react";
import news from "../data/news";
import NewsPost from "../components/NewsPost";

const News = () => (
  <div>
    <h2>Nyheter</h2>
    {news.map((post) => (
      <NewsPost key={post.id} post={post} />
    ))}
  </div>
);

export default News;

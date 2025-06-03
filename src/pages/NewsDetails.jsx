// src/pages/NewsDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../data/news";

const NewsDetails = () => {
  const { id } = useParams();
  const post = newsData.find((p) => p.id === parseInt(id));

  if (!post) return <p>Nyhetsartikel hittades inte.</p>;

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-3">{post.title}</h2>
      <p className="text-muted mb-4">
        {new Date(post.date).toLocaleDateString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <img
        src={post.image}
        alt="Nyhetsbild"
        className="img-fluid mb-4"
        style={{ maxHeight: "300px", objectFit: "cover", borderRadius: "8px" }}
      />
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>{post.article}</p>
    </div>
  );
};

export default NewsDetails;

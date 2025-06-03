// src/components/NewsPost.jsx
import React from "react";
import { Card } from "react-bootstrap";

const NewsPost = ({ post }) => (
  <Card className="mb-4 shadow-sm border-0">
    <Card.Img
      variant="top"
      src={`https://cdn.pixabay.com/photo/2024/05/21/19/57/computer-8779040_1280.jpg`} // unika random-bilder
      alt="Nyhetsbild"
      style={{ objectFit: "cover", maxHeight: "250px" }}
    />
    <Card.Body>
      <Card.Title className="fw-bold">{post.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted small">
        {new Date(post.date).toLocaleDateString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Card.Subtitle>
      <Card.Text className="text-secondary">{post.content}</Card.Text>
    </Card.Body>
  </Card>
);

export default NewsPost;

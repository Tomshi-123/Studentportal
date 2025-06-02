// src/components/NewsPost.jsx
import React from "react";
import { Card } from "react-bootstrap";

const NewsPost = ({ post }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
      <Card.Text>{post.content}</Card.Text>
    </Card.Body>
  </Card>
);

export default NewsPost;

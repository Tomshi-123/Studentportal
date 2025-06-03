import React from "react";
import { Card } from "react-bootstrap";

const NewsPost = ({ post }) => (
  <Card
    className="mb-4 shadow-sm border-0"
    style={{
      height: "100%", // full height for slider grid
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ height: "200px", overflow: "hidden" }}>
      <Card.Img
        variant="top"
        src={post.image}
        alt="Nyhetsbild"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
    <Card.Body style={{ flexGrow: 1 }}>
      <Card.Title className="fw-bold">{post.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted small">
        {new Date(post.date).toLocaleDateString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Card.Subtitle>
      <Card.Text className="text-secondary" style={{ fontSize: "0.95rem" }}>
        {post.content}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default NewsPost;

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsPost = ({ post }) => (
  <Link to={`/news/${post.id}`} className="text-decoration-none text-dark">
    <Card
      className="mb-4 shadow-sm border-0"
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      {/* Bild */}
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

      {/* Innehåll */}
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
  </Link>
);

export default NewsPost;

// src/pages/News.jsx
import React from "react";
import news from "../data/news";
import NewsPost from "../components/NewsPost";
import { Container, Row, Col } from "react-bootstrap";

const News = () => (
  <Container className="my-5">
    <h2 className="mb-4 text-center fw-bold">Senaste Nyheterna</h2>
    <Row className="g-4">
      {news.map((post) => (
        <Col key={post.id} md={6} lg={4}>
          <NewsPost post={post} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default News;

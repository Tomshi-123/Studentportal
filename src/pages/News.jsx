// src/pages/News.jsx
import React, { useState } from "react";
import news from "../data/news";
import NewsPost from "../components/NewsPost";
import { Container, Row, Col, Pagination } from "react-bootstrap";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 3;

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(news.length / newsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // scroll to top on page change
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center fw-bold">Senaste Nyheterna</h2>
      <Row className="g-4">
        {currentNews.map((post) => (
          <Col key={post.id} md={6} lg={4}>
            <NewsPost post={post} />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {[...Array(totalPages).keys()].map((number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </Container>
  );
};

export default News;


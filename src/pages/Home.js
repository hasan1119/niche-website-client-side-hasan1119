import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import Product from "../components/Product.js";
import Slider from "../components/Slider.js";
import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";
import collection1 from "./../assets/images/collection/1.jpg";
import collection2 from "./../assets/images/collection/2.jpg";
import collection3 from "./../assets/images/collection/3.jpg";
import collection4 from "./../assets/images/collection/4.jpg";
const Home = () => {
  const products = useProducts();
  return (
    <div>
      <Header />
      <Slider />
      <Container className="collections my-5">
        <Row>
          <Col xs={6} lg={3}>
            <div className="img">
              <img src={collection1} alt="" />
            </div>
          </Col>
          <Col xs={6} lg={3}>
            <div className="img">
              <img src={collection2} alt="" />
            </div>
          </Col>
          <Col xs={6} lg={3}>
            <div className="img">
              <img src={collection3} alt="" />
            </div>
          </Col>
          <Col xs={6} lg={3}>
            <div className="img">
              <img src={collection4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 className="text-center feature">FEATURED PRODUCTS</h2>
        {!products.length ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5">See all products</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;

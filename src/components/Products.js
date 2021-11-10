import React from "react";
import { Container, Row } from "react-bootstrap";
import useProducts from "../hooks/useProducts.js";
import Header from "./Header.js";
import Product from "./Product.js";

const Products = () => {
  const products = useProducts();
  return (
    <>
      <Header />
      <Container>
        <h2 className="text-center mt-5 mb-4 feature">FEATURED PRODUCTS</h2>
        <Row>
          {products?.map((product) => (
            <Product kay={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;

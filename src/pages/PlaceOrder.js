import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../components/Header.js";
import { useForm } from "react-hook-form";
import useContexts from "../hooks/useContexts.js";

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { displayName, email } = useContexts();
  useEffect(() => {
    fetch(`http://localhost:5000/placeorder/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Row className="align-items-center">
          <Col sm={12} style={{ borderRight: "1px solid #ddd" }} md={6}>
            <img width="100%" src={product.img} alt="" />
          </Col>
          <Col className="my-4" sm={12} md={6}>
            <h2 className="text-center feature">Please confirm your order</h2>
            <div className="mt-5">
              <h4>{product.desc}</h4>
              <h3 className="mt-3">Price: {product.price}.00TK</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mt-3">
                  <Col sm={12} md={6}>
                    <label htmlFor="name">
                      <b>Name</b>
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      className="form-control"
                      {...register("name")}
                      defaultValue={displayName}
                      placeholder="your name"
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <label htmlFor="email">
                      <b>Email</b>
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      readOnly
                      defaultValue={email}
                      className="form-control"
                      {...register("email")}
                      placeholder="your email"
                    />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col>
                    <label htmlFor="address">
                      <b>Address</b>
                    </label>
                    <input
                      id="address"
                      required
                      type="text"
                      className="form-control"
                      {...register("address")}
                      placeholder="Enter your address"
                    />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col>
                    <label htmlFor="phone">
                      <b>Phone</b>
                    </label>
                    <input
                      id="phone"
                      required
                      type="number"
                      className="form-control"
                      {...register("phone")}
                      placeholder="Enter your phone"
                    />
                  </Col>
                </Row>
                <input
                  value="Order Now"
                  className="btn btn-primary"
                  type="submit"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceOrder;

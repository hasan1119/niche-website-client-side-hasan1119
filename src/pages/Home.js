import React from "react";
import Header from "../components/Header.js";
import Product from "../components/Product.js";
import "./../assets/css/home.css";
const Home = () => {
  const products = [];
  return (
    <div>
      <Header />
      <h1>Home</h1>
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Home;

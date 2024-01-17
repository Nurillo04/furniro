import React from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Range from "../../components/range/Range";

const Home = () => {
  return (
    <div>
      <Hero />
      <Range />
      <Products />
    </div>
  );
};

export default Home;

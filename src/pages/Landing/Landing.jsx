import React from "react";
import Carousel from "../../components/carousel/Carousel.jsx";
import Category from "../../components/catagory/Catagory.jsx";
import Product from "../../components/product/Product.jsx";
import LayOut from "../../components/layout/Layout.jsx";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category/>
      <Product />
    </LayOut>
  );
}

export default Landing;

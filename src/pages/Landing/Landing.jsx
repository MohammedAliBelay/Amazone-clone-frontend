import React from "react";
import Carousel from "../../Components/carousel/Carousel.jsx";
import Category from "../../Components/catagory/Catagory.jsx";
import Product from "../../Components/product/Product.jsx";
import LayOut from "../../Components/layout/Layout.jsx";

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

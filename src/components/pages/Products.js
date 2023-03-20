import React, { useState } from "react";
import { SliderDate } from "../SliderData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import "../../App.css";

const Products = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <section className="slider">
      <AiOutlineArrowLeft className="left-arrow" />
      <AiOutlineArrowRight className="right-arrow" />
      {SliderDate.map((slide, index) => {
        return <img src={slide.image} alt="calligraphy image" />;
      })}
    </section>
  );
};

export default Products;

import React, { useState } from "react";
import { SliderDate } from "../SliderData";
// import { IconContext, DefaultContext } from "./iconContext";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import "../../App.css";

const Products = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  // const length = slides.length;

  return (
    <section className="slider">
      <AiOutlineLeft className="left-arrow" />
      <AiOutlineRight className="right-arrow" />
      {SliderDate.map((slide, index) => {
        return <img src={slide.image} alt="calligraphy image" />;
      })}
    </section>
  );
};

export default Products;

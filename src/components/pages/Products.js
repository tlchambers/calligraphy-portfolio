import React, { useState } from "react";
import { SliderDate } from "../SliderData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import "../../App.css";

const Products = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.legnth <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
      <AiOutlineArrowRight className="right-arrow" onClick={nextSlide} />
      {SliderDate.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="calligraphy image"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Products;

import React, { useState } from "react";
import { SliderDate } from "../SliderData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../../Styling/Products.css";

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
      <AiOutlineLeft className="left-arrow" onClick={prevSlide} />
      <AiOutlineRight className="right-arrow" onClick={nextSlide} />
      {SliderDate.map((slide, index) => {
        return (
          <div className="image-container">
          <section className="slider">
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
            // id="image-container"
          >{index === current && (
              <img
                src={slide.image}
                alt="calligraphy image"
                className="image"
              />
            )}
          </div>
          </section>
          </div>
        );
      })}
    </section>
  );
};

export default Products;

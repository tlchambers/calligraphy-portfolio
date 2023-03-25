import React from "react";
import "./Services.css";
import "../../components/pages/Services";
// import CardItem from "../CardItem";
import Cards from "../Cards";
// import CalligraphyTopper from "./img/calligraphyTopper.png"

function Services() {
  return (
    <>
      <div className="container">
        <div className="image">
          <img
            className="product-image-1"
            src="https://images.squarespace-cdn.com/content/v1/5bc71a1bc2ff61688a44ba37/1585122323611-78VKAAFFLYFBNX963SLW/31.jpg?format=2500w"
            alt="image"
          />
        </div>
        <div className="heading">
          <h1>Bespoke calligraphy created I've built over the past 2 years</h1>
        </div>
      </div>

      <div className="container1">
        <div className="info-container">
          <p>Receiving a lovingly calligraphed gift in the modern age of technology is something special and wonderful. It could be a personalised gift made with traditional ink and a nib, or it could be a beautifully written envelope.</p>
          <p>Learning calligraphy has been an amazing journey for me, one that requires practice and patience. Through this journey, I have been able to create stunning works of art that showcase my unique style and creativity. </p>
        </div>
        <div>
          <img className="product-image-1" src="https://images.squarespace-cdn.com/content/v1/5a3c5739aeb625ba533819a0/1614987099903-7CHLIF50E831MLTJB7EH/bespoke-calligraphy-prints-poem-commission-anniversary-gift.jpg?format=1500w" alt="calligraphy topper created in January 2023" />
        </div>
      </div>

      <div className="container2">
        <div className="image">
          <img
            className="product-image-1"
            src="https://images.squarespace-cdn.com/content/v1/5a3c5739aeb625ba533819a0/1621346364480-BATHA2VIOKEADSKYKAGK/custom-modern-calligraphy-commission.jpg?format=1500w"
            alt="ang"
          />
        </div>
        <div className="heading">
          <h1>Bespoke calligraphy created I've built over the past 2 years</h1>
        </div>
      </div>

      {/* <Cards /> */}
    </>
  );
}

export default Services;

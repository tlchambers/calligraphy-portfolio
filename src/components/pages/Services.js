import React from "react";
import "../../Styling/Services.css";
import "../../components/pages/Services";
// import CardItem from "../CardItem";
import Cards from "../Cards";

function Services() {
  return (
    <>
      <div className="container">
        <div className="image">
          <img
            className="product-image-1-left"
            src="https://images.squarespace-cdn.com/content/v1/5bc71a1bc2ff61688a44ba37/1585122323611-78VKAAFFLYFBNX963SLW/31.jpg?format=2500w"
            alt="image"
          />
        </div>
        <div className="heading">
          <h1>Bespoke calligraphy created I've crafted over the past 2 years</h1>
        </div>
      </div>

      <div className="container1">
        <div className="text-container">
        <h2>Bespoke Calligraphy Services</h2>
          <p>Receiving a lovingly calligraphed gift in the modern age of technology is something special and wonderful. It could be a personalised gift made with traditional ink and a nib, or it could be a beautifully written envelope.</p><br/>
          <p>Learning calligraphy has been an amazing journey for me, one that requires practice and patience. Through this journey, I have been able to create stunning works of art that showcase my unique style and creativity. </p>
        </div>
        <div>
          <img className="product-image-100" src="https://images.squarespace-cdn.com/content/v1/5a3c5739aeb625ba533819a0/1614987099903-7CHLIF50E831MLTJB7EH/bespoke-calligraphy-prints-poem-commission-anniversary-gift.jpg?format=1500w" alt="calligraphy topper created in January 2023" />
        </div>
      </div>

      <div className="container1">
        <div>
          <img className="product-image-100" src="https://images.squarespace-cdn.com/content/v1/5a3c5739aeb625ba533819a0/1614987099903-7CHLIF50E831MLTJB7EH/bespoke-calligraphy-prints-poem-commission-anniversary-gift.jpg?format=1500w" alt="calligraphy topper created in January 2023" />
        </div>
        <div className="text-container">
          <h2>Custom Hand Painted Candles</h2>
          <p>Hand-painted calligraphy candles are a one-of-a-kind creation that brings a touch of elegance and personalization to any space. The unique combination of hand-painted art and calligraphy creates a truly bespoke candle that makes for a memorable and meaningful gift. </p><br/>
          <p>These candles are perfect for adding a special touch to weddings, events, or as a statement piece in your own home. Choose from a variety of scents and colors to create a truly unique and personalized candle that will illuminate your space in more ways than one.</p>
        </div>
      
        <div className="text-container">
          <h2>Custom Signage for any occasion</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <img className="product-image-100" src="https://images.squarespace-cdn.com/content/v1/5a3c5739aeb625ba533819a0/1614987099903-7CHLIF50E831MLTJB7EH/bespoke-calligraphy-prints-poem-commission-anniversary-gift.jpg?format=1500w" alt="calligraphy topper created in January 2023" />
        </div>
      </div>

      {/* <Cards /> */}
    </>
  );
}

export default Services;

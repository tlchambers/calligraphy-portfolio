import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>My Calligraphy</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.JPG"
              text="How it all started"
              label="Product"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Services"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Candles"
              path="/candles"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Candles"
              path="/candles"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Greeting Cards"
              path="/greeting-cards"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Contact"
              path="/contact"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../Styling/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/vid/video-3.mp4" autoPlay loop muted />
      <h1>I am simply an appreciator of beautiful writing</h1>
      <p>who enjoys creating contemporary lettering for special occasions</p>
      {/* <div className="hero-btns">
        <Button
          to="/about"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          CONTACT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={console.log("Video on this page")}
        >
          WATCH <i className="far fa-play-circle" />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;

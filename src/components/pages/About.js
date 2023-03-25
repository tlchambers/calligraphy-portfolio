import React from 'react';
import '../../App.css';
import "./Services.css";

export default function About() {
  return (
  <>
    <div className="container1">
      <div className="text-container">
        <h2>About Me</h2>
        <br />
          <p>Hi there, I am so glad you stopped by!</p>
          <p>My name is Thuy, it's pronounced as '<em>Twee</em>' in case you're curious. I discovered my love for calligraphy during the pandemic. What started as a hobby quickly turned into an opportunity, as I discovered a passion for creating beautiful calligraphy products. With determination and hard work, I began selling my handmade creations and found joy in bringing beauty to the lives of others. It has been an incredible adventure so far, and I can't wait to see where my love for calligraphy takes me next. I am committed to creating bespoke calligraphy products that are as unique as the individuals who purchase them. Thank you for stopping by and joining me on this exciting journey!</p><br/>
        </div>
        <div>
          <img className="product-image-100" src="https://images.squarespace-cdn.com/content/v1/5a3c5739aeb625ba533819a0/1614987099903-7CHLIF50E831MLTJB7EH/bespoke-calligraphy-prints-poem-commission-anniversary-gift.jpg?format=1500w" alt="calligraphy topper created in January 2023" />
        </div>
    </div>
  </>
  );
}
import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import "../../Styling/Contact.css";


function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="form-container">
      <div className="info-container">
      </div>
      <div>
      <form className="form-section" onSubmit={handleSubmit}>
      <h1>Get in touch</h1>
      <p>
        For commission, quotes and collaboration, please get in touch via the
        form below.
      </p>
      <br /> 
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email Address
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Subject <select value={subject} onChange={(e) => setSubject(e.target.value)} >
            <option value="Bespoke Stationery">Bespoke Stationery</option>
            <option value="Hand Painted Candles">Hand Painted Candles</option>
            <option value="Custom Signage">Custom Signage</option>
          </select>
        </label>
        <label>
          Message
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <input type="submit" value="Send Enquiry" />
      </form>
      </div>
      </div>
    </>
  );
}

export default Contact
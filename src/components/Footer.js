import React from "react";
import { Button } from "./Button";
import "../Styling/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join my newsletter to follow my journey!
        </p>
        <p className="footer-subscription-text">
          You can unsubscibe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h4>About Me</h4>
            <Link to="/about">How it all started</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h4>Contact Us</h4>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h4>Social Media</h4>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">TLCHAMBERS © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link tiktok"
              to="/"
              target="_blank"
              aria-label="Tiktok"
            >
              <i class="fab fa-tiktok" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container p-5 mb-5">
      <div className="hero-content text-center">
        <div className="hero-image-wrapper mb-5">
          <img
            src="media/images/FinPortMainpage.png"
            alt="Hero Image"
            className="hero-image"
            style={{width:"80%"}}
          />
        </div>
        <h1 className="hero-title mt-5">Invest in everything</h1>
        <p className="hero-subtitle">
          Online platform to invest in stock, derivatives, mutual funds, and
          more
        </p>
        <Link to="/signup">
          <button
            className="hero-btn p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

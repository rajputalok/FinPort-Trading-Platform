import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="products-hero-container">
      <div className="products-hero-content">
        <h1 className="products-hero-title">Technology</h1>
        <h3 className="products-hero-subtitle">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="products-hero-link mt-3 mb-5">
          Check out our{" "}
          <a href="">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import "./FeaturedSection.css";
import { assets } from "../../assets/assets";

export default function FeaturedSection() {
  return (
    <div className="featured-section">
      <div className="featured-text">
        <h1>Featured Pets</h1>
        <p>Browse the pets that have just been listed</p>
      </div>
      <div className="featured-container">
        <div className="featured-pet">
          <div className="thumbnail-img">
            <img src={assets.bugi} />
          </div>
          <div className="pet-details">
            <h3>Bugi</h3>
            <p>Jack Russel Terier</p>
            <p>4 years</p>
            <p>Sofia</p>
          </div>
        </div>
        <div className="featured-pet">
          <div className="thumbnail-img">
            <img src={assets.bugi} />
          </div>
          <div className="pet-details">
            <h3>Mima</h3>
            <p>Labrador</p>
            <p>6 years</p>
            <p>Sofia</p>
          </div>
        </div>
        <div className="featured-pet">
          <div className="thumbnail-img">
            <img src={assets.bugi} />
          </div>
          <div className="pet-details">
            <h3>Plamen</h3>
            <p>Mixed Breed</p>
            <p>5 years</p>
            <p>Sofia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

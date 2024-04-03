import React from "react";
import "./App.css";

const CardFront = ({ formData }) => {
  return (
    <div className="absolute top-14 left-24">
      {/* circles */}
      <div className="absolute left-10 top-10 w-12 h-12 rounded-full bg-white"></div>
      <div className="absolute left-24 top-10 w-6 h-6 rounded-full border border-white"></div>
      <img src={require("../src/images/bg-card-front.png")} alt="" />
      {/* card info */}
      <div className="absolute left-10 top-52">{formData.name}</div>
      <div
        className="absolute left-10 top-36 card-number"
        style={{ letterSpacing: "5px" }}
      >
        {formData.cardNumber}
      </div>
      <div className="absolute right-15 top-80">
        {formData.expirationMonth}/
      </div>
      <div className="absolute right-5 top-80 expiration-year">
        {formData.expirationYear}
      </div>
    </div>
  );
};

export default CardFront;

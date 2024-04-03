import React from "react";
import "./App.css";

const CardFront = ({ formData }) => {
  return (
    <div className="absolute top-14 left-24 card-container">
      <div className="absolute left-10 top-20 w-12 h-12 rounded-full bg-white large-circle"></div>
      <div className="absolute left-25 top-20 w-6 h-6 rounded-full bg-blue-400 border border-white transparent-circle"></div>
      <img src={require("../src/images/bg-card-front.png")} alt="" />
      <div className="absolute left-10 top-80 name">{formData.name}</div>
      <div
        className="absolute left-10 top-50 card-number"
        style={{ letterSpacing: "5px" }}
      >
        {formData.cardNumber}
      </div>
      <div className="absolute right-15 top-80 expiration-month">
        {formData.expirationMonth}/
      </div>
      <div className="absolute right-5 top-80 expiration-year">
        {formData.expirationYear}
      </div>
    </div>
  );
};

export default CardFront;

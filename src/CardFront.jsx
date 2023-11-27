import React from "react";

const CardFront = ({ formData }) => {
  return (
    <div style={{ left: "10%", position: "absolute", top: "0%" }}>
      CardFront
      <img src={require("../src/images/bg-card-front.png")} />
      <div> {formData.name}</div>
      <div> {formData.cardNumber}</div>
    </div>
  );
};

export default CardFront;

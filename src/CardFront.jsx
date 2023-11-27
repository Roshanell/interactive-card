import React from "react";

const CardFront = ({ formData }) => {
  return (
    <div style={{ left: "10%", position: "absolute", top: "0%" }}>
      CardFront
      <img src={require("../src/images/bg-card-front.png")} />
      <div style={{ left: "10%", position: "absolute", top: "80%" }}> {formData.name}</div>
      <div style={{ left: "10%", position: "absolute", top: "50%" }}> {formData.cardNumber}</div>
      <div style={{ right: "15%", position: "absolute", top: "80%" }}>{formData.expirationMonth}</div>
      <div style={{ right: "05%", position: "absolute", top: "80%" }}>{formData.expirationYear}</div>
    </div>
  );
};

export default CardFront;

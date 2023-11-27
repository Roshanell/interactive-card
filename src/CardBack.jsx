import React from "react";

const CardBack = ({ formData }) => {
  return (
    <div>
      CardBack
      <img src={require("../src/images/bg-card-back.png")} />
      <div>{formData.expirationMonth}</div>
      <div>{formData.expirationYear}</div>
      <div>{formData.cvv}</div>
    </div>
  );
};

export default CardBack;

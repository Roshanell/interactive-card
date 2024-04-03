import React from "react";

const CardBack = ({ formData }) => {
  return (
    <div className="absolute left-15 top-30 card-back-container">
      <img src={require("../src/images/bg-card-back.png")} alt="" />
      <div className="absolute right-10 top-45 cvv">{formData.cvv}</div>
    </div>
  );
};

export default CardBack;

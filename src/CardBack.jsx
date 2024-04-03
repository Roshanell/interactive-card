import React from "react";

const CardBack = ({ formData }) => {
  return (
    <div className="absolute left-52 bottom-4 card-back-container">
      <img src={require("../src/images/bg-card-back.png")} alt="" />
      <div className="absolute right-11 top-28 cvv">{formData.cvv}</div>
    </div>
  );
};

export default CardBack;

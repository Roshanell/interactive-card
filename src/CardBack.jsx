import React from "react";

const CardBack = ({ formData }) => {
  return (
    <div style={{ position: "absolute", left: "15%", top: "50%" }}>
      CardBack
      <img src={require("../src/images/bg-card-back.png")} />
      <div style={{ right: "10%", position: "absolute", top: "50%" }}>
        {formData.cvv}
      </div>
    </div>
  );
};

export default CardBack;

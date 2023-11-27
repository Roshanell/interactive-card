import React from "react";

const CardBack = ({ formData }) => {
  return (
    <div style={{ position: "absolute", left: "15%", top: "55%" }}>
      <img src={require("../src/images/bg-card-back.png")} />
      <div style={{ right: "10%", position: "absolute", top: "45%" }}>
        {formData.cvv}
      </div>
    </div>
  );
};

export default CardBack;

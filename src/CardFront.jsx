import React from "react";

const CardFront = ({ formData }) => {
  const largeCircle = {
    left: "10%",
    position: "absolute",
    top: "20%",
    borderRadius: "50%",
    backgroundColor: "white",
    width: "50px",
    height: "50px",
  };
  const transparentCircle = {
    width: "25px",
    height: "25px",
    backgroundColor: "rgba(52, 152, 219, 0.5)",
    borderRadius: "50%",
    border: "1px solid white", 
    left: "25%",
    position: "absolute",
    top: "20%",
  };
  return (
    <div style={{ left: "10%", position: "absolute", top: "10%" }}>
      <div style={largeCircle}> </div>
      <div style={transparentCircle}></div>
      <img src={require("../src/images/bg-card-front.png")} />
      <div style={{ left: "10%", position: "absolute", top: "80%" }}>
        {" "}
        {formData.name}
      </div>
      <div style={{ left: "10%", position: "absolute", top: "50%" }}>
        {" "}
        {formData.cardNumber}
      </div>
      <div style={{ right: "15%", position: "absolute", top: "80%" }}>
        {formData.expirationMonth}
      </div>
      <div style={{ right: "05%", position: "absolute", top: "80%" }}>
        {formData.expirationYear}
      </div>
    </div>
  );
};

export default CardFront;

import React from "react";

const CardFront = ({ formData }) => {
  // const [formData, setFormData] = React.useState({
  //   name: "",
  //   cardNumber: "",
  //   expirationMonth: "",
  //   expirationYear: "",
  //   cvv:

  return (
    <div>
      CardFront
      <img src={require("../src/images/bg-card-front.png")} />
      <div> {formData.name}</div>
      <div> {formData.cardNumber}</div>
    </div>
  );
};

export default CardFront;

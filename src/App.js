import React from "react";
import "./App.css";
import Form from "./Form";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

function App() {
  const [formData, setFormData] = React.useState({
    name: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };
  return (
    <div className="App">
      <Form formData={formData} handleChange={handleChange} />
      <CardFront formData={formData} handleChange={handleChange} />
      <CardBack formData={formData} handleChange={handleChange} />
    </div>
  );
}

export default App;

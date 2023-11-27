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

  const initialFormData = {
    name: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };
  return (
    // to do- set max len on inputs
    // add functionality to submit button
    // go to next page when submitted
    <div>
      <div className="background"></div>
      <Form
        formData={formData}
        handleChange={handleChange}
        initialFormData={initialFormData}
        setFormData={setFormData}
      />

      <CardFront
        formData={formData}
        handleChange={handleChange}
        initialFormData={initialFormData}
        setFormData={setFormData}
      />
      <CardBack
        formData={formData}
        handleChange={handleChange}
        initialFormData={initialFormData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default App;

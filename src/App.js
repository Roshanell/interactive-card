import React from "react";
import "./App.css";
import Form from "./Form";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import Confirmation from "./Confirmation";

function App() {
  const [currentStep, setCurrentStep] = React.useState(1);

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

  const handleNextStep = (e) => {
    // Check if any field is empty
    if (
      !formData.cardNumber ||
      !formData.name ||
      formData.expirationMonth ||
      formData.expirationYear ||
      formData.cvv
    ) {
      alert("Please ensure the form is filled out properly");
    } else {
      console.log("Form submitted successfully!");
      e.preventDefault();
      setCurrentStep(currentStep + 1);
    }
  };

  const handleFormReset = (e) => {
    alert("Thank you for your submission");
    setCurrentStep(1);
    setFormData(initialFormData);
  };
  return (
    <div>
      <div className="background"></div>
      {currentStep === 1 ? (
        <Form
          formData={formData}
          handleChange={handleChange}
          initialFormData={initialFormData}
          setFormData={setFormData}
          // handleSubmit={handleSubmit}
          handleNextStep={handleNextStep}
          currentStep={currentStep}
          handleFormReset={handleFormReset}
        />
      ) : (
        <Confirmation handleFormReset={handleFormReset} />
      )}
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

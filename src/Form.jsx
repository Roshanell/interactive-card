import React from "react";
import "./App.css";

const Form = ({
  formData,
  handleChange,
  currentStep,
  handleNextStep,
  handleFormReset,
}) => {
  return (
    <form className="text-black">
      <div className="absolute right-60 top-10 form-controls">
        <div className="mb-4 form-control">
          <label className="label">
            <span className="font-bold label-text">Cardholder Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input border-2 border-slate-200"
            required
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 form-control">
          <label className="label">
            <span className="font-bold label-text">Card Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input border-2 border-slate-200"
            required
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={16}
          />
        </div>
        <div className="mb-4 form-control">
          <label className="label">
            <span className="font-bold label-text">Month</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input border-2 border-slate-200"
            required
            name="expirationMonth"
            id="expirationMonth"
            value={formData.expirationMonth}
            onChange={handleChange}
            maxLength={2}
          />
        </div>
        <div className="mb-4 form-control">
          <label className="label">
            <span className="font-bold label-text">Year</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input border-2 border-slate-200"
            required
            name="expirationYear"
            id="expirationYear"
            value={formData.expirationYear}
            onChange={handleChange}
            maxLength={4}
          />
        </div>
        <div className="mb-4 form-control">
          <label className="label">
            <span className="font-bold label-text">CVV</span>
          </label>
          <input
            type="text"
            maxLength={3}
            placeholder="Type here"
            className="input border-2 border-slate-200"
            name="cvv"
            id="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn mt-4"
            onClick={currentStep !== 3 ? handleNextStep : handleFormReset}
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

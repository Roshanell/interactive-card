import React from "react";

const Form = ({
  formData,
  handleChange,
  currentStep,
  handleNextStep,
  handleFormReset,
}) => {
  return (
    <form style={{ color: "black" }}>
      <div style={{ left: "60%", position: "absolute", top: "10%" }}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Cardholder Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Card Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={16}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Month</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            name="expirationMonth"
            id="expirationMonth"
            value={formData.expirationMonth}
            onChange={handleChange}
            maxLength={2}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Year</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            name="expirationYear"
            id="expirationYear"
            value={formData.expirationYear}
            onChange={handleChange}
            maxLength={4}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">CVV</span>
          </label>
          <input
            type="text"
            maxLength={3}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="cvv"
            id="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />
          <button
            type="submit"
            style={{ marginTop: "10%" }}
            className="btn btn-wide"
            onClick={currentStep != 3 ? handleNextStep : handleFormReset}
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

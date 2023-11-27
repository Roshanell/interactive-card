import React from "react";

const Form = ({ formData, handleChange, setFormData, initialFormData }) => {
  const handleSubmit = (e) => {
    setFormData(initialFormData);
  };

  return (
    <div style={{ color: "black" }}>
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
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Month</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            name="expirationMonth"
            id="expirationMonth"
            value={formData.expirationMonth}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Year</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            name="expirationYear"
            id="expirationYear"
            value={formData.expirationYear}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">CVV</span>
          </label>
          <input
            type="number"
            maxLength={3}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            name="cvv"
            id="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />
          <button
            type="submit"
            style={{ marginTop: "10%" }}
            className="btn btn-wide"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

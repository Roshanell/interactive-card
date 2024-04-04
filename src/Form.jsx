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
    <form className="text-black uppercase">
      <div className="absolute right-32 top-40 w-1/3">
        <div className="mb-4 form-control">
          <label className="label">
            <span className="font-bold label-text">Cardholder Name</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
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
            placeholder="e.g.1234 5678 9123 0000"
            className="input border-2 border-slate-200"
            required
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={16}
          />
        </div>

        <div className="flex flex-wrap space-x-">
          <div className="mb-4 w-1/3">
            <label className="label">
              <span className="font-bold label-text -mr-30">exp. date</span>
            </label>
            <input
              type="text"
              placeholder="MM"
              className="input border-2 border-slate-200 w-28"
              required
              name="expirationMonth"
              id="expirationMonth"
              value={formData.expirationMonth}
              onChange={handleChange}
              maxLength={2}
            />
          </div>
          <div className="mb-4 w-1/3 ">
            <label className="label">
              <span className="font-bold label-text -ml-16">
                {"  "} (mm/yy)
              </span>
            </label>
            <input
              type="text"
              placeholder="YY"
              className="input border-2 border-slate-200 w-28 -ml-5"
              required
              name="expirationYear"
              id="expirationYear"
              value={formData.expirationYear}
              onChange={handleChange}
              maxLength={4}
            />
          </div>
          <div className="mb-4 w-1/3">
            <label className="label">
              <span className="font-bold label-text">CVV</span>
            </label>
            <input
              type="text"
              maxLength={3}
              placeholder="e.g. 123"
              className="input border-2 border-slate-200 w-36"
              name="cvv"
              id="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn mt-4 w-full"
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

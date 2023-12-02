import React from "react";
import completeSVG from "./images/icon-complete.svg";

const Confirmation = ({ handleFormReset }) => {
  return (
    <div
      style={{
        color: "black",
        left: "60%",
        position: "absolute",
        top: "50%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={completeSVG}
        style={{ height: "2em", width: "2em", marginLeft: "7em" }}
      />
      <h2
        style={{
          fontSize: "30px",
          textTransform: "uppercase",
          marginLeft: "50px",
          color: "hsl(278, 68%, 11%)",
        }}
      >
        {" "}
        Thank you!
      </h2>
      <span style={{ color: "hsl(270 3% 87%)" }}>
        We've added your card details
      </span>
      <button
        className="btn btn-outline"
        onClick={handleFormReset}
        style={{ marginTop: "20px" }}
      >
        Continue
      </button>
    </div>
  );
};

export default Confirmation;

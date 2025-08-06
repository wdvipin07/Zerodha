import React from "react";

function OpenAccount() {
  return (
    <div className="container text-center my-5 p-5">
      <div className="row">
        <h1 className="mb-4 fs-2">Open a Zerodha account</h1>
        <h6>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </h6>
        <button
          className="p-2 btn btn-primary mt-5 fs-5"
          style={{
            margin: "0 auto",
            width: "20%",
            backgroundColor: "rgb(61, 130, 220)",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;

import React from "react";

function Universe() {
  return (
    <div className="container universe my-5 ">
      <div className="row pt-5 my-5">
        <h1 className="text-center mb-3">The Zerodha Universe</h1>
        <p className="text-center text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row my-5 text-center">
        <div className="col mb-5">
          <img src="media/images/zerodhaFundhouse.png" alt="" />
        </div>
        <div className="col mb-5">
          <img src="media/images/sensibullLogo.svg" alt="" />
        </div>
        <div className="col mb-5">
          <img src="media/images/tijori.svg" alt="" />
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col mb-5">
          <img src="media/images/streakLogo.png" alt="" />
        </div>
        <div className="col mb-5">
          <img src="media/images/smallcaseLogo.png" alt="" />
        </div>
        <div className="col mb-5">
          <img src="media/images/dittoLogo.png" alt="" />
        </div>
      </div>

      <div className="row">
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

export default Universe;

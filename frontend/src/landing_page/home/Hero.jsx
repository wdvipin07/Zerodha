import React from "react";

function Hero() {
  return (
    <div className="container text-center p-5">
      <div className="row">
        <img
          style={{ width: "70%", height: "70%", margin: "0 auto" }}
          src="media/images/homeHero.png"
          alt="Hero"
          className="mb-5  "
        />
        <h1 className="mb-4">Invest in everything</h1>
        <h5>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </h5>
        <button
          className="p-2 btn btn-primary mt-5 fs-5"
          style={{
            margin: "0 auto",
            width: "20%",
            backgroundColor: "rgb(61, 130, 220)",
            // display: "flex", // Center text horizontally and vertically
            // justifyContent: "center", // Center text horizontally
            // alignItems: "center", // Center text vertically
            // textAlign: "center", // Make sure text is centered inside the button
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;

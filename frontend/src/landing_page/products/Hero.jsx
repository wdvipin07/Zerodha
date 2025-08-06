import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center my-5 p-5">
        <h1 style={{ fontSize: "2.9em" }}>Zerodha Products</h1>
        <h3 className="text-muted fs-5 mt-2">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <h6 className=" fs-6 mt-2">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Hero;

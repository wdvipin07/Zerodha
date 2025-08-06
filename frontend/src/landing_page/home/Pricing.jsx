import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none", fontWeight: "bold" }}>
            See pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-4">
          <img src="media/images/pricing0.svg" width={"60%"} height={"100%"} />

          {/* <span style={{ fontSize: "0.7rem" }}>Free account </span> */}
        </div>

        <div className="col-lg-2 col-md-2 col-sm-4">
          <img
            src="media/images/pricingEquity.svg"
            width={"60%"}
            height={"100%"}
          />
          {/* <span style={{ fontSize: "0.6rem" }}>Free equity </span> */}
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4">
          <img
            src="media/images/other-trades.svg"
            width={"60%"}
            height={"100%"}
          />
          {/* <span style={{ fontSize: "0.6rem" }}>Intraday </span> */}
        </div>
      </div>
    </div>
  );
}

export default Pricing;

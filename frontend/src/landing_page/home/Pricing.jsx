import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none", fontWeight: "bold" }}>
            See pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* Images Section */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row text-center">
            <div className="col-4 mb-3">
              <img
                src="media/images/pricing0.svg"
                className="img-fluid"
                alt="Free account"
              />
              <div style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                Free Account
              </div>
            </div>
            <div className="col-4 mb-3">
              <img
                src="media/images/pricingEquity.svg"
                className="img-fluid"
                alt="Free equity"
              />
              <div style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                Free Equity
              </div>
            </div>
            <div className="col-4 mb-3">
              <img
                src="media/images/other-trades.svg"
                className="img-fluid"
                alt="Intraday"
              />
              <div style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                Intraday
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

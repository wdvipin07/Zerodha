import React from "react";

function Hero() {
  return (
    <div className="container pricing">
      <div className="row my-5 py-5">
        <div className="col text-center mb-5">
          <h1>Charges</h1>
          <h4 className=" text-muuted mt-3">List of all charges and taxes</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 p-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h3 className=" mt-3 text-center">Free equity delivery</h3>
          <p className="mt-4 text-muted text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 p-4">
          <img src="media/images/other-trades.svg" alt="" />
          <h3 className=" mt-3 text-center">Intraday and F&O trades</h3>
          <p className="mt-4 text-muted text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 p-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h3 className=" mt-3 text-center">Free direct MF</h3>
          <p className="mt-4 text-muted text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

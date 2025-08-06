import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row  ">
        <div className="col-lg-7 col-md-7 col-sm-12">
          <img src="media/images/education.svg" width={"80%"} alt="" />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 ">
          <h1 className="mb-4 fs-2 mt-5">Free and open market education</h1>
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>

          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

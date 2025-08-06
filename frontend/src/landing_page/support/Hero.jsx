import React from "react";

function Hero() {
  return (
    <div className="container-fluid support py-5">
      <div className="d-flex justify-content-between align-items-center px-3 px-md-5 mb-4 w-100">
        <h4 className="mb-0">Support Portal</h4>
        <a href="#" className=" ms-3" style={{ whiteSpace: "nowrap" }}>
          Track tickets
        </a>
      </div>

      <div className="row px-3 px-md-5">
        {/* Left column */}
        <div className="col-md-7 col-12 mb-4">
          <h4 className="mb-3">
            Search for an answer or help topics to create a ticket
          </h4>

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
          />

          <div className="text-white ">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        {/* Right column */}
        <div className="col-md-5 col-12">
          <h4 className="mb-3">Featured</h4>
          <ol className="ps-3">
            <li className="mb-2">
              <a href="#" className="text-decoration-none">
                Surveillance measure on scrips - June 2025
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Latest Intraday leverages and Square-off
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;

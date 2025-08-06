import React from "react";

function Hero() {
  return (
    <div className="container-fluid support">
      <div className="" id="supportWrapper">
        <h4>Support Portal</h4>

        <a href="" className="">
          Track tickets
        </a>
      </div>

      <div className="row p-5 mx-5">
        <div className="col-7">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input
            type="text"
            className="mt-4 "
            placeholder="Eg: how do i activate F&O, why is my ordergetting rejected..... "
          />
          <br />
          <a href="" className="">
            Track account opening
          </a>
          <a href="">Track segment activation </a>
          <a href="">Intraday margins</a>
          <a href=""> Kite user manual</a>
        </div>
        <div className="col-5">
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="">Surveillance measure on scrips - June 2025</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages and Square-off </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 my-5">
        <h4 className="text-muted">
          To create a ticket, select a relevant topic
        </h4>

        <div className="col-lg-4 col-md-12 col-sm-12  ticket mt-4">
          <a href="">
            <h5 style={{ color: "black" }}>
              <i class="fa-solid fa-circle-plus "></i>&nbsp;Account Opening
            </h5>
          </a>
          <br />
          <a href="">Resident individual</a>
          <br />
          <a href="">Minor </a>
          <br />
          <a href="">Non Resident Indian (NRI)</a>
          <br />
          <a href="">Company, Partnership, HUF and LLP</a>
          <br />
          <a href="">Glossary</a>
          <br />
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 ticket mt-4">
          <a href="">
            <h5 style={{ color: "black" }}>
              <i class="fa-regular fa-user"></i> Your Zerodha Account
            </h5>
          </a>
          <br />
          <a href="">Your Profile Transfer and conversion of securities</a>
          <br />
          <a href="">Account modification </a>
          <br />
          <a href="">
            Client Master Report (CMR) and Depository Participant (DP) (NRI)
          </a>
          <br />
          <a href="">Nomination</a>
          <br />
          <a href="">Transfer and conversion of securities</a>
          <br />
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 ticket mt-4">
          <a href="">
            <h5 style={{ color: "black" }}>
              <i class="fa-solid fa-lines-leaning"></i>&nbsp;Kite
            </h5>
          </a>
          <br />
          <a href="">IPO </a>
          <br />
          <a href="">Trading FAQs </a>
          <br />
          <a href="">Margin Trading Facility (MTF) and Margins</a>
          <br />
          <a href="">Charts and orders</a>
          <br />
          <a href="">Alerts and Nudges</a>
          <br />
          <a href="">General</a>
          <br />
        </div>

        <div className="row mt-5">
          <div className="col-lg-4 col-md-12 col-sm-12 ticket mt-4">
            <a href="">
              <h5 style={{ color: "black" }}>
                <i class="fa-solid fa-wallet"></i> &nbsp;Funds
              </h5>
            </a>
            <br />
            <a href="">Add money</a>
            <br />
            <a href="">Withdraw money </a>
            <br />
            <a href="">Add bank accounts</a>
            <br />
            <a href="">eMandates</a>
            <br />
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 ticket mt-4">
            <a href="">
              <h5 style={{ color: "black" }}>
                <i class="fa-brands fa-gg-circle"></i>&nbsp; Console
              </h5>
            </a>
            <br />
            <a href="">Portfolio</a>
            <br />
            <a href="">Corporate actions</a>
            <br />
            <a href="">Funds statement</a>
            <br />
            <a href="">Reports</a>
            <br />
            <a href="">Profile</a>
            <br />
            <a href="">Segment</a>
            <br />
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 ticket mt-4">
            <a href="">
              <h5 style={{ color: "black" }}>
                <i class="fa-solid fa-circle-notch"></i> &nbsp;Coin
              </h5>
            </a>
            <br />
            <a href="">Mutual funds</a>
            <br />
            <a href="">National Pension Scheme (NPS) </a>
            <br />
            <a href="">Features on Coin</a>
            <br />
            <a href="">Payments and Orders</a>
            <br />
            <a href="">General</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

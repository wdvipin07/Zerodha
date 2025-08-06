import React from "react";

function Footer() {
  return (
    <div className="container-fluid border-top footer px-5">
      <div className="row ">
        <div className="col-lg col-md col-sm-12 mt-5 ">
          <img
            className="mb-4"
            src="media/images/logo.svg"
            width={"70%"}
            alt=""
          />
          <p>&copy;2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          <div className="social mt-5">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>

            <hr />
            <a href="">
              <i className="fa-brands fa-youtube"></i>
            </a>

            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="col-lg col-md col-sm-12 mt-5 ">
          <h4 className="text-muted mb-4">Account</h4>
          <a href="">Open demat account</a> <br />
          <a href="">Minor demat account</a> <br />
          <a href="">NRI demat account</a>
          <br />
          <a href="">Commodity</a> <br />
          <a href="">Dematerialisation</a> <br />
          <a href="">Fund transfer</a> <br />
          <a href="">MTF</a> <br />
          <a href="">Referral program</a> <br />
        </div>
        <div className="col-lg col-md col-sm-12 mt-5 ">
          <h4 className="text-muted mb-4">Support</h4>
          <a href=""> Contact us</a>
          <br />
          <a href=""> Support portal</a>
          <br />
          <a href=""> How to file a complaint?</a>
          <br />
          <a href=""> Status of your complaints</a>
          <br />
          <a href=""> Bulletin</a>
          <br />
          <a href=""> Circular</a>
          <br />
          <a href=""> Z-Connect blog</a>
          <br />
          <a href=""> Downloads</a>
          <br />
        </div>
        <div className="col-lg col-md col-sm-12 mt-5 ">
          <h4 className="text-muted mb-4">Company</h4>
          <a href="">About</a>
          <br />
          <a href="">Philosophy</a>
          <br />
          <a href="">Press & media </a>
          <br />
          <a href="">Careers</a>
          <br />
          <a href="">Zerodha Cares (CSR) </a>
          <br />

          <a href="">Zerodha.tech</a>
          <br />
          <a href="">Open source</a>
          <br />
        </div>
        <div className="col-lg col-md col-sm-12 mt-5 ">
          <h4 className="text-muted mb-4">Quick links</h4>
          <a href="">Upcoming IPOs </a>
          <br />
          <a href="">Brokerage charges </a>
          <br />
          <a href="">Market holidays </a>
          <br />
          <a href="">Economic calendar </a>
          <br />
          <a href="">Calculators </a>
          <br />
          <a href="">Markets </a>
          <br />
          <a href="">Sectors </a>
          <br />
        </div>
      </div>

      <div
        className="row mt-5 text-small "
        style={{
          fontSize: "0.80rem",
          color: " #9b9b9b",
          lineHeight: "1.8",
          width: "100%",
        }}
      >
        <p className="mb-4">
          Zerodha Broking Ltd.: Member of NSE, BSE &MCX SEBI - Registration no.:
          INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
          Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
      </div>
    </div>
  );
}

export default Footer;

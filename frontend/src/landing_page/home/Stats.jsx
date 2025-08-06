import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-lg-6 colg-md-6 col-sm-12 p-4">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Our philosophies.
            </a>
          </p>

          <h2 className="fs-4 mb-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted mb-4">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 colg-md-6 col-sm-10 ">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} />
          <div className="text-center">
            <a
              href=""
              className="mx-5"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none", fontWeight: "bold" }}>
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

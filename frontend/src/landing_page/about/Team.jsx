import React from "react";

function Team() {
  return (
    <div className="container mb-5 ">
      <div className="row p-5">
        <h1 className=" text-center">Developer</h1>
      </div>

      <div className="row lh-lg ">
        <div className="col-lg-5 col-md-5 col-sm-12 p-5 text-center">
          <img
            src="media/images/vipin.jpg"
            style={{ borderRadius: "50%", width: "65%", height: "80%" }}
            alt="myImage"
          />
          <h4 className="mt-4">Vipin Chaudhary</h4>
          <h6>Web Developer</h6>
        </div>
        <div
          className="col-lg-7 col-md-7 col-sm-12 p-5 "
          style={{ fontSize: "1.1em" }}
        >
          <p>
            Hi, I'm a passionate Full Stack Developer with [3+] years of
            experience in designing, developing, and deploying web applications
            from front to back. I specialize in both frontend (React, Angular,
            HTML/CSS) and backend (Node.js, Express, MongoDB, MySQL)
            technologies.
          </p>
          <p>
            I love solving real-world problems through code and constantly
            learning new tech to stay updated. Currently, I’m open to new
            opportunities where I can contribute and grow as a developer.
          </p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            /
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

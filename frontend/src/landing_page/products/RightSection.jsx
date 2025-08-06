import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5 p-5 ">
        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <h1 className="mb-4 mt-5" lh-lg>
            {productName}
          </h1>
          <p className="lh-lg">{productDescription} </p>

          <div className="mb-5">
            <a
              href=""
              style={{
                marginRight: "5rem",
                textDecoration: "none",
              }}
            >
              {tryDemo}
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {learnMore}
            </a>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />{" "}
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="" />{" "}
            </a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
          <img src={imageUrl} width={"100%"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

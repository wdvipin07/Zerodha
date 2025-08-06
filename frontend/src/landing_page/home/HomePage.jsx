import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Press from "./Press";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Press />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;

import React from "react";
import LandingPageBtns from "./LandingPageBtns";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="Landing">
      <LandingPageBtns />
      {/* <h1 id="landingTitle">landing</h1>
        <h2 id="landingTagline">know what's where and why you need to know</h2> */}
      <Footer />
    </div>
  );
};

export default Landing;

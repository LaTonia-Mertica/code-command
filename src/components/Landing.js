import React from "react";
import LandingPageBtns from "./LandingPageBtns";
import scapeSpan2 from "../components/videos/scapeSpan2.mp4";

const Landing = () => {
  return (
    <div className="Landing">
      <LandingPageBtns />
      {/* <h1 id="landingTitle">landing</h1>
        <h2 id="landingTagline">know what's where and why you need to know</h2> */}
      <video
        src={scapeSpan2}
        autoPlay
        loop
        muted
        className="landingPageVideo"
      />
    </div>
  );
};

export default Landing;

import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "./SiteNavBtns";
import { Link } from "react-router-dom";
import underConstruction from "../components/videos/underConstruction.mp4";

const SelfAssessment = () => {
  return (
    <div className="selfAssessment">
      <SiteNavBtns />
      {/* <h1 className="selfAssessmentH1">assessment</h1> */}
      <h2 className="selfAssessmentH2">crafting</h2>
      <Link to="/">
        <img
          src="arrowBack.png"
          title="visit landing page"
          alt="arrow"
          className="resourceImg arrow"
        />
      </Link>

      <video
        src={underConstruction}
        autoPlay
        loop
        muted
        className="underConstructionVideo"
      />
      <Outlet />
    </div>
  );
};

export default SelfAssessment;

import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "./SiteNavBtns";
import underConstruction from "../components/videos/underConstruction.mp4";

const SelfAssessment = () => {
  return (
    <div className="selfAssessment">
      <SiteNavBtns />
      {/* <h1 className="selfAssessmentH1">assessment</h1> */}
      <h2 className="selfAssessmentH2">crafting</h2>
      <video
        src={underConstruction}
        controls="controls"
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

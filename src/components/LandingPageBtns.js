import React from "react";
import { Link } from "react-router-dom";

const LandingPageBtns = () => {
  return (
    <div className="LandingPageBtns">
      <div className="landingPageBtnsDiv">
        <Link to="/macbasics">
          <h1 className="landingPageButtons">mac basics</h1>
        </Link>
        <Link to="/workflow">
          <h1 className="landingPageButtons">work flow</h1>
        </Link>
        <Link to="/online">
          <h1 className="landingPageButtons">online</h1>
        </Link>
        <Link to="/search">
          <h1 className="landingPageButtons">search</h1>
        </Link>
        <Link to="/codemind">
          <h1 className="landingPageButtons">code mind</h1>
        </Link>
        <Link to="/coding">
          <h1 className="landingPageButtons">coding</h1>
        </Link>
        <Link to="/resources">
          <h1 className="landingPageButtons">resources</h1>
        </Link>
        <Link to="/codeCommandVision-noNav">
          <h1 className="landingPageButtons startHereText">start here</h1>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageBtns;

import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "./SiteNavBtns";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const CodeCommandVision = () => {
  return (
    <div className="codeCommandVision">
      <SiteNavBtns />
      {/* <h1 className="CodeCommandVision">assessment</h1> */}
      <Link to="/">
        <img
          src="arrowBack.png"
          title="back home"
          alt="arrow"
          className="resourceImg arrow arrowStyle"
        />
      </Link>

      <Outlet />
      <Footer />
    </div>
  );
};

export default CodeCommandVision;

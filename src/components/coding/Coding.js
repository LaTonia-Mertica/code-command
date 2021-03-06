import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "../SiteNavBtns";
import CodingLessons from "./CodingLessons";
import "./codingStyles.css";

const Coding = () => {
  return (
    <div className="coding">
      <SiteNavBtns />
      <CodingLessons />

      {/* <h1 id="codingTitle">coding</h1>
        <h2 id="codingTagline">keystroke by keystroke you'll get there</h2> */}
      <Outlet />
    </div>
  );
};

export default Coding;

import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "../SiteNavBtns";
import OnlineLessons from "./OnlineLessons";

const Online = () => {
  return (
    <div className="Online">
      <SiteNavBtns />
      <OnlineLessons />

      {/* <h1 id="onlineTitle">online</h1>
        <h2 id="onlineTagline">much more than just a tool to get info - anticipate, be safe</h2> */}
      <Outlet />
    </div>
  );
};

export default Online;

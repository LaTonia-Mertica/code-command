import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "../SiteNavBtns";
import ResourceLessons from "./ResourceLessons";

const Resources = () => {
  return (
    <div className="Resources">
      <SiteNavBtns />
      <ResourceLessons />

      {/* <h1 id="resourcesTitle">resources</h1> */}
      {/* <h2 id="resourcesTagline">some quirky shiite still hopefully helpful</h2> */}
      <Outlet />
    </div>
  );
};

export default Resources;

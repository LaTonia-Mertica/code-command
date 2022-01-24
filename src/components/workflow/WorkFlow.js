import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "../SiteNavBtns";
import WorkFlowLessons from "./WorkFlowLessons";

const WorkFlow = () => {
  return (
    <div className="WorkFlow">
      <SiteNavBtns />
      <WorkFlowLessons />

      {/* <h1 id="workflowTitle">work flow</h1>
        <h2 id="workflowTagline">set up a consistent flow to optimize efficiency</h2> */}
      <Outlet />
    </div>
  );
};
export default WorkFlow;

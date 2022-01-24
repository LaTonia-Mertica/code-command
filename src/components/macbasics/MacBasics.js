import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "../SiteNavBtns";
import MacBasicsLessons from "./MacBasicsLessons";

const MacBasics = () => {
  return (
    <div className="MacBasics">
      <SiteNavBtns />
      <MacBasicsLessons />

      {/* <h1 id="macbasicsTitle">macbasics</h1>
        <h2 id="macbasicsTagline">know what's where and why you need to know</h2> */}
      <Outlet />
    </div>
  );
};
export default MacBasics;

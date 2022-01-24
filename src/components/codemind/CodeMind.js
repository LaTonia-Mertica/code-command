import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "../SiteNavBtns";
import CodeMindLessons from "./CodeMindLessons";

const CodeMind = () => {
  return (
    <div className="CodeMind">
      <SiteNavBtns />
      <CodeMindLessons />

      {/* <h1 id="codemindTitle">codemind</h1>
        <h2 id="codemindTagline">it is true you must get into the mental frame to code</h2> */}
      <Outlet />
    </div>
  );
};

export default CodeMind;

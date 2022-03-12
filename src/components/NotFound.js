import React from "react";
import Glitch from "./videos/Glitch.mp4";

const NotFound = () => {
  return (
    <div>
      <div className="div404">
        <span className="four04 first4">4</span>
        <span className="four04 only0">0</span>
        <span className="four04 second4">4</span>
      </div>

      <h1 className="notFoundPgText">Nothing Here But Code Hopefuls</h1>
      <p className="bottomLine">click title to return home</p>

      <video src={Glitch} autoPlay loop muted className="notFoundPageVideo" />
    </div>
  );
};

export default NotFound;

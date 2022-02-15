import React from "react";
import "./resources.css";

const StaticFiles = () => {
  return (
    <div>
      <a href="/lessonsContent/staticFiles.pdf" target="_blank">
        <img
          src="/lessonsContent/staticFiles1.png"
          title="static files guide"
          alt="static files"
          className="resourceImg staticFiles"
        />
      </a>
    </div>
  );
};

export default StaticFiles;

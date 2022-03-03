import React from "react";
import "./resourcesStyles.css";

const StaticFiles = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/staticFiles.pdf`}
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/staticFiles1.png`}
          title="static files guide"
          alt="static files"
          className="resourceImg staticFiles"
        />
      </a>
    </div>
  );
};

export default StaticFiles;

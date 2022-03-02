import React from "react";

const BasicSiteConsultGuide = () => {
  return (
    <div>
      <a href="/lessonsContent/basicSiteConsultGuide.pdf" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/basicSiteConsultGuide1.png`}
          title="basic site consult guide"
          alt="basic site consult"
          className="resourceImg basicSiteConsultGuide"
        />
      </a>
    </div>
  );
};

export default BasicSiteConsultGuide;

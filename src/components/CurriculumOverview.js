import React from "react";
import SiteNavBtns from "./SiteNavBtns";
import { Link } from "react-router-dom";

const CurriculumOverview = () => {
  return (
    <div>
      <SiteNavBtns />
      <Link to="/">
        <img
          src="arrowBack.png"
          title="arrow back home"
          alt="arrow"
          className="resourceImg arrow arrowStyle1"
        />{" "}
      </Link>
      <a href="/lessonsContent/curriculumOverview.pdf" target="_blank">
        <img
          src="/lessonsContent/curriculumOverview.png"
          title="curriculum overview"
          alt="curriculum overview"
          className="resourceImg"
          style={{
            width: "133.5%",
            marginTop: "-4rem",
          }}
        />
      </a>
    </div>
  );
};

export default CurriculumOverview;

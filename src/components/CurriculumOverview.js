import React from "react";
import SiteNavBtns from "./SiteNavBtns";
import { Link } from "react-router-dom";

const CurriculumOverview = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="arrowBack.png"
          title="visit landing page"
          alt="arrow"
          className="resourceImg arrow"
        />{" "}
      </Link>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/curriculumOverview.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/curriculumOverview.png`}
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

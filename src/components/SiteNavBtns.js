import React from "react";
import { Link, useLocation } from "react-router-dom";

const SiteNavBtns = () => {
  const { pathname } = useLocation();

  return (
    <ul className="siteButtonsUl">
      <li className="curriculumOverviewClass">
        <a
          href="/lessonsContent/curriculumOverview.pdf"
          target="_blank"
          className={`siteButtons ${
            pathname.includes("curriculumOverview") ? "activeLink" : ""
          }`}
        >
          curriculum overview
        </a>
      </li>
      <li>
        <Link
          to="/macbasics"
          className={`siteButtons ${
            pathname.includes("macBasics") ? "activeLink" : ""
          }`}
        >
          mac basics
        </Link>
      </li>
      <li>
        <Link
          to="/workflow"
          className={`siteButtons ${
            pathname.includes("workFlow") ? "activeLink" : ""
          }`}
        >
          work flow
        </Link>
      </li>
      <li>
        <Link
          to="/online"
          className={`siteButtons ${
            pathname.includes("online") ? "activeLink" : ""
          }`}
        >
          online
        </Link>
      </li>
      <li>
        <Link
          to="/search"
          className={`siteButtons ${
            pathname.includes("search") ? "activeLink" : ""
          }`}
        >
          search
        </Link>
      </li>
      <li>
        <Link
          to="/codemind"
          className={`siteButtons ${
            pathname.includes("codemind") ? "activeLink" : ""
          }`}
        >
          code mind
        </Link>
      </li>
      <li>
        <Link
          to="/coding"
          className={`siteButtons ${
            pathname.includes("coding") ? "activeLink" : ""
          }`}
        >
          coding
        </Link>
      </li>
      <li>
        <Link
          to="/resources"
          className={`siteButtons ${
            pathname.includes("resources") ? "activeLink" : ""
          }`}
        >
          resources
        </Link>
      </li>
    </ul>
  );
};

export default SiteNavBtns;

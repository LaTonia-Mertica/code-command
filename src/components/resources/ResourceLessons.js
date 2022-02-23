import React from "react";
import { Link, useLocation } from "react-router-dom";

const ResourceLessons = () => {
  const { pathname } = useLocation();

  return (
    <ul className="lessonFocusAreaUL">
      <li
        className={`resourceListItems ${
          pathname.includes("admireTrying") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/admireTrying-noNav">Admire Trying</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("balance") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/balance-noNav">Balance</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("basicSiteConsultGuide") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/basicSiteConsultGuide-noNav">
          Basic Site Consult Guide
        </Link>
      </li>
      <li className="resourceListItems">
        <a href="https://amy.dev/?p=783" target="_blank" rel="noreferrer">
          Coding Interview Style
        </a>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("contentReadyGuide") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/contentReadyGuide-noNav">
          {" "}
          Content Ready Guide
        </Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("cta13") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/cta13-noNav">CTA 13</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("everydayMenu") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/everydayMenu-noNav">Everyday Services Menu</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("imagery") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/imagery-noNav">Imagery</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("prepare") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/prepare-noNav">Prepare Guide</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("selfMotivate") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/selfMotivate-noNav">Self Motivate</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("staticFiles") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/staticFiles-noNav">Static Files Guide</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("technicalQuestions") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/technicalQuestions-noNav">
          Technical Questions
        </Link>
      </li>
    </ul>
  );
};

export default ResourceLessons;

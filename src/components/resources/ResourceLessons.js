import React from "react";
import { Link, useLocation } from "react-router-dom";

const ResourceLessons = () => {
  const { pathname } = useLocation();

  return (
    <ul className="lessonFocusAreaUL">
      {/* <li
        className={`resourceListItems ${
          pathname.includes("curriculumOverview") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/curriculumOverview">Curriculum Overview</Link>
      </li> */}
      {/* <li
        className={`resourceListItems ${
          pathname.includes("admireTrying") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/admireTrying">Admire Trying</Link>
      </li> */}
      <li
        className={`resourceListItems ${
          pathname.includes("admireTrying") ? "activeLink" : ""
        }`}
      >
        <a href="/lessonsContent/admireTrying.pdf" target="_blank">
          Admire Trying
        </a>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("balance") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/balance">Balance</Link>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("basicSiteConsultGuide") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/basicSiteConsultGuide">
          Basic Site Consult Guide
        </Link>
      </li>
      <li className="resourceListItems">
        <a href="https://amy.dev/?p=783" target="_blank" rel="noreferrer">
          Coding Interview Style
        </a>
      </li>
      {/* <li
        className={`resourceListItems ${
          pathname.includes("contentReadyGuide") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/contentReadyGuide"> Content Ready Guide</Link>
      </li>
      */}
      <li
        className={`resourceListItems ${
          pathname.includes("contentReadyGuide") ? "activeLink" : ""
        }`}
      >
        <a href="/lessonsContent/contentReadyGuide.pdf" target="_blank">
          Content Ready Guide
        </a>
      </li>

      <li
        className={`resourceListItems ${
          pathname.includes("cta13") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/cta13">CTA 13</Link>
      </li>
      {/* <li
        className={`resourceListItems ${
          pathname.includes("everydayMenu") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/everydayMenu">Everyday Services Menu</Link>
      </li> */}
      <li
        className={`resourceListItems ${
          pathname.includes("everydayMenu") ? "activeLink" : ""
        }`}
      >
        <a href="/lessonsContent/everydayMenu.pdf" target="_blank">
          Everyday Services Menu
        </a>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("imagery") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/imagery">Imagery</Link>
      </li>
      {/* <li
        className={`resourceListItems ${
          pathname.includes("prepare") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/prepare">Prepare Guide</Link>
      </li> */}
      <li
        className={`resourceListItems ${
          pathname.includes("prepare") ? "activeLink" : ""
        }`}
      >
        <a href="/lessonsContent/prepare.pdf" target="_blank">
          Prepare Guide
        </a>
      </li>
      {/* <li
        className={`resourceListItems ${
          pathname.includes("selfMotivate") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/selfMotivate">Self Motivate</Link>
      </li> */}
      <li
        className={`resourceListItems ${
          pathname.includes("selfMotivate") ? "activeLink" : ""
        }`}
      >
        <a href="/lessonsContent/selfMotivate.pdf" target="_blank">
          Self Motivate
        </a>
      </li>
      <li
        className={`resourceListItems ${
          pathname.includes("staticFiles") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/staticFiles">Static Files Guide</Link>
      </li>
      {/* <li
        className={`resourceListItems ${
          pathname.includes("technicalQuestions") ? "activeLink" : ""
        }`}
      >
        <Link to="/resources/technicalQuestions">Technical Questions</Link>
      </li> */}
      <li
        className={`resourceListItems ${
          pathname.includes("technicalQuestions") ? "activeLink" : ""
        }`}
      >
        <a href="/lessonsContent/techQs.pdf" target="_blank">
          Technical Questions
        </a>
      </li>
    </ul>
  );
};

export default ResourceLessons;

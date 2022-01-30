import React from "react";
import { Link } from "react-router-dom";

const ResourceLessons = () => {
  return (
    <ul>
      <li>
        <Link to="/resources/curriculumOverview">Curriculum Overview</Link>
      </li>
      <li>
        <Link to="/resources/admireTrying">Admire Trying</Link>
      </li>
      <li>
        <Link to="/resources/balance">Balance</Link>
      </li>
      <li>
        <Link to="/resources/basicSiteConsultGuide">
          Basic Site Consult Guide
        </Link>
      </li>
      <li>
        <a href="https://amy.dev/?p=783" target="_blank">
          Coding Interview Style
        </a>
      </li>
      <li>
        <Link to="/resources/contentReadyGuide">Content Ready Guide</Link>
      </li>
      <li>
        <Link to="/resources/cta13">CTA 13</Link>
      </li>
      <li>
        <Link to="/resources/everydayMenu">Everyday Services Menu</Link>
      </li>
      <li>
        <Link to="/resources/imagery">Imagery</Link>
      </li>
      <li>
        <Link to="/resources/prepare">Prepare Guide</Link>
      </li>
      <li>
        <Link to="/resources/selfMotivate">Self Motivate</Link>
      </li>
      <li>
        <Link to="/resources/staticFiles">Static Files Guide</Link>
      </li>
      <li>
        <Link to="/resources/technicalQuestions">Technical Questions</Link>
      </li>
    </ul>
  );
};

export default ResourceLessons;

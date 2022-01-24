import React from "react";
import { Link } from "react-router-dom";

const SiteNavBtns = () => {
  return (
    <ul className="siteButtonsUl">
      <li>
        <Link to="/macbasics" className="siteButtons">
          mac basics
        </Link>
      </li>
      <li>
        <Link to="/workflow" className="siteButtons">
          work flow
        </Link>
      </li>
      <li>
        <Link to="/online" className="siteButtons">
          online
        </Link>
      </li>
      <li>
        <Link to="/search" className="siteButtons">
          search
        </Link>
      </li>
      <li>
        <Link to="/codemind" className="siteButtons">
          code mind
        </Link>
      </li>
      <li>
        <Link to="/coding" className="siteButtons">
          coding
        </Link>
      </li>
      <li>
        <Link to="/resources" className="siteButtons">
          resources
        </Link>
      </li>
    </ul>
  );
};

export default SiteNavBtns;

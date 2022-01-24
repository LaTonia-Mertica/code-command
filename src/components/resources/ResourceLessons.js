import React from "react";
import { Link } from "react-router-dom";

const ResourceLessons = () => {
  return (
    <ul>
      <li>
        <Link to="/resources/prepare">Prepare Guide</Link>
      </li>
      <li>
        <Link to="/resources/technicalQuestions">Technical Questions</Link>
      </li>
    </ul>
  );
};

export default ResourceLessons;

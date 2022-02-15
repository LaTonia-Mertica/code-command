import React from "react";
import { Link } from "react-router-dom";

const WorkFlowLessons = () => {
  return (
    <ul className="lessonFocusAreaUL">
      <li className="workFlowListItems">
        <Link to="/workFlow/PlaceholderVideo">Dummy Video</Link>
      </li>
    </ul>
  );
};
export default WorkFlowLessons;

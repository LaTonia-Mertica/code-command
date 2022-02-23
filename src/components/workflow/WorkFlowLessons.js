import React from "react";
import { Link } from "react-router-dom";

const WorkFlowLessons = () => {
  return (
    <ul className="lessonFocusAreaUL workFlowListItemsUl">
      <li className="workFlowListItems">
        <Link to="/workFlow/WorkFlowResourcePlaceholder-noNav">
          placeholder resource
        </Link>
      </li>
      <li className="workFlowListItems">
        <Link to="/workFlow/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="workFlowListItems">
        <Link to="/workFlow/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="workFlowListItems">
        <Link to="/workFlow/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="workFlowListItems">
        <Link to="/workFlow/PlaceholderVideo">Dummy Video</Link>
      </li>
    </ul>
  );
};
export default WorkFlowLessons;

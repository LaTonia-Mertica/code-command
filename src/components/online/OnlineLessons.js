import React from "react";
import { Link } from "react-router-dom";

const OnlineLessons = () => {
  return (
    <ul className="lessonFocusAreaUL onlineListItemsUl">
      <li className="onlineListItems">
        <Link to="/online/OnlineResourcePlaceholder-noNav">
          placeholder resource
        </Link>
      </li>
      <li className="onlineListItems">
        <Link to="/online/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="onlineListItems">
        <Link to="/online/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="onlineListItems">
        <Link to="/online/PlaceholderVideo">Dummy Video</Link>
      </li>
    </ul>
  );
};
export default OnlineLessons;

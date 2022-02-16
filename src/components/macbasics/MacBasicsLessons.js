import React from "react";
import { Link } from "react-router-dom";

const MacBasicsLessons = () => {
  return (
    <ul className="lessonFocusAreaUL">
      <li className="macBasicsListItems">
        <Link to="/macBasics/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/PlaceholderVideo">Dummy Video</Link>
      </li>
    </ul>
  );
};
export default MacBasicsLessons;

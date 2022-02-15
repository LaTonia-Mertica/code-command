import React from "react";
import { Link } from "react-router-dom";

const CodingLessons = () => {
  return (
    <ul className="lessonFocusAreaUL">
      <li className="codingListItems">
        <Link to="/coding/PlaceholderVideo">Dummy Video</Link>
      </li>
    </ul>
  );
};
export default CodingLessons;

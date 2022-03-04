import React from "react";
import { Link } from "react-router-dom";

const CodingLessons = () => {
  return (
    <ul className="lessonFocusAreaUL codingListItemsUl">
      <li className="codingListItems">
        <Link to="/coding/CodingResourcePlaceholder-noNav">
          resource placeholder
        </Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/JsForLoop-noNav">Javascript For Loop</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/PlaceholderVideo">Dummy Video</Link>
      </li>
    </ul>
  );
};
export default CodingLessons;

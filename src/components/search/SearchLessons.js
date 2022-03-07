import React from "react";
import { Link } from "react-router-dom";

const SearchLessons = () => {
  return (
    <ul className="lessonFocusAreaUL searchListItemsUl">
      <li className="searchListItems">
        <Link to="/search/SearchResourcePlaceholder-noNav">
          resource placeholder
        </Link>
      </li>
      <li className="searchListItems">
        <Link to="/search/CodeCommenting-noNav">comment in code</Link>
      </li>
      <li className="searchListItems">
        <Link to="/search/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="searchListItems">
        <Link to="/search/StackOverflowEtc-noNav">
          stack overflow/trusted sites
        </Link>
      </li>
    </ul>
  );
};
export default SearchLessons;

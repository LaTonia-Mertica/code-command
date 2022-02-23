import React from "react";
import { Link } from "react-router-dom";

const SearchLessons = () => {
  return (
    <ul className="lessonFocusAreaUL searchListItemsUl">
      <li className="searchListItems">
        <Link to="/search/SearchResourcePlaceholder-noNav">
          placeholder resource
        </Link>
      </li>
      <li className="searchListItems">
        <Link to="/search/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="searchListItems">
        <Link to="/search/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="searchListItems">
        <Link to="/search/PlaceholderVideo">Dummy Video</Link>
      </li>
    </ul>
  );
};
export default SearchLessons;

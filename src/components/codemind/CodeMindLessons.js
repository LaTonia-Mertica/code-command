import React from "react";
import { Link } from "react-router-dom";

const CodeMindLessons = () => {
  return (
    <ul className="lessonFocusAreaUL">
      <li className="codeMindListItems">
        <Link to="/codemind/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="codeMindListItems">
        <Link to="/codemind/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="codeMindListItems">
        <Link to="/codemind/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="codeMindListItems">
        <Link to="/codemind/PlaceholderVideo">Dummy Video</Link>
      </li>
      <li className="codeMindListItems">
        <Link to="/codemind/PlaceholderVideo">Dummy Video</Link>
      </li>
    </ul>
  );
};

export default CodeMindLessons;

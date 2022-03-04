import React from "react";
import { Link } from "react-router-dom";

const MacBasicsLessons = () => {
  return (
    <ul className="lessonFocusAreaUL macBasicsListItemsUl">
      <li className="macBasicsListItems">
        <Link to="/macBasics/MacBasicsResourcePlaceholder-noNav">
          resource placeholder
        </Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/AboutMac-noNav">about mac</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/CustomizeMac-noNav">customize mac</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/CustomizeMacViaRightClick-noNav">
          customize mac via right click
        </Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/OpenTextEdit-noNav">open text edit</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/FileFolderDelete-noNav">file folder delete</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/SaveFolderInDocs-noNav">save folder in docs</Link>
      </li>
      <li className="macBasicsListItems">
        <Link to="/macBasics/AddAppToDock-noNav">add app to dock</Link>
      </li>
    </ul>
  );
};
export default MacBasicsLessons;

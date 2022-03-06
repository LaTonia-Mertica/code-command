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
        <Link to="/coding/ConsoleLog-noNav">console log</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/SetupHtmlFile-noNav">setup html file</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/LinkCssToHtml-noNav">link css to html</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/NewScriptBoilerplateHtml-noNav">
          boilerplate html script
        </Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/RunHtmlWithCssInBrowser-noNav">
          run html/css in browser
        </Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/InspectTool-noNav">chrome inspect tool</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/NodeScriptRun-noNav">run script with node</Link>
      </li>
      <li className="codingListItems">
        <Link to="/coding/JsForLoop-noNav">javascript for loop</Link>
      </li>
    </ul>
  );
};
export default CodingLessons;

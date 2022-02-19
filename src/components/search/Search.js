import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavBtns from "../SiteNavBtns";
import SearchLessons from "./SearchLessons";
import "./searchStyles.css";

const Search = () => {
  return (
    <div className="Search">
      <SiteNavBtns />
      <SearchLessons />

      {/* <h1 id="searchTitle">search</h1> */}
      {/* <h2 id="searchTagline">implement best effort to get answers</h2> */}
      <Outlet />
    </div>
  );
};

export default Search;

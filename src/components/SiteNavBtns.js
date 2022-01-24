import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SiteNavBtns extends Component {
  render() {
    return (
      <div className="SiteNavBtns">
        <div class="siteButtonsDiv">
          <Link to="/macbasics">
            <h1 class="siteButtons">mac basics</h1>
          </Link>
          <Link to="/workflow">
            <h1 class="siteButtons">work flow</h1>
          </Link>
          <Link to="/online">
            <h1 class="siteButtons">online</h1>
          </Link>
          <Link to="/search">
            <h1 class="siteButtons">search</h1>
          </Link>
          <Link to="/codemind">
            <h1 class="siteButtons">code mind</h1>
          </Link>
          <Link to="/coding">
            <h1 class="siteButtons">coding</h1>
          </Link>
          <Link to="/resources">
            <h1 class="siteButtons">resources</h1>
          </Link>
        </div>
      </div>
    );
  }
}

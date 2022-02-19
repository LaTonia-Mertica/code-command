import React from "react";
import globe from "./images/globe.png";
import share from "./images/share.png";

const Nav = () => {
  return (
    <div className="Nav codingNav">
      <nav>
        <a href="/">
          <h1 id="codeCommTitle">code command</h1>
        </a>
        <a href="/">
          <h2 id="codeCommTagline">visualize coding, prepare to code, code</h2>
        </a>

        <img src={globe} alt="Globe Icon" className="socialIcons" id="globe" />
        <img src={share} alt="Share Icon" className="socialIcons" id="share" />
      </nav>
    </div>
  );
};

export default Nav;

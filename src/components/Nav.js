import React from "react";
import globe from "./images/globe.png";
import share from "./images/share.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav codingNav">
      <nav>
        <Link to="/">
          <h1 id="codeCommTitle">code command</h1>
        </Link>
        <Link to="/">
          <h2 id="codeCommTagline">visualize coding, prepare to code, code</h2>
        </Link>

        <a
          href="https://www.latoniamertica.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={globe}
            alt="Globe Icon"
            className="socialIcons"
            id="globe"
            title="latoniamertica.dev"
          />
        </a>

        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.latoniamertica.dev/code-command/#/"
          target="_blank"
          title="share code command on linkedin"
        >
          <img
            src={share}
            alt="Share Icon"
            className="socialIcons"
            id="share"
          />
        </a>
      </nav>
    </div>
  );
};

export default Nav;

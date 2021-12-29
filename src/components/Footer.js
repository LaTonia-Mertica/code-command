import React from "react";

import lmdotdevlogo from "./images/lmdotdevlogo.png";
import pptrello from "./images/pptrello.png";
import LaToniaMerticaResume from "./images/LaToniaMerticaResume.pdf";


class Footer extends React.Component {
    render() {
    return (
        <footer class="container-fluid">
        
        <p id="resume" class="center">
        <button id="resumeBtn" title="resume pdf">
        <a href={LaToniaMerticaResume} id="resumeFile"
        target="_blank" 
        rel="noreferrer"
        >access resume</a
        >
        </button>
        </p>
        <br />

        <div class="center" id="footer-details">
        <div id="lmdev-logo">
        <a href="https://www.latoniamertica.dev/"
        target="_blank"
        rel="noreferrer">
        <img
        class="mx-auto d-block"
        src={lmdotdevlogo}
        alt="La'Tonia Mertica dot dev logo"
        />
        </a>
        </div>
        </div>
        <br />
        
        <div class="center">
        <a
        href="https://trello.com/invite/b/Ehbs3lnX/cf3b0ddd0a78b4d8650a2272978424e3/passion-project"
        target="_blank" 
        rel="noreferrer"
        >
        <img
        src={pptrello}
        alt="Trello Passion Project Board Scan Icon"
        title="TRELLO"
        target="_blank"
        rel="noreferrer"
        id="trelloBoardScan"/>
        </a>
        </div>

        <div>
        <h3 class="center">
        <span class="notbold">
        <span id="firstNameInFooter">©La'Tonia Mertica</span><br />
        <p class="notbold pronunciation">
        luh tone yuh merr treece
        </p>
        
        {/* <br />
        Founder & Executive Officer<br />
        PUBLICLY ANONYMOUS, LLC<br />
        ©2019-2022 La'Tonia Mertica 'Comms & Creas
        Spec'<br />
        All Rights Reserved<br />
        <br />
        2200 South Salina Street #684<br />
        Syracuse, New York 13205<br />
        <a
        href="mailto: designs@latoniamertica.com"
        id="bizEmail"
        target="_blank" 
        rel="noreferrer"
        >designs@latoniamertica.com</a
        > */}
        </span>
        </h3>
        </div>
       </footer>
    ); 
  } 
};

export default Footer;



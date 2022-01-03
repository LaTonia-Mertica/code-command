import React from "react";
import Glitch from './videos/Glitch.mp4'
import Footer from './Footer';


class NotFound extends React.Component {
    render() {
        return (
            <div>
            <div className="div404"><span className="four04 first4">4</span><span className="four04 only0">0</span><span className="four04 second4">4</span></div>

            <h1 class="notFoundPgText">Nothing Here But Code Hopefuls</h1>
            <p class="bottomLine">click around below for interesting extras or click title to return home</p>
           
            <video src={Glitch} controls="controls" autoPlay loop muted class="notFoundPageVideo" />
            <Footer />
            </div>
        )   
    };
};

export default NotFound;




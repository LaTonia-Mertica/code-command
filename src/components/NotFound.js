import React from "react";
import Glitch from './videos/Glitch.mp4'
import Footer from './Footer';


class NotFound extends React.Component {
    render() {
        return (
            <div>
            <h1 class="notFoundPgText">Nothing Here But Code Hopefuls</h1>
            <p class="bottomLine">click around below for interesting extras or click title to return home</p>
            <video src={Glitch} controls="controls" autoPlay loop muted class="notFoundPageVideo" />
            <Footer />
            </div>
        )   
    };
};

export default NotFound;




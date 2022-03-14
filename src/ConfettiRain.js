import React from "react";
import { Link } from "react-router-dom";
import ConfettiRainToss from "./ConfettiRainToss";

const ConfettiRain = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/arrowBack.png`}
          title="visit landing page"
          alt="arrow"
          className="resourceImg arrow arrowInConfetti"
        />
      </Link>
      <ConfettiRainToss />
    </div>
  );
};
export default ConfettiRain;

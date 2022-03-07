import React from "react";

const BreakDownChallenge = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/breakDownChallenge.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="breakDownChallenge"
      />
    </div>
  );
};

export default BreakDownChallenge;

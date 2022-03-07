import React from "react";

const StackOverflowEtc = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/stackOverflowEtc.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="stackOverflowEtc"
      />
    </div>
  );
};

export default StackOverflowEtc;

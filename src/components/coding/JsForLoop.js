import React from "react";

const JsForLoop = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/jsForLoop.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="jsForLoop"
      />
    </div>
  );
};

export default JsForLoop;

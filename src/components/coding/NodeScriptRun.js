import React from "react";

const NodeScriptRun = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/nodeScriptRun.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="nodeScriptRun"
      />
    </div>
  );
};

export default NodeScriptRun;

import React from "react";

const InspectTool = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/inspectTool.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="inspectTool"
      />
    </div>
  );
};

export default InspectTool;

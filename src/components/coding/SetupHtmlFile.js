import React from "react";

const SetupHtmlFile = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/setupHtmlFile.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="setupHtmlFile"
      />
    </div>
  );
};

export default SetupHtmlFile;

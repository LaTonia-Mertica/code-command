import React from "react";

const ConsoleLog = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/consoleLog.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="consoleLog"
      />
    </div>
  );
};

export default ConsoleLog;

import React from "react";

const RunHtmlWithCssInBrowser = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/runHtmlWithCssInBrowser.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="runHtmlWithCssInBrowser"
      />
    </div>
  );
};

export default RunHtmlWithCssInBrowser;

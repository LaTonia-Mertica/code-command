import React from "react";

const LinkCssToHtml = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/linkCssToHtml.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="linkCssToHtml"
      />
    </div>
  );
};

export default LinkCssToHtml;

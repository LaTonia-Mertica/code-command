import React from "react";

const CodeCommenting = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/codeCommenting.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="codeCommenting"
      />
    </div>
  );
};

export default CodeCommenting;

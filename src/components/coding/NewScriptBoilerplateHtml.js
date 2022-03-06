import React from "react";

const NewScriptBoilerplateHtml = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/newScriptBoilerplateHtml.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="newScriptBoilerplateHtml"
      />
    </div>
  );
};

export default NewScriptBoilerplateHtml;

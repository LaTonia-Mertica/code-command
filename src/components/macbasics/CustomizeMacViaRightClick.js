import React from "react";

const CustomizeMacViaRightClick = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/customizeMacViaRightClick.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="customizeMacViaRightClick"
      />
    </div>
  );
};

export default CustomizeMacViaRightClick;

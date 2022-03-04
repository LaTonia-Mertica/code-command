import React from "react";

const CustomizeMac = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/customizeMac.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="customizeMac"
      />
    </div>
  );
};

export default CustomizeMac;

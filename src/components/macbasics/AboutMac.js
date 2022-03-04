import React from "react";

const AboutMac = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/aboutMac.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="aboutMac"
      />
    </div>
  );
};

export default AboutMac;

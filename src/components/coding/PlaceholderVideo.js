import React from "react";

const PlaceholderVideo = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/PlaceholderVideo.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="placeholderVideo"
      />
    </div>
  );
};

export default PlaceholderVideo;

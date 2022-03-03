import React from "react";

const OnlineResourcePlaceHolder = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/onlineResourcePlaceHolder.pdf`}
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/onlineResourcePlaceholder.png`}
          title="online resource placeholder poster"
          alt="online resource"
          className="resourceImg onlinePlaceholderImg"
        />
      </a>
    </div>
  );
};

export default OnlineResourcePlaceHolder;

import React from "react";

const MacBasicsResourcePlaceHolder = () => {
  return (
    <div>
      <a
        href="/lessonsContent/macBasicsResourcePlaceHolder.pdf"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/macBasicsResourcePlaceholder.png`}
          title="mac basics resource placeholder poster"
          alt="mac basics resource"
          className="resourceImg macBasicsPlaceholderImg"
        />
      </a>
    </div>
  );
};

export default MacBasicsResourcePlaceHolder;

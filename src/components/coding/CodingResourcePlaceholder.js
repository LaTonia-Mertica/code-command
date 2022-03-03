import React from "react";

const CodingResourcePlaceHolder = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/codingResourcePlaceHolder.pdf`}
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/codingResourcePlaceholder.png`}
          title="coding resource placeholder poster"
          alt="coding resource"
          className="resourceImg codingPlaceholderImg"
        />
      </a>
    </div>
  );
};

export default CodingResourcePlaceHolder;

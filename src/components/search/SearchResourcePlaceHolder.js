import React from "react";

const SearchResourcePlaceHolder = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/searchResourcePlaceHolder.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/searchResourcePlaceHolder.png`}
          title="search resource placeholder"
          alt="search resource"
          className="resourceImg searchPlaceholderImg"
        />
      </a>
    </div>
  );
};

export default SearchResourcePlaceHolder;

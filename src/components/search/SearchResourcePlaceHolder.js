import React from "react";

const SearchResourcePlaceHolder = () => {
  return (
    <div>
      <a href="/lessonsContent/searchResourcePlaceHolder.pdf" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/searchResourcePlaceHolder.png`}
          title="search resource placeholder poster"
          alt="search resource"
          className="resourceImg searchPlaceholderImg"
        />
      </a>
    </div>
  );
};

export default SearchResourcePlaceHolder;

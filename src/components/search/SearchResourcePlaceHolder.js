import React from "react";

const SearchResourcePlaceholder = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/searchResourcePlaceholder.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/searchResourcePlaceholder.png`}
          title="search resource placeholder"
          alt="search resource"
          className="resourceImg searchPlaceholderImg"
        />
      </a>
    </div>
  );
};

export default SearchResourcePlaceholder;

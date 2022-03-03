import React from "react";

const CodeMindResourcePlaceHolder = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/codeMindResourcePlaceHolder.pdf`}
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/codeMindResourcePlaceholder.png`}
          title="code mind resource placeholder poster"
          alt="code mind resource"
          className="resourceImg codeMindPlaceholderImg"
        />
      </a>
    </div>
  );
};

export default CodeMindResourcePlaceHolder;

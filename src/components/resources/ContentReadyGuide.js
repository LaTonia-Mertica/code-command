import React from "react";

const ContentReadyGuide = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/contentReadyGuide.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/contentReadyGuide.png`}
          title="content ready guide"
          alt="content ready guide"
          className="resourceImg"
          style={{ width: "137%", marginTop: "-20rem" }}
        />
      </a>
    </div>
  );
};

export default ContentReadyGuide;

import React from "react";

const TechnicalQuestions = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/techQs.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/techQs.png`}
          title="technical questions quide"
          alt="technical questions guide"
          className="resourceImg"
        />
      </a>
    </div>
  );
};

export default TechnicalQuestions;

import React from "react";

const WorkFlowResourcePlaceholder = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/WorkFlowResourcePlaceholder.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}lessonsContent/WorkFlowResourcePlaceholderPoster.png`}
          title="work flow resource placeholder"
          alt="work flow resource"
          className="resourceImg workFlowPlaceholderImg"
        />
      </a>
    </div>
  );
};

export default WorkFlowResourcePlaceholder;

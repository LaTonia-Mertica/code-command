import React from "react";

const WorkFlowResourcePlaceholder = () => {
  return (
    <div>
      <a href="/lessonsContent/WorkFlowResourcePlaceholder.pdf" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/WorkFlowResourcePlaceholder.png`}
          title="work flow resource placeholder poster"
          alt="work flow resource"
          className="resourceImg workFlowPlaceholderImg"
        />
      </a>
    </div>
  );
};

export default WorkFlowResourcePlaceholder;

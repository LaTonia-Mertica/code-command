import React from "react";

const CurriculumOverview = () => {
  return (
    <div className="aspect-ratio">
      <iframe
        src="/lessonsContent/curriculumOverview.pdf"
        frameborder="0"
        width="550"
        height="275"
        allowfullscreen
        title="curriculum overview"
      />
    </div>
  );
};

export default CurriculumOverview;

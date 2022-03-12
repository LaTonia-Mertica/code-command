import React from "react";

const SelfAssessmentChecklist = () => {
  return (
    <div>
      {/* <a href="/lessonsContent/selfAssessmentChecklist.pdf" target="_blank"> */}
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/selfAssessmentChecklist.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/selfAssessmentChecklist1.png`}
          title="self assessment checklist"
          alt="self assessment checklist"
          className="resourceImg selfAssessmentChecklist"
          target="_blank"
        />
      </a>
    </div>
  );
};

export default SelfAssessmentChecklist;

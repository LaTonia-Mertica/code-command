import React from "react";

const SelfMotivate = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/selfMotivate.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/selfMotivate.png`}
          title="self motivate poster"
          alt="self motivate"
          className="resourceImg"
        />
      </a>
    </div>
  );
};

export default SelfMotivate;

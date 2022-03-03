import React from "react";

const Cta13 = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/cta13.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/cta13.png`}
          title="cta 13 poster"
          alt="cta 13"
          className="resourceImg cta13"
        />
      </a>
    </div>
  );
};

export default Cta13;

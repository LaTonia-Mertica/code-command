import React from "react";

const Imagery = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/imagery.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/imagery.png`}
          title="imagery poster"
          alt="imagery"
          className="resourceImg imagery"
        />
      </a>
    </div>
  );
};

export default Imagery;

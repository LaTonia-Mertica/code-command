import React from "react";

const Prepare = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/prepare.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/prepare.png`}
          title="prepare guide"
          alt="prepare"
          className="resourceImg"
          style={{ width: "133.5%", marginTop: "-.25rem" }}
        />
      </a>
    </div>
  );
};

export default Prepare;

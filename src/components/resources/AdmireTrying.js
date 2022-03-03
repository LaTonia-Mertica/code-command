import React from "react";

const AdmireTrying = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/admireTrying.pdf`}
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/admireTrying.png`}
          title="admire trying poster"
          alt="admire trying"
          className="resourceImg"
        />
      </a>
    </div>
  );
};

export default AdmireTrying;

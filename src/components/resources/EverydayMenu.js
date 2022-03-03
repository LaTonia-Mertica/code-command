import React from "react";

const EverydayMenu = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/everydayMenu.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/everydayMenu1.png`}
          title="everyday menu poster"
          alt="everyday menu"
          className="resourceImg everydayMenu"
        />
      </a>
    </div>
  );
};

export default EverydayMenu;

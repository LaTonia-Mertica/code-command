import React from "react";

const Balance = () => {
  return (
    <div>
      <a
        href={`${process.env.PUBLIC_URL}/lessonsContent/balance.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/lessonsContent/balance.png`}
          title="balance poster"
          alt="balance"
          className="resourceImg balance"
        />
      </a>
    </div>
  );
};

export default Balance;

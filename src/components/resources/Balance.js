import React from "react";

const Balance = () => {
  return (
    <div>
      <a href="/lessonsContent/balance.pdf" target="_blank">
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

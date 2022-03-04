import React from "react";

const OpenTextEdit = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/openTextEdit.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="openTextEdit"
      />
    </div>
  );
};

export default OpenTextEdit;

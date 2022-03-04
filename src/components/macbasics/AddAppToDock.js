import React from "react";

const AddAppToDock = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/addAppToDock.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="addAppToDock"
      />
    </div>
  );
};

export default AddAppToDock;

import React from "react";

const SaveFolderInDocs = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/saveFolderInDocs.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="saveFolderInDocs"
      />
    </div>
  );
};

export default SaveFolderInDocs;

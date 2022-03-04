import React from "react";

const FileFolderDelete = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/lessonsContent/fileFolderDelete.mp4`}
        controls="controls"
        autoPlay
        loop
        muted
        className="fileFolderDelete"
      />
    </div>
  );
};

export default FileFolderDelete;

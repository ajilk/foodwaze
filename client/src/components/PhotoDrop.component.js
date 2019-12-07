import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdAdd } from 'react-icons/md';

const PhotoDrop = () => {
  const maxSize = 5242880;
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, []);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    rejectedFiles,
    isMultiple,
  } = useDropzone({ onDrop, accept: 'image/jpg, image/jpeg', minSize: 0, maxSize, multiple: false });

  const isTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  return (
    <div className="container text-center mt-5">
      <div className="card">
        <div className="card-body">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive && <><MdAdd /> Upload Photo</>}
            {isDragActive && !isDragReject && 'Drop'}
            {isDragReject && 'Inavlid Type'}
            {isTooLarge && <div className="text-danger">Photo Too Large</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhotoDrop;
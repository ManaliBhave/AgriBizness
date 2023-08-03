// import React from 'react';
// import Uploader from './Components/Uploader';
// import './App.css';
// function Uploader(){
//     return (
//         <div>Uploader</div>
//         );
// }
// export default Uploader;
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 2px dashed #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
  height: 300px;
  width: 300px;
  border-radius: 8px;

  &:hover {
    border-color: #777;
  }
`;

const ImageUpload = ({ onImageUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
          onImageUpload(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop,
  });

  return (
    <UploadContainer {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop an image here, or click to select an image</p>
    </UploadContainer>
  );
};

export default ImageUpload;

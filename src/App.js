import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Prueba from './components/Prueba';

function App() {

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  // const updateUploadedFiles = (files) =>
  //   setNewUserInfo({ ...newUserInfo, profileImages: files });

  return (
    <div className='App'>
      {/* <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Profile Image(s)"
          multiple
          // updateFilesCb={updateUploadedFiles}
        /> */}
      <Prueba />
    </div>
  );
}

export default App;
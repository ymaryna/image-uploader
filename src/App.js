import React, { useState } from 'react';
import FileUpload from './components/FileUpload';

function App() {

  return (
    <div className='App'>
      <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Image"
        />
    </div>
  );
}

export default App;
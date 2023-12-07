import React, { useState, useEffect } from 'react';
import Upload from './pages/Upload';
import Home from './pages/Home';
import Overview from './pages/Overview';
import './styles/general.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  // eslint-disable-next-line no-unused-vars 
  // const [result, setResult] = useState(null);

  const addFile = (file) => {
    setFileData(fileData => [...fileData, file])
  }

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const checkForDuplicate = (data) => {
    // Assuming fileData is a state variable
    const isDuplicate = fileData.some((item) => item.filename === data.filename);

    return isDuplicate;
  };

  const handlePytestClick = async () => {
    try {
      const response = await fetch('api/report', {
        method: 'POST',
      })
      const data = await response.json();
      window.location.href = './report.html'
      console.log('Pytest run successfully', data)
    } catch (error) {
      console.error('Pytest run failed', error)
    }
  };

  const handleRemoveClick = async (filename, fileIndex) => {
    try {
      const response = await fetch('api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to remove file');
      }

      const temp = [...fileData];
      temp.splice(fileIndex, 1);
      setFileData(temp);

      const data = await response.json();
      console.log('File Removed successfully:', data);
    } catch (error) {
      console.error('Remove file failed', error);
    }
  };

  const handleUpload = async () => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      try {
        // Send the file to the server
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        console.log('File uploaded successfully:', data);
        if (!checkForDuplicate(data)) {
          addFile(data);
          console.log('File Data:', fileData);
          handleNavigation('overview');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="container">
        <nav>
          <ul className="navigation">
            <li onClick={() => handleNavigation('home')}>Home</li >
            <li onClick={() => handleNavigation('upload')}>Upload</li>
            <li onClick={() => handleNavigation('overview')}>Overview</li>
            <li><a href="./report.html" target="_blank" rel="noopener noreferrer">
              Report
            </a></li>
          </ul >
        </nav >

        <div className="content">
          {currentPage === 'home' && <Home />}
          {currentPage === 'upload' && <Upload handleFileUpload={handleFileUpload} handleUpload={handleUpload} />}
          {currentPage === 'overview' && <Overview data={fileData} pytestbutton={handlePytestClick} removebutton={handleRemoveClick} />}
          {/* {currentPage === 'result' && <Report data={result} />} */}
        </div>
      </div >
    </>
  )
}

export default App;
import React, { useState, useEffect } from 'react';
import Upload from './pages/Upload';
import Home from './pages/Home';
import Overview from './pages/Overview';
import './style/general.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileData, setFileData] = useState({});
  // eslint-disable-next-line no-unused-vars 
  const [result, setResult] = useState([]);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handlePytestClick = () => {
    // Add logic for Pytest button click
  };

  const handleRemoveClick = () => {
    // Add logic for Remove button click
  };

  const handleUpload = () => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      // Send the file to the server
      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('File uploaded successfully:', data);
          setFileData(data);
        })
        .catch(error => console.error('Error uploading file:', error));
    }
  };

  const fetchResult = () => {
    fetch("/result")
      .then(res => res.json())
      .then(data => {
        setResult(data)
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        // Handle errors as needed
      });
  };


  useEffect(() => {
    // Call fetchReport when the component mounts
    fetchResult();
    console.log('File data: ', fileData);
    handleNavigation('overview');
  }, [fileData]);

  return (
    <div className="container">
      <nav>
        <ul className="navigation">
          <li onClick={() => handleNavigation('home')}>Home</li>
          <li onClick={() => handleNavigation('upload')}>Upload</li>
          <li onClick={() => handleNavigation('overview')}>Overview</li>
          <li onClick={() => handleNavigation('result')}>Result</li>
        </ul>
      </nav>

      <div className="content">
        {currentPage === 'home' && <Home />}
        {currentPage === 'upload' && <Upload handleFileUpload={handleFileUpload} handleUpload={handleUpload} />}
        {currentPage === 'overview' && <Overview file={fileData} pytestbutton={handlePytestClick} removebutton={handleRemoveClick} />}
        {currentPage === 'result' && <Home />}
      </div>
    </div>
  )
}

export default App;
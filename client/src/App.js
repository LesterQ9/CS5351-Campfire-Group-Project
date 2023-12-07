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
    setFileData([])
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
        setFileData(data);
        console.log('File Data:', fileData);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };


  // const fetchResult = () => {
  //   fetch("/result")
  //     .then(res => res.json())
  //     .then(data => {
  //       setResult(data)
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //       // Handle errors as needed
  //     });
  // };

  // const fetchReport = () => {
  //   fetch("/report")
  //     .then(res => res.json())
  //     .then(data => {
  //       setResult(data)
  //       console.log("File Data: ", data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //       // Handle errors as needed
  //     });
  // }


  useEffect(() => {
    // Call fetchReport when the component mounts
    // fetchResult();
    // fetchReport();
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
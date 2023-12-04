// FileUpload.js
import React, { useState } from 'react';

function FileUpload({ onFileChange }) {
    // eslint-disable-next-line no-unused-vars 
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        onFileChange(file); // Pass the selected file to the parent component
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default FileUpload;
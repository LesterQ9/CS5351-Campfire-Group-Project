import React from "react";
import FileUpload from "../components/FileUpload";

const styles = {
    container: {
        marginTop: '50px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        marginBottom: '20px',
        color: '#333',
    },
    uploadButton: {
        display: 'block',
        margin: '20px auto',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
    },
};

function Upload({ handleFileUpload, handleUpload }) {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>File Upload Page</h2>
            <FileUpload onFileChange={handleFileUpload} />
            <button style={styles.uploadButton} onClick={handleUpload}>
                Upload File
            </button>
        </div>
    );
}

export default Upload;

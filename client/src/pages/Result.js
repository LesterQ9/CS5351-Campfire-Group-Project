import React from 'react';

const Results = ({ testResults }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Pytest Test Results</h2>
            <ul style={styles.resultsList}>
                {testResults.map((test, index) => (
                    <li key={index} style={styles.testItem}>
                        <h3 style={styles.testName}>{test.fullName}</h3>
                        <p>Status: {test.status}</p>
                        <p>Start Time: {test.start}</p>
                        <p>Stop Time: {test.stop}</p>
                        <p>UUID: {test.uuid}</p>
                        <p>Labels:</p>
                        <ul style={styles.labelsList}>
                            {test.labels.map((label, labelIndex) => (
                                <li key={labelIndex} style={styles.labelItem}>
                                    {label.name}: {label.value}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        color: '#333',
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
    },
    resultsList: {
        listStyle: 'none',
        padding: 0,
    },
    testItem: {
        margin: '20px 0',
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    testName: {
        color: '#007bff',
    },
    labelsList: {
        listStyle: 'none',
        padding: 0,
        marginTop: '10px',
    },
    labelItem: {
        color: '#555',
        fontSize: '14px',
        marginTop: '5px',
    },
};

export default Results;

import React from "react";
import '../style/general.css'

const styles = {
    heading: {
        color: '#333',
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
    },
}

function Overview({ data, pytestbutton, removebutton }) {
    console.log(data)
    return (
        <div className="overview-container">
            <h2 style={styles.heading}>Pytest Overview</h2>
            {!data ? (
                <p>No file uploaded</p>
            ) : (
                <>
                    <>
                        <h2>{data.filename}</h2>
                        {data.contents.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                        <div className="button-container">
                            <button onClick={pytestbutton} className="action-button">
                                Pytest
                            </button>
                            <button onClick={removebutton} className="action-button">
                                Remove
                            </button>
                        </div>
                    </>
                </>
            )}
        </div>
    );
}

export default Overview;

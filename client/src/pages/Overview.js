import React from "react";
import '../styles/general.css'

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
            {!data || typeof data === 'undefined' || data.length === 0 ? (
                <p>No file uploaded</p>
            ) : (
                <>
                    {data.map((item, itemIndex) => (
                        <div key={itemIndex}>
                            <h2>{item.filename}</h2>
                            {item.contents.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                            < div className="button-container" >
                                <button onClick={() => removebutton(item.filename, itemIndex)} className="action-button">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    < div className="button-container" >
                        <button onClick={() => pytestbutton()} className="action-button">
                            Pytest
                        </button>
                    </div>

                </>
            )}
        </div>
    );
}

export default Overview;

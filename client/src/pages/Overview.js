import React from "react";
import '../style/general.css'

function Overview({ data, pytestbutton, removebutton }) {
    return (
        <div className="overview-container">
            {typeof data === 'undefined' ? (
                <p>No file uploaded</p>
            ) : (
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
            )}
        </div>
    );
}

export default Overview;

import React from "react";

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#007bff',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
};

function Home() {
    return (
        <div style={styles.container}>
            <div>
                <h2 style={styles.heading}>Campfire Group Project: Pytest Visualization</h2>
                <p>Welcome to our project showcasing pytest visualization. Explore the features and insights generated from the pytest reports.</p>
            </div>
        </div>
    );
}

export default Home;

import React, { useState } from 'react';

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '300px',
    },
    heading: {
        color: '#333',
    },
    label: {
        display: 'block',
        margin: '10px 0 5px',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '8px',
        margin: '5px 0 15px',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#4caf50',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
    errorMessage: {
        color: '#f00',
        margin: '5px 0',
    },
    successMessage: {
        color: '#4caf50',
    },
};


const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [Message, setMessage] = useState('');

    const handleLogin = () => {

        setUsernameError('');
        setPasswordError('');

        if (username === 'user1' && password === '1234') {
            setMessage('Login successful!');
            onLogin(username);
        } else {
            if (username !== 'user1') {
                setUsernameError('Incorrect username');
            }

            if (password !== '1234') {
                setPasswordError('Incorrect password');
            }
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Connexion</h2>
                <label style={styles.label}>L'identifiant</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                {usernameError && <p style={styles.errorMessage}>{usernameError}</p>}

                <label style={styles.label}>Mot de passe</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                {passwordError && <p style={styles.errorMessage}>{passwordError}</p>}

                <button onClick={handleLogin} style={styles.button}>
                    Se connecter
                </button>

                {Message && <p style={styles.successMessage}>{Message}</p>}
            </div>
        </div>
    );
};

const HomePage = ({ username }) => (
    <div style={styles.body}>
        <div style={styles.container}>
            <h2 style={styles.heading}>Accueil</h2>
            <p style={{ color: '#586069' }}>Bonjour {username}</p>
        </div>
    </div>
);

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (username) => {
        setLoggedInUser(username);
    };

    return (
        <div>
            {loggedInUser ? (
                <HomePage username={loggedInUser} />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;

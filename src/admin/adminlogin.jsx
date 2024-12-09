

import React, { useState } from 'react';
import './adminlogin.css';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
    const [admin, setAdmin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate= useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (admin === 'admin' && password === '1234') {
            navigate("/admin")
            alert('Login successful!');

        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="admina">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="forma">
                    <label>Admin:</label>
                    <input
                        type="text"
                        value={admin}
                        onChange={(e) => setAdmin(e.target.value)}
                        required
                    />
                </div>
                <div className="forma">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className='bu'>Login</button>
            </form>
        </div>
    );
};

export default Adminlogin;

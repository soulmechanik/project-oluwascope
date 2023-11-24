import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import '../Signin.css'
import axios from 'axios'


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users'); // Assuming your server is running on this URL
            const users = response.data;

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                setError('');
                console.log("Logged in");
                window.location.replace('/dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('An error occurred while fetching user data');
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input value={email}
                       onChange={e => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password}
                       onChange={e => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="button" onClick={handleLogin}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
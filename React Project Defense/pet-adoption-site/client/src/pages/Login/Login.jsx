import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">
                            <i className="fas fa-envelope"></i> Email
                        </label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            <i className="fas fa-lock"></i> Password
                        </label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                    <div className="form-footer">
                        <a href="#">Forgot Password?</a>
                        <Link to ='/register'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

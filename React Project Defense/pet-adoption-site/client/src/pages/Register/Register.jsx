import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">
                            <i className="fas fa-user"></i> Name
                        </label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
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
                    <div className="input-group">
                        <label htmlFor="confirm-password">
                            <i className="fas fa-lock"></i> Confirm Password
                        </label>
                        <input type="password" id="confirm-password" placeholder="Confirm your password" required />
                    </div>
                    <button type="submit">Register</button>
                    <div className="form-footer">
                        <Link to='/login'>Already have an account? Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;

import React, { useState } from 'react';

import './assets/RegistrationPage.css'

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { registerUser } from './redux/dataActions';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Perform registration logic
    // ...

    // Clear the form inputs after registration
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});

    dispatch(registerUser(email, password));
    navigate('/login');
  };

  const isValidEmail = (value) => {
    // Basic email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

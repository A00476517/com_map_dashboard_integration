import React, { useState } from 'react';
import './Navbar/style.css'; // Importing CSS file


const Detail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '') {
            setEmailError('Email can\'t be blank');
        } else {
            setEmailError('');
        }

        if (password.trim() === '') {
            setPasswordError('Password can\'t be blank');
        } else {
            setPasswordError('');
        }

        // Your other form submission logic can be implemented here
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="wrapper">
            <header>Login Form</header>
            <form onSubmit={handleSubmit}>
                <div className={`field email ${emailError && 'error'}`}>
                    <div className="input-area">
                        <input type="text" placeholder="Email Address" value={email} onChange={handleEmailChange} />
                        <i className="icon fas fa-envelope"></i>
                        <i className="error error-icon fas fa-exclamation-circle"></i>
                    </div>
                    <div className="error error-txt">{emailError}</div>
                </div>
                <div className={`field password ${passwordError && 'error'}`}>
                    <div className="input-area">
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <i className="icon fas fa-lock"></i>
                        <i className="error error-icon fas fa-exclamation-circle"></i>
                    </div>
                    <div className="error error-txt">{passwordError}</div>
                </div>
                <div className="pass-txt"><a href="#">Forgot password?</a></div>
                <input type="submit" value="Login" />
            </form>
            <div className="sign-txt">Not yet member? <a href="#">Signup now</a></div>
        </div>
    );
}

export default Detail;

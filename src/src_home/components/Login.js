import React, { useState,useEffect } from 'react';
import './Navbar/styleLogin.css'; // Importing CSS file
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import App from 'src/src_side/App';
import '../../src_side/index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"
import Logo from 'react-login-page/logo';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    const [isAuthenticated, setisAuthenticated] = useState(false)

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log("-----------------------------------------------")
                        console.log(JSON.stringify(res.data))
                        console.log("-----------------------------------------------")

                        setProfile(res.data);
                        setisAuthenticated(true);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user, history ]
    );


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

    function loadView(){
        if(!isAuthenticated){
            // login
            return(

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

            {profile ? (
                <button onClick={logOut}>Log out</button>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}

        </div>
            )
        }else{
            //home
            return(
                <App/>
            )
        }
    }

    return (
        // <GoogleOAuthProvider clientId='835958615002-sv7nh5gls60un3085qtm8374qfjrdf22.apps.googleusercontent.com'>
        loadView()
    );
}

export default Login;

import React from "react";
import "./login.css";
import { PiSignInFill } from "react-icons/pi";
import { IoIosCreate } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = ({ onSignUp, setEmail }) => {

    const [email, setEmailLocal] = useState('');

    const handleSignUp = () => {
        onSignUp(email);
    };

    const [isActive, setActive] = useState("false");

    const handleRegister = () => {
        setActive(true);
    }

    const handleLogin = () => {
        setActive(false);
    }

    return (
        <div className={`container ${isActive ? 'active' : ''}`}>

            <div className="container-signIn">

                <div className="container-signIn__logo">
                    <PiSignInFill />
                    <h3>Sign In</h3>
                </div>

                <div className="container-signIn__input">
                    <div class="inputContainer">
                        <input required="required" id="inputField" type="text" />
                        <label class="usernameLabel" for="inputField">ID or Email</label>
                        <span className="userIcon">
                            <FaUserAlt />
                        </span>
                    </div>
                    <div class="inputContainer">
                        <input required="required" id="inputField" type="password" />
                        <label class="usernameLabel" for="inputField">Password</label>
                        <span className="userIcon"><RiLockPasswordFill /></span>
                    </div>
                </div>


                <div className="container-signIn__forgetPassword">
                    <input type="checkbox" />
                    <label>Remember me</label>
                    <a href="#">Forgot Your Password?</a>
                </div>

                <div className="container-signIn__button">

                    <button className="signIn">Sign In</button>
                    <h3>Or use ...</h3>
                </div>

                <div className="container-signIn__social">

                    <button className="google"><FcGoogle />Google</button>
                    <button className="google"><FaApple />Apple</button>

                </div>

            </div>

            <div className="container-signUp">
                <div className="container-signIn__logo">
                    <IoIosCreate />
                    <h2>Sign Up</h2>
                </div>

                <div className="container-signIn__input">
                    <div class="inputContainer">
                        <input required="required" id="inputField" type="email" value={email} onChange={(e) => {
                            setEmailLocal(e.target.value);
                            setEmail(e.target.value)} }/>
                        <label class="usernameLabel" for="inputField">ID or Email</label>
                        <span className="userIcon">
                            <FaUserAlt />
                        </span>
                    </div>
                    <div class="inputContainer">
                        <input required="required" id="inputField" type="password" />
                        <label class="usernameLabel" for="inputField">Password</label>
                        <span className="userIcon"><RiLockPasswordFill /></span>
                    </div>
                    <div class="inputContainer">
                        <input required="required" id="inputField" type="password" />
                        <label class="usernameLabel" for="inputField">Repeat</label>
                        <span className="userIcon"><RiLockPasswordFill /></span>
                    </div>
                </div>

                <div className="container-signUp__button">
                    <button className="signIn signUp-btn" onClick={handleSignUp}>Sign Up</button>
                </div>

                <div className="container-signIn__social">
                <button className="google"><FcGoogle />Google</button>
                    <button className="google"><FaApple />Apple</button>
                </div>
            </div>
            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button class="hidden signIn" id="login" onClick={handleLogin}>Sign In</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button class="hidden signIn " id="register" onClick={handleRegister}>Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from "../../Components/configuration"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handleError, setHandleError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                setHandleError(error.message)
            })
    }

    const ErrorHandle = () => {
        if (handleError === "Firebase: Error (auth/user-not-found).") {
            return (
                <span className="errorHandle">* User not found.</span>
            )
        }
        else if (handleError === "Firebase: Error (auth/invalid-email).") {
            return (
                <span className="errorHandle">* Invalid Email Address.</span>
            )
        }
        else if (handleError === "Firebase: Error (auth/network-request-failed).") {
            return (
                <span className="errorHandle">* Network request failed. Try again.</span>
            )
        }
        else if(handleError){
            return (
                <span className="errorHandle">* Something went wrong.</span>
            )
        }
        return (
            <>
            </>
        )
    }

    return (
        <div className="main-container">
            <h1 className="heading">Log In</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input-textt upper" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <br />
                <input type="password" className="input-textt bottom-text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <br />
                <span>{handleError && <ErrorHandle />}</span>
                <br />
                <div className="remember-me-container">
                    <span>
                        <input type="checkbox" className="check-box" />
                        <span className="font-style remember">Remember Me</span>
                    </span>
                    <span className="font-style forgot">Forgot Password</span>
                </div>
                <br />
                <input type="submit" className="button" value="Log in" />
                <br />
                <span className="font-style have-account">Don't have an account? <Link to="../signup" className="sign-up">Sign Up</Link></span>
            </form>
        </div>
    )
}

export default Login

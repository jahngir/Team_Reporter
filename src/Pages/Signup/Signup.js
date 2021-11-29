import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import { auth, createUserWithEmailAndPassword, updateProfile } from '../../Components/configuration'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [fieldError, setFieldError] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        if (!name || !email || !password) {
            setFieldError(true);
        }
        else {
            setFieldError(false);
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user);
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                    navigate("../");
                })

        }
    }

    const Field = () => {
        return (<span className="required">*All fields are required.</span>)
    }
    return (
        <div className="container">
            <h1 className="heading">Create Account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input-text upper" onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                <br />
                <input type="text" className="input-text" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <br />
                <input type="password" className="input-text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <br />
                {fieldError && <Field />}
                <div>
                    <input type="checkbox" className="check-box" />
                    <span className="font-style remember">I have accept the <span className="font-style forgot">Terms & Conditions</span> </span>
                </div>
                <br />
                <input type="submit" className="button" value="Sign Up" />
                <br />
                <span className="font-style have-account">Already have an account? <Link to="../login" className="sign-up">Log In</Link></span>
            </form>
        </div>
    )
}

export default Signup

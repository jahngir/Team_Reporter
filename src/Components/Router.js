import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home.js'
import Login from '../Pages/Login/Login.js'
import Signup from '../Pages/Signup/Signup.js'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="login" element={<Login />}>
            </Route>
            <Route path="signup" element={<Signup />}>
            </Route>
        </Routes>
    )
}

export default Router;

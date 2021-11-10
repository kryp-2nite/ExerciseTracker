import React from 'react';
import { Route, Link, Router } from "react-router-dom";
import Register from '../../pages/Register';
import Signin from '../../pages/Signin'
import HomePage from "../../pages/HomePage"

const Nav = () => {

    const linkStyle = {
        padding: "5px",
        textDecoration: "none",
    };

    return(
        <div>
            <nav className="navbar">
                <Link to="/" style={linkStyle}>
                    Home
                </Link>
                <Link to="/register" style={linkStyle}>
                    Register
                </Link>
                <Link to="/signin" style={linkStyle}>
                    Sign In
                </Link>
            </nav>
            <Router>
                <Route 
                exact
                path="/" 
                render={(props) => <HomePage {...props} />} 
                />
                <Route
                 path="/register" 
                 render={(props) => <Register {...props} />} 
                 />
                <Route 
                path="/signin" 
                render={(props) => <Signin {...props} />} 
                />
            </Router>
        </div>
    );
};


export default Nav
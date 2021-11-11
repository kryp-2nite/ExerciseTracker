import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";


const Nav = () => {

    const linkStyle = {
        padding: "5px",
        textDecoration: "none",
    };
    console.log("Nav");
    return(
        <div>
            <BrowserRouter>
            <nav className="navbar">
                 <Link to="/" style={{linkStyle}}>
                    Home
                </Link>
                <Link to="/register" style={{linkStyle}}>
                    Register
                </Link>
                <Link to="/signin" style={{linkStyle}}>
                    Sign In
                </Link>
            </nav>
            </BrowserRouter>
            
            
        </div>
    );
};


export default Nav
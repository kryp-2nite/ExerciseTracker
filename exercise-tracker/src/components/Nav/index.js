import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Register from '../../pages/Register';
import Signin from '../../pages/Signin'
import HomePage from "../../pages/HomePage"

const Nav = () => {
    return(
        <div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/signin">Sign In</Link>
            </nav>
            <Switch>
                <Route path="/register" render={(props) => <Register {...props} />} />
                <Route path="/signin" render={(props) => <Signin {...props} />} />
                <Route path="/homepage" render={(props) => <HomePage {...props} />} />
            </Switch>
        </div>
    );
};


export default Nav
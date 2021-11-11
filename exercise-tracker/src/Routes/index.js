import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from '../pages/Register';
import Signin from '../pages/Signin'
import HomePage from "../pages/HomePage"

function RoutesComponent () {
return (
<BrowserRouter>
    <Routes>
        <Route 
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
    </Routes>
</BrowserRouter>
)
}

export default RoutesComponent;
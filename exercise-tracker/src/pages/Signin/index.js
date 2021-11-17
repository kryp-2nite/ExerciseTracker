import React, { useState } from 'react';
import './style.css';
import { useNavigate, Link } from 'react-router-dom';
import { setToken } from '../../utils/tokenService';
import * as UserService from "../../api/UserService";


const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);

        let newLoggedIn = {
            email,
            password,
        };

        const res = await UserService.login(newLoggedIn);

        if(res.data.data) {
            const token = res.data.data.token;
            // console.log('FROM LOGIN FORM: ', token);
            alert('You are now logged in.');
            setToken(token);
            setEmail('');
            setPassword('');
            navigate('/landing')
        } else {
            alert('Server error, Enter valid credentials.');
        }
    };

    return(
        <div>
            <h1 className="sign__in--h1">Sign In to get Tracking!</h1>
            <div className="signin__form">
                <h3 className="signin__h3">Sign In Here</h3>
                <input 
                    className="sign__in--email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    required
                />
                <input 
                    className="sign__in--password"
                    placeholder="Enter Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="button" type="submit" onClick={handleSubmit}>Sign In
                </button>
                <h3>Not a Member yet?</h3>
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
            </div>
        </div>
    );
};

export default Signin
import React, { useState } from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import * as UserService from '../../api/UserService'
import { setToken } from '../../utils/tokenService';



const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = async() => {
      const newExercisePost = {
          firstName,
          lastName,
          email,
          password,
      };

      const res = await UserService.create(newExercisePost);
      console.log(res);

      //trying to extract a token
      if(res.data.data) {
        if(res.data.data.token) {
            const token = res.data.token;
            setToken(token);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            //redirect to homepage
            navigate.push('/');
        }
      } else {
          alert('server error');
      }
  }

  return(
      <div>
          <h1 className="register--h1">Best place to keep track of your workouts!</h1>
          <div className="register--form">
                <h3 className="sign__up--h3">Sign Up Now!</h3>
                <input
                    className="register__firstname"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    minLength="2"
                    maxLength="50"
                    required
                />
                <input
                    className="register__lastname"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    minLength="2"
                    maxLength="50"
                    required
                />
                <input
                    className="register__email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    required
                />
                <input
                    className="register__password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    minLength="5"
                    required
                />
                <button type="submit" className="button" onClick={handleSubmit}>Register
                </button>
          </div>
      </div>
  );
};

export default Register
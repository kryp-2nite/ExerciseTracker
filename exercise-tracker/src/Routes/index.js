import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ExerciseForm from '../components/ExerciseForm'
import Signin from '../pages/Signin'
import HomePage from "../pages/HomePage"
import Register from '../pages/Register'

function RoutesComponent () {
return (
<BrowserRouter>
    <Routes>
            <Route path="/addExercise"  element={<ExerciseForm />} />
            <Route path="landing" element={<HomePage />} />
            <Route path="/" element={<Signin />}/>
            <Route path="register" element={<Register />}/>
    </Routes>
</BrowserRouter>
)
}

export default RoutesComponent;
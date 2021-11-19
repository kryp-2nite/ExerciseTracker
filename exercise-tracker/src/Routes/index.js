import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ExerciseForm from '../components/ExerciseForm'
import ExerciseDetails from '../components/ExerciseDetails'
import Signin from '../pages/Signin'
import HomePage from "../pages/HomePage"
import Register from '../pages/Register'
import GetHelp from "../components/GetHelp/GetHelp"

function RoutesComponent () {
return (
<BrowserRouter>
    <Routes>
            <Route path="/addExercise"  element={<ExerciseForm />} />
            <Route path="landing" element={<HomePage />} />
            <Route path="/" element={<Signin />}/>
            <Route path="register" element={<Register />}/>
            <Route path="/exerciseDetails/:id" element={<ExerciseDetails />} />
            <Route path="/gethelp" element={<GetHelp />} />
    </Routes>
</BrowserRouter>
)
}

export default RoutesComponent;
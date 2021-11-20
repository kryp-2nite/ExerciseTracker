import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ExerciseForm from '../ExerciseForm/index'
import { useParams } from 'react-router'
import * as ExercisePostService from "../../api/ExercisePostService"
import axios from 'axios'

function ExerciseDetails() {
    const [detailedExercise, setDetailedExercise] = useState([])
    const { id } = useParams()
    console.log("idid: ",id);

    useEffect(() => {
  
    ExercisePostService.get(id)
    // console.log(response.data)
   }, [])
   
    return (
        <div>
            {/* <h1>{id.typeOfExercise}</h1> */}
    
            <Link  to="/landing">Back to Home</Link>
        </div>
    )
}

export default ExerciseDetails

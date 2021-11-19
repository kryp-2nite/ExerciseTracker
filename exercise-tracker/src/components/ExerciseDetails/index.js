import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ExerciseForm from '../ExerciseForm/index'
import {useParams} from 'react-router'
import axios from 'axios'

function ExerciseDetails() {
    const [detailedExercise, setDetailedExercise] = useState([])
   const {id} = useParams()

   useEffect(() => {
    axios.get(`http:localhost:3000/api/exerciseDetails/${id}`)
    .then(response => {
        console.log("hello")
        setDetailedExercise(response.data)
        console.log("response data: ", response.data)
    })
    .catch((error) => {
        console.log('error something:' ,error)
    })
   }, [id])
   
    return (
        <div>
        
    
            <Link  to="/landing">Back to Home</Link>
        </div>
    )
}

export default ExerciseDetails

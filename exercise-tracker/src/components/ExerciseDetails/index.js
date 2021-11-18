import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ExerciseDetails() {

    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])
    return (
        <div>
            
        <h1>Details Page</h1>


            <Link  to="/landing">Back to Home</Link>
        </div>
    )
}

export default ExerciseDetails

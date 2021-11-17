import React, { useState }  from 'react';
import {  Link } from 'react-router-dom';
import * as ExercisePostService from '../../api/ExercisePostService'
import './style.css';

const PostForm = ({id, getPostsAgain}) => {
    const [typeOfExercise, setTypeOfExercise] = useState("");
    const [date, setDate] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [author, setAuthor] = useState("");
    
    
   
    const handleSubmit = async () => {
        let newPost = { typeOfExercise, date, sets, reps, weight, author };
        console.log(id);
        const res = await ExercisePostService.create(id, newPost);
        console.log("rest", res);
        if(res.status === 200) {
            
            setTypeOfExercise("");
            setDate("");
            setSets("");
            setReps("");
            setWeight("");
            setAuthor("");
            getPostsAgain();
        } else {
            alert("service Error");
        }

    };
    
    return (
        <div className="post__form--inputs">
            <input
                onChange={(e) => setTypeOfExercise(e.target.value)}
                value={typeOfExercise}
                type="text"
                name="typeOfExercise"
                placeholder="type of exercise..ex bench press"
            />
            <input
                onChange={(e) => setDate(e.target.value)}
                value={date}
                type="date"
                name="date"
            />
            <input
                onChange={(e) => setSets(e.target.value)}
                value={sets}
                type="text"
                name="sets"
                placeholder="How many sets"
            />
            <input
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                type="text"
                name="reps"
                placeholder="How many reps"
            />
            <input
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                type="text"
                name="weight"
                placeholder="How much weight"
            />
            <input
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                type="text"
                name="author"
                placeholder="author"
            />
            <button onClick={handleSubmit}>Add your Exercise!</button>
            
            <ul>
                 <li><Link to="/landing">Back to Home</Link></li>
            </ul>

        </div>
    );
};
export default PostForm
import React, { useState }  from 'react';
import * as ExercisePostService from '../../api/ExercisePostService'
import './style.css';

const PostForm = ({getPostsAgain}) => {
    const [typeOfExercise, setTypeOfExercise] = useState("");
    const [date, setDate] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [author, setAuthor] = useState("");
    
    
   
    const handleSubmit = async () => {
        let newPost = { typeOfExercise, date, sets, reps, weight, author };
        const res = await ExercisePostService.create(newPost);
        if(res.status === 201) {
            setTypeOfExercise("");
            setDate("");
            setSets("");
            setReps("");
            setWeight("");
            setAuthor("");
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
            />
            <button onClick={handleSubmit}>Add your Exercise!</button>
        </div>
    );
};
export default PostForm
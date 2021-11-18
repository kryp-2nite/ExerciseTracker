import React, { useState, useEffect } from 'react';
import CommentForm from '../CommentForm';
import Comment from '../Comment';
import * as ExercisePostService from '../../api/ExercisePostService';
import './style.css';

const Posts = ({ 
    getPostAgain,
    user,
    id,
    typeOfExercise,
    sets,
    reps,
    weight,
    author,
    date
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTypeOfExercise, setTypeOfExercise] = useState(typeOfExercise);
    const [comments, setComments] = useState([]);
    const [editedSets, setSets] = useState(sets);
    const [editedReps, setReps] = useState(reps);
    const [editedWeight, setWeight] = useState(weight);
    const [editAuthor, setAuthor] = useState(author);
    const [editDate, setDate] = useState(date);

    const handleEdit = async() => {
        console.log("handled edit");
        setIsEditing(!isEditing);
        //meaning submit is showing
        if(isEditing) {
            let editedPost = {
                typeOfExercise: editedTypeOfExercise,
                sets: editedSets,
                reps: editedReps,
                weight: editedWeight,
                author: editAuthor,
            };
            await ExercisePostService.update(id, editedPost);
            getPostAgain();
        }
    };

    const handleDelete = async() => {
        await ExercisePostService.remove(id);
        getPostAgain();
    };

    async function fetchComments(id) {
        let res = await ExercisePostService.getAllComments(id);
        if (res.status === 200) {
            setComments(res.data.data);
        }
    }

    useEffect(() => {
        fetchComments(id)
    }, [id]);

    return (
        <div>
            <div className="container__home">
                <div className="post__body">
                    {!isEditing && <h3 className="post__title--h3">{typeOfExercise}</h3>}
                    {isEditing && (
                        <input 
                            onChange={(e) => setTypeOfExercise(e.target.value)}
                            value={editedTypeOfExercise}
                            type="text"
                            name="TypeOfExercise"
                        />
                    )}
                    <div >
                        <button className="button post__btn" onClick={handleEdit}>
                            {isEditing ? "SUBMIT" : "EDIT POST"}
                        </button>
                        <button className="button" onClick={handleDelete}> Delete Post </button>
                    </div>
                </div>
                {!isEditing && <h3>Author: {author}</h3>}
                {isEditing && (
                    <input 
                        onChange={(e) => setAuthor(e.target.value)}
                        value={editAuthor}
                        type="text"
                        name="sets"
                    />
                )}
                {!isEditing && <h3>Date: {date}</h3>}
                {isEditing && (
                    <input 
                        onChange={(e) => setDate(e.target.value)}
                        value={editDate}
                        type="text"
                        name="sets"
                    />
                )}
                {!isEditing && <p className="sets__form">sets: {sets}</p>}
                {isEditing && (
                    <input 
                        onChange={(e) => setSets(e.target.value)}
                        value={editedSets}
                        type="text"
                        name="sets"
                    />
                )}
                <div>
                    {!isEditing && <p className="reps__form">reps: {reps}</p>}
                    {isEditing && (
                        <input 
                            onChange={(e) => setReps(e.target.value)}
                            value={reps}
                            type="text"
                            name="reps"
                        />
                    )}
                    <div>
                        {!isEditing && <p className="weight__form">Weight: {weight}</p>}
                        {isEditing && (
                            <input 
                                onChange={(e) =>setWeight(e.target.value)}
                                value={weight}
                                type="text"
                                name="weight"
                            />
                        )}
                    </div>
                </div>
                <div className="comment__section">
                    <div className="chat__section">
                        <h5 className="chat__h5">Comments:</h5>
                        {comments.map((comment) => {
                            return (
                                <Comment
                                author={comment.author}
                                content={comment.content}
                                key={comment._id}
                                commentId={comment._id}
                                id={id}
                                getCommentsAgain={(id) => fetchComments(id)}
                                />
                            )
                        })}
                    </div>
                    <CommentForm
                    id={id}
                    user={user}
                    getPostAgain={() => getPostAgain()}
                    getCommentsAgain={(id) => fetchComments(id)}
                    />
                </div>
            </div>
         </div>
    );
};

export default Posts
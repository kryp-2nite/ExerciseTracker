import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ExercisePost from "../../components/ExercisePost";
import ExerciseForm from '../../components/ExerciseForm';
import ExerciseDetails from "../../components/ExerciseDetails";
import { getUser } from "../../api/UserService"
import * as ExercisePostService from "../../api/ExercisePostService";
import Logout from '../../components/Logout'
import './style.css';



const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [user] = useState(getUser);

    async function fetchPosts() {
        let res = await ExercisePostService.getAll();
       if (res.status === 200) {
           setPosts(res.data.data.reverse())
       }
    }

    useEffect(() =>{
    
        fetchPosts();
    }, []);

    return (
        <div>
            <div className="nav">
                <ul>
                    <Link className="add__exercise" to="/addExercise">Add Exercise</Link>
                    <Logout />
                </ul>
            </div>
            <div className="post">

                <h1 className="title-h1">Look at what other people are posting</h1>
            
                
                 {posts.map((post) => {
                    return (
                        <ExercisePost 
                            typeOfExercise = {post.typeOfExercise}
                            date={post.date}
                            sets={post.sets}
                            reps={post.reps}
                            weight={post.weight}
                            author={post.author}
                            postComments ={post.comments}
                            key={post._id}
                            id={post._id}
                            getPostAgain={() => fetchPosts()}
                            />
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage
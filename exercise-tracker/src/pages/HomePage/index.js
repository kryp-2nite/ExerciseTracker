import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ExercisePost from "../../components/ExercisePost";
import ExerciseForm from '../../components/ExerciseForm';
import { getUser } from "../../api/UserService"
import * as ExercisePostService from "../../api/ExercisePostService";
import Logout from '../../components/Logout'



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
            <ul>
                <li><Link to="/addExercise">Add Exercise</Link></li>
            </ul>
            <Logout />
            <div>
            
                <ExerciseForm id={user._id} getPostsAgain={() => fetchPosts()} /> 
                 {posts.map((post) => {
                    return (
                        <ExercisePost 
                            typeOfExercise = {post.typeOfExercise}
                            date={post.date}
                            sets={post.sets}
                            reps={post.reps}
                            weight={post.weight}
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
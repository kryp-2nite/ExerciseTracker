import React, { useEffect, useState } from "react";
import ExercisePost from "../../components/ExercisePost";
import ExerciseFrom from '../../components/ExerciseForm';
import * as ExercisePostService from "../../api/ExercisePostService";
import Nav from "../../components/Nav";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        let res = await ExercisePostService.getAll();
        if (res.status === 200) {
            setPosts(res.data.data.reverse());
        }
    }

    useEffect(() =>{
        fetchPosts();
    }, []);

    return (
        <div>
            <Nav />
            <div>
                <ExerciseFrom getPostAgain={() => fetchPosts()} />
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
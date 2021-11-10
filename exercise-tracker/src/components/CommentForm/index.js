import React, { useState } from "react";
import "./style.css";
import * as ExercisePostService from "../../api/ExercisePostService";

const CommentForm = ({ id, getCommentsAgain, getPostAgain }) => {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
        let newComment = { author, content, id };
        const res = await ExercisePostService.createComment(id, newComment);

        if (res.status === 201) {
            setAuthor("");
            setContent("");
            getCommentsAgain(id);
            getPostAgain();
        } else {
            alert("Server Error");
        }
    };

    return (
        <div className="comment__form">
            <input 
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                type="text"
                name="author"
                placeholder="AUTHOR"
            />
            <input 
                onChange={(e) => setContent(e.target.value)}
                value={content}
                type="text"
                name="content"
                placeholder="Add a Comment"
            />
            <button onClick={handleSubmit}>Add Comment!</button>
        </div>
    );
};

export default CommentForm
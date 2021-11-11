import React, { useState } from "react";
import "./style.css";
import * as ExercisePostService from "../../api/ExercisePostService";

const Comment = ({ id, author, content, getCommentsAgain, commentId }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedAuthor, setAuthor] = useState(author);
    const [editContent, setContent] = useState(content);

    const handleEdit = async () => {
        setIsEditing(!isEditing);
        // this means that the submit is showing
        if (isEditing) {
            let editPost = {
                author: editedAuthor,
                content: content,
            };
            await ExercisePostService.updateComment(id, commentId, editPost);
            getCommentsAgain(id);
        }
    };

    const handleDelete = async () => {
        await ExercisePostService.removeComment(id, commentId);
        getCommentsAgain(id);
    }

    return (
        <div className="comments">
            <span className="entry">
                {!isEditing && <b>{author}</b>}
                {isEditing && (
                    <input 
                        onChange={(e) => setAuthor(e.target.value)}
                        value={editedAuthor}
                        type="text"
                        name="author"
                        placeholder="Your Name"
                    />
                )}
                :
                {!isEditing && <span>{content}</span>}
                {isEditing && (
                    <input 
                        onChange={(e) => setContent(e.target.value)}
                        value={editContent}
                        type="text"
                        name="content"
                        placeholder="add a comment"
                    />
                )}
            </span>
            <span className="btn">
                    <button onClick={handleEdit}>
                        {isEditing ? "POST" : "EDIT"}
                    </button>
                    <button onClick={handleDelete}>Delete</button>
            </span>
        </div>
    )
};


export default Comment;
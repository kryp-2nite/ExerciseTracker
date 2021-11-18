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
                content: editContent,
            };
            await ExercisePostService.updateComment(id, commentId, editPost);
            getCommentsAgain(id);
        }
    };

    const handleDelete = async () => {
        console.log('CommentId: ', commentId);
        console.log('Id: ', id);
        await ExercisePostService.removeComment(id, commentId);
        getCommentsAgain(id);
    }

    return (
        <div className="comments">
            <span className="entry">
                {!isEditing && <b className="comment__author-title">{author}</b>}
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
                {!isEditing && <span className="comment__content">{content}</span>}
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
                    <button className="btn__edit" onClick={handleEdit}>
                        {isEditing ? "POST" : "EDIT"}
                    </button>
                    <button className="btn__delete" onClick={handleDelete}>Delete</button>
            </span>
        </div>
    )
};


export default Comment;
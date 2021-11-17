const db = require('../models');
const ExercisePost = require('../models/Exercise');
// const ExerciseComment = require()

const createExercisePost = (req, res) => {
    let typeOfExercise = req.body.typeOfExercise;
    let date = req.body.date;
    let sets = req.body.sets;
    let reps = req.body.reps;
    let weight = req.body.weight;
    let comments = req.body.comments;
    let author = req.body.author;

    const Post = new ExercisePost({
        typeOfExercise: typeOfExercise,
        date: date,
        sets: sets,
        reps: reps,
        weight: weight,
        comments: comments,
        author: author,
    });

    // console.log(post);
    Post.save((err, post) => {
        console.log(err);
        if (err) {
            return res.status(400).json({ 
                errors: err.message
            });
        }

        return res.status(200).json({ 
            message: "Exercise Post Created",
            post,
        });
    });
};

const index = (req, res) => {
    console.log("index:")
    ExercisePost.find({}, (err, foundPosts) => {
        if (err) return console.log("Error in ExercisePost#index", err);
        // console.log(foundPosts);
        return res.status(200).json({ 
            message: "Success",
            data: foundPosts,
        });
    });
};

const showExercisePostById = (req, res) => {
    ExercisePost.findById(req.params.id, (err,foundPost) => {
        if (err) return console.log("Error in Exercise Post# show", err);
        
        return res.status(200).json({ 
            message: "Success",
            data: foundPost,
        });
    });
};


const updateExercise = (req, res) => {
    ExercisePost.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) console.log("Error in Post#update: ", err);

            return res.status(202).json({
                data: updatedPost,
            });
        }
    );
};






const showComments = (req, res) => {
    ExercisePost.findById(req.params.id)
    .then(foundPost => {
        if (!foundPost) return console.log("Error in Comment#Show")
        return res.status(200).json({ 
            message: "Success",
            data: foundPost.comments,
        });
    })
    .catch(err => console.log(err))
};

const createComment = (req, res) => {
    ExercisePost.findById(req.params.id)
    .then(foundPost => {
        if(!foundPost) return console.log("Error in Comment#Create: ")
        foundPost.comments.push(req.body);
        foundPost.save();

        return res.status(201).json({ 
            message: "Success",
            data: foundPost.comments,
        });
    })
    .catch(err => console.log(err))
};

const updateComment = (req, res) => {
    ExercisePost.findById(req.params.id)
    .then(foundPost => {
        console.log('FoundPost',foundPost)
        if (!foundPost) return console.log("Error in Comment#update")

        const commentById = foundPost.comments.id(req.params.commentId);
        
        commentById.author = req.body.author,
        
        commentById.content = req.body.content;
        foundPost.save();

        return res.status(202).json({ 
            message: "Success",
            data: commentById,
        });
    })
};



const destroy = (req, res) => {
    ExercisePost.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log("Error in Post#destroy:  ", err);

        return res.status(200).json({
            data: deletedPost,
        })
    })
}


const destroyComment = (req, res) => {
    console.log('are you being hit??');
    ExercisePost.findById(req.params.id)
    .then(foundPost => {
        console.log('what do you look like??: ', foundPost)
        if (!foundPost) return console.log("Error in Comment#")

        const commentById = foundPost.comments.id(req.params.commentId)
        console.log('commentById: ', commentById)
        commentById.remove();
        foundPost.save();

        return res.status(200).json({
            message: "success",
            data: commentById,
        })
    })
}



module.exports = { 
    createExercisePost,
    index,
    showExercisePostById,
    showComments,
    createComment,
    updateComment,
    destroy,
    destroyComment,
    updateExercise
}
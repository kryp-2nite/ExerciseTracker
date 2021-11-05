const db = require('../models');
const ExercisePost = require('../models/Exercise');

const createExercisePost = (req, res) => {
    let typeOfExercise = req.body.typeOfExercise;
    let date = req.body.date;
    let sets = req.body.sets;
    let reps = req.body.reps;
    let weight = req.body.weight;
    let comments = req.body.comments;
    let author = req.body.author;

    const exercisepost = new Exercise({
        typeOfExercise: typeOfExercise,
        date: date,
        sets: sets,
        reps: reps,
        weight: weight,
        comments: comments,
        author: author,
    });

    console.log(exercisepost);
    exercisepost.save((err, exercisepost) => {
        if (err) {
            return res.status(400).json({ 
                errors: err.message
            });
        }

        return res.status(200).json({ 
            message: "Exercise Post Created",
            exercisepost,
        });
    });
};

const index = (req, res) => {
    ExercisePost.find({}, (err, foundPosts) => {
        if (err) return console.log("Error in ExercisePost#index", err);

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










module.exports = { 
    createExercisePost,
    index,
    showExercisePostById,
    
}
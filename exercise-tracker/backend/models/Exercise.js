const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        author: {type: String},
        content: { type: String },
    },
    {
        timestamps: true,
    }
)



const exerciseSchema = new Schema(
    {
    typeOfExercise: { type: String, required: true },
    date: { type: Date },
    sets: { type: Number },
    reps: { type: Number },
    weight: { type: Number },
    comments: [commentSchema],
    author: { type: String },
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Exercise', exerciseSchema)
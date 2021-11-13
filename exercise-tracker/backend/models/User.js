const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const joi = require('joi');

const SALT_ROUNDS = 7;

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, minlength: 2, maxlength: 50 },
        lastName: { type: String, required: true, minlength: 2, maxlength: 50},
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minlength: 3 },
    },
    {
        timestamps: true,
    }
)

userSchema.pre('save', function (next) {

    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', userSchema);
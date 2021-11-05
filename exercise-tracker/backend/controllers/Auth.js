const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const db = require('../models');
const bcrypt = require('bcrypt');
const Joi = require('joi');


const login = async (req, res) => {
    console.log('login controller');
    const { email, password } = req.body;

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { value, error } = schema.validate(req.body, { abortEarly: false });

    console.log(error);

    if (error) {
        return res.status(400).send({
            message: error.details[0].message,
        });
    }

    let foundUser = await db.User.findOne({ email });

    if (!foundUser) {
        console.log('no user found');
        return res.send({
            message: 'Login Error, please try again',
        });
    } else {
        console.log('user');

        bcrypt.compare(password, foundUser.password, function (err, result) {
            if (err) {
                return res.send({
                    message: 'Login Error, PLease try again',
                    data: err,
                });
            } else {
                if (result) {
                    const token = createJWT(foundUser);
                    return res.send({
                        message: 'Success',
                        data: { token },
                    });
                } else {
                    console.log('Bad Password');
                    return res.send({
                        message: 'Login Error, please try again',
                    })
                }
            }
        })
    }
}


function createJWT(user) {
    return jwt.sign(
        { user },
        SECRET,
        { expiresIn: '24h' }
    );
}

module.exports = { login }

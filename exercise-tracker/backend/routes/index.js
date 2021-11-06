const router = require('express').Router();


router.use('/Exercises', require('./Exercises'));
router.use('/auth', require('./auth'));
router.use('/Users', require('./Users'));

module.exports = router;
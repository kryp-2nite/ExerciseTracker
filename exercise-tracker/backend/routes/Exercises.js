const router = require('express').Router();
const ExercisePost = require('../controllers/Exercises');

router.post('/:id', ExercisePost.createExercisePost);
router.get('/', ExercisePost.index);
router.get('/:id', ExercisePost.showExercisePostById);
router.put('/:id', ExercisePost.updateExercise);
router.get('/:id/comments', ExercisePost.showComments);
router.post('/:id/comments', ExercisePost.createComment);
router.put('/:id/comment/:commentId', ExercisePost.updateComment);
router.delete('/:id', ExercisePost.destroy);
router.delete('/:id/comment/:commentId', ExercisePost.destroyComment);

module.exports = router;
const express = require('express');
const router = express.Router();
const {getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thought-id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thought-id/reactions').post(addReaction);
router.route('/:thought-id/reactions/:reaction-id').delete(deleteReaction);

module.exports = router;
const express = require('express');
const router = express.Router();
const {getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend} = require('../../controllers/user-controller');
// const { route } = require('./user-routes');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:user-id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:user-id/friends/:friend-id').post(addFriend).delete(deleteFriend);  

module.exports = router;

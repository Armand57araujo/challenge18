const router = require('express').Router();
const thoughts = require('./thought-routes');
const users = require('./user-routes');


router.use('/thought', thoughts);
router.use('/user', users);
 

module.exports = router;


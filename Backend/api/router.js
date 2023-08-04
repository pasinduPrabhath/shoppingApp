const router = require('express').Router();
const {userRegister,getUserByEmail} = require('./controller');

router.post('/register', userRegister);
router.post('/getUserByEmail', getUserByEmail);
module.exports = router;
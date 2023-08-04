const router = require('express').Router();
const {userRegister,getUser} = require('./controller');

router.post('/register', userRegister);
router.get('/users', getUser);
module.exports = router;
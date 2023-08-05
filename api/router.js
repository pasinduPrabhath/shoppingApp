const router = require('express').Router();
const {userRegister,userLogin,getProducts} = require('./controller');

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/products', getProducts);
module.exports = router;
var express = require('express');
var router = express.Router();
const { signup, list, deleteUser, signin, signOut, isAuth } = require('../controller/user');
const { auth } = require('../middlewares/auth');

/* GET users listing. */

router.post('/', signup);
router.get('/', auth, list);
router.delete('/', auth, deleteUser);
router.post('/signin', signin);
router.get('/signout', auth, signOut);
router.get('/isAuth', isAuth);

module.exports = router;

const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user');

router.post('/login', usercontroller.loginUser);
router.post('/register', usercontroller.registerUser);
router.get('/', usercontroller.getUsers);
router.post('/', usercontroller.postUser);
router.put('/', usercontroller.putUser);
router.delete('/', usercontroller.deleteUser);
router.get('/', usercontroller.getUser);
router.delete('/', usercontroller.deleteUsers);




module.exports = router;


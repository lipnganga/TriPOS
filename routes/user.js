const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user');

router.post('/login', usercontroller.loginUser);
router.post('/register', usercontroller.registerUser);
router.get('/', usercontroller.getUsers);
router.get('/:id', usercontroller.getUserById);
router.put('/:id', usercontroller.updateUser);
router.delete('/:id', usercontroller.deleteUser);
router.get('/', usercontroller.getUsers);
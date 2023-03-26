const express = require('express');
const router = express.Router();
const user = require('../controllers/user');


// login
router.get('/login', user.login);
router.post('/login', user.postLogin);






module.exports = router;




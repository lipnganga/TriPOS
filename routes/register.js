const express = require('express');
const router = express.Router();
const register = require('../controllers/register');

router


// register 
router.get('/register', register.Adduser);
router.post('/register', register.postRegister);



module.exports = router;




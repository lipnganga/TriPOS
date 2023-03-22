const { application } = require('express');
const express = require('express');
const router = express.Router();
const register = require('../controllers/register');



// register 
router.get('/register', register.register);
router.post('/register', register.postRegister);

//register

app.get('/register', (req, res) => {
    res.render('register');
}

module.exports = router;



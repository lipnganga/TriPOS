const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

const app= express();

// login
router.get('/login', user.login);
router.post('/login', user.postLogin);


// login
app.get('/login', (req, res) => {
    res.render('login');
});









module.exports = router;




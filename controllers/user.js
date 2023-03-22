const mongoose = require('mongoose');
const User = require('../models/user');

const login = (req, res) => {
    res.render('login');
}

const postLogin = (req, res) => {
    const { name, password } = req.body;
    console.log(req.body);

    const user = new User({
        name,
        password
    });

    user.save()
        .then(data => {
            res.json(data);
        }
        )
        .catch(err => {
            res.json(err);
        }
        )

}


// login handle
app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/products/new',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});





module.exports = {
    login,
    postLogin

}


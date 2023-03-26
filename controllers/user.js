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






module.exports = {
    login,
    postLogin

}


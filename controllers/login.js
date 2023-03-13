const express = require('express');
const loginModel = require('../models/login');

const loginUser = (req, res) => {
    res.render('login');
}

const postLogin = (req, res) => {
    const { username, password } = req.body;

    const user = new loginModel({
        username,
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
    loginUser,
    postLogin
}







const mongoose = require('mongoose');
const registers = require('../models/register');

const getregister = (req, res) => {
    res.render('register');

}

const postRegister = (req, res) => {

    const { name, email, password, password2 } = req.body;
    console.log(req.body);

    const user = new register({
        name,
        email,
        password,
        password2
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
    getregister,
    postRegister

}

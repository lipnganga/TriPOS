const mongoose = require('mongoose');
const register = require('../models/register');

const Adduser = (req, res) => {
    res.render('register');
}



const postRegister = (req, res) => {

    const { name, email, password } = req.body;
    console.log(req.body);

    const user = new register({
        name,
        email,
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
    Adduser,
    postRegister

}

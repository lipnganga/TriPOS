const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },


});

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },


});


const register = mongoose.model('register', registerSchema);

const User = mongoose.model('User', userSchema);

module.exports = User;

module.exports = register;


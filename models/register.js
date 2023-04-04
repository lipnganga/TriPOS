const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
    },

    password: {
        type: String,
        required: true
    },


});

const registers = mongoose.model('register', registerSchema);

module.exports = registers;



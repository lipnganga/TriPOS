const express = require('express');
const dotenv = require('dotenv');
// body-parser
const bodyParser = require('body-parser');

// require config.mongo
require('./config/config.mongo.js');

// config dotenv
dotenv.config();
const app = express();
const port = 4000;
const morgan = require('morgan');
const passport = require('passport');
// const cart = require('./models/cart.js');

app.use(morgan('dev'));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ejs view engine
app.set('view engine', 'ejs');

// set views folder
app.set('views', './views');

app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());




// ROUTES
const routes = require('./routes/index.js');
app.use('/', require('./routes/index'));
// app.use('/api', require('./routes/api'));
app.use('/products', require('./routes/products'));
//app.use('/users', require('./routes/users'));
// cart 
//app.use('/cart', require('./routes/cart'));
app.get('/menu', (req, res) => {
    res.render('menu');
});

// login
app.get('/login', (req, res) => {
    res.render('login');
});



// register
app.get("/"), function (req, res) {
    res.render("register");
}




// Showing home page
app.get("/", function (req, res) {
    res.render("home");
});

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// define menu variable
let menu = [
    { name: 'Pizza', price: 10, quantity: 1 },
];

 app.get('/menu', (req, res) => {
    res.render('menu');
});








app.listen(port, () => console.log(`Example app listening on port ${port}!`));


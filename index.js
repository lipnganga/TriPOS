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
app.use('/login', require('./routes/user'));
app.use('/register', require('./routes/register'));
app.use('cart', require('./routes/cart'));
// login
app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

//cart
app.get('/cart', function (req, res) {
    const cart = [];
    res.render('cart', { cart: cart });
});



//products

app.get('/products', function (req, res) {
    const products = [];
    res.render('products', { products: products });
}
);

//items
app.get('/cart', function (req, res) {
    var items = req.session.cart || [];
    res.render('cart', { items: items });
  });
  

app.get('/cart', function (req, res) {
    var cart = req.session.cart || [];
    var subtotal = 0;
    for (var i = 0; i < cart.length; i++) {
        subtotal += cart[i].price;
    }
    res.render('cart', { cart: cart, subtotal: subtotal });
});


// Showing home page
app.get("/", function (req, res) {
    res.render("home");
});

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));



 app.get('/menu', (req, res) => {
    res.render('menu');
});








app.listen(port, () => console.log(`Example app listening on port ${port}!`));


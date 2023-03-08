const express = require('express');
const dotenv = require('dotenv');
// require config.mongo
require('./config/config.mongo.js');

// config dotenv
dotenv.config();
const app = express();
const port = 4000;
const morgan = require('morgan');
app.use(morgan('dev'));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ejs view engine
app.set('view engine', 'ejs');

// set views folder
app.set('views', './views');



// ROUTES
app.use('/', require('./routes/index'));
// app.use('/api', require('./routes/api'));
app.use('/products', require('./routes/products'));
// app.use('/users', require('./routes/users'));

// ERROR HANDLING
app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({ error: err.message });
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));


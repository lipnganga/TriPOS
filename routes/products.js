const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.get('/', (req, res) => {
    res.send('Products Page');
});

router.get('/new', products.AddProduct);
router.post('/new', products.postProduct);


module.exports = router;


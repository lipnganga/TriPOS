const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

//render products page
router.get('/', function (req, res) {
    const products = [];
    res.render('products', { products: products });
}
);


router.get('/', productController.getProducts);
router.post('/', productController.postProduct);
router.delete('/:cartItemId', productController.removeFromCart);

module.exports = router;

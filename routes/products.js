const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');



router.get('/', productController.getProducts);
router.post('/', productController.postProduct);
router.delete('/:cartItemId', productController.removeFromCart);

module.exports = router;

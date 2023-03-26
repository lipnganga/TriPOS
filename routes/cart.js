const express = require('express');
const router = express.Router();
const Cartcontroller = require('../controllers/cartController');



router.get('/', Cartcontroller.getCart);
router.post('/', Cartcontroller.addToCart);
router.delete('/:cartItemId', Cartcontroller.removeFromCart);




module.exports = router;


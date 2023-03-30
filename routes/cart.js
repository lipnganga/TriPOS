const express = require('express');
const router = express.Router();
const Cartcontroller = require('../controllers/cartController');

router.get('/', Cartcontroller.getCart);
router.post('/', Cartcontroller.postCart);
router.delete('/', Cartcontroller.deleteCart);
router.post('/add', Cartcontroller.addToCart);






module.exports = router;


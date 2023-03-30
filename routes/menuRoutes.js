const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getMenu);
router.post('/', menuController.postMenu);
router.delete('/', menuController.deleteMenu);
router.get('/:id', menuController.getMenuItem);

module.exports = router;


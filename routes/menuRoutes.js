const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');


// Display the menu
router.get('/', menuController);



// Display the form to add a new menu item
router.get('/add', menuController);

// Add a new menu item
router.post('/', menuController);

// Display the form to edit a menu item
router.get('/:id/edit', menuController);

// Update a menu item
router.post('/:id', menuController);

// Delete a menu item
router.post('/:id/delete', menuController);

module.exports = router;

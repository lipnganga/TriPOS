const express = require('express');
const router = express.Router();

// import controllers
const home = require('../controllers/index');


router.get('/',home.home );
router.get('/about',home.about );






module.exports = router;
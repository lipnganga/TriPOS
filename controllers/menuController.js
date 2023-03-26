const mongoose = require('mongoose');
const MenuItem = require('../models/MenuItem');

exports.menu_get = (req, res) => {
  MenuItem.find()
    .then(items => {
      res.render('menu', { items });
    })
    .catch(err => console.log(err));
};




exports.menu_get = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.render('menu', { items });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};





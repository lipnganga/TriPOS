const mongoose = require('mongoose');
const MenuItem = require('../models/menu');


const getMenu = async (req, res) => {
    try {
        const menu = await MenuItem.find();
        res.status(200).json(menu);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const postMenu = async (req, res) => {
    const menu = req.body;
    const newMenuItem = new MenuItem(menu);
    try {
        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const deleteMenu = async (req, res) => {
    try {
        await MenuItem.deleteMany({});
        res.status(200).json({ message: 'All menu items deleted' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getMenuItem = async (req, res) => {
    try {
        const result = await MenuItem.findById(req.params.id);
        if (result) {
            res.status(200).json(result);
        }
        res
            .status(404)
            .setHeader('Content-Type', 'text/plain')
            .send('Menu item not found');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getMenu,
    postMenu,
    deleteMenu,
    getMenuItem,
};


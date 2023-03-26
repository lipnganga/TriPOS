const Product = require('../models/products');
const mongoose = require('mongoose');

const getProducts = async (req, res) => {
    const products = await Product.find();

    res.status(200).json({ products });
}

const postProduct = async (req, res) => {
    const { name, price, description, image } = req.body;

    const product = await Product.create({
        _id: new mongoose.Types.ObjectId(),
        name,
        price,
        description,
        image
    });

    res.status(201).json({ product });
}

const removeFromCart = async (req, res) => {
    const { cartItemId } = req.params;

    const cartItem = await cartmodel.findByIdAndDelete(cartItemId);

    if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json({ cartItem });
}

module.exports = {
    getProducts,
    postProduct,
    removeFromCart
}






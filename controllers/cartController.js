const cartmodel = require('../models/CartItem');
const mongoose = require('mongoose');


const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    const cartItem = await cartmodel.findOne({ productId: productId });

    if (cartItem) {
        cartItem.quantity = cartItem.quantity + quantity;
        await cartItem.save();
        return res.status(201).json({ cartItem });
    }

    const newCartItem = await cartmodel.create({
        _id: new mongoose.Types.ObjectId(),
        productId,
        quantity
    });

    res.status(201).json({ newCartItem });
};

const getCart = async (req, res) => {
    const cartItems = await cartmodel.find().populate('productId');

    res.status(200).json({ cartItems });
};

const removeFromCart = async (req, res) => {
    const { cartItemId } = req.params;

    const cartItem = await cartmodel.findByIdAndDelete(cartItemId);

    if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json({ cartItem });
};



module.exports = {
    addToCart,
    getCart,
    removeFromCart
};



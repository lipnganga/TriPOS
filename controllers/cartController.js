const Cart = require("../models/cart");
const mongoose = require("mongoose");

const getCart = async (req, res) => {
    try {
        const cart = await Cart.find();
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    }

const postCart = async (req, res) => {
    const cart = req.body;
    const newCartItem = new Cart(cart);
    try {
        await newCartItem.save();
        res.status(201).json(newCartItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const deleteCart = async (req, res) => {
    try {
        await Cart.deleteMany({});
        res.status(200).json({ message: 'All cart items deleted' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const addToCart = async (req, res) => {
    const { itemId, quantity } = req.body;
    const cartItem = await Cart.find();
    try {
        if (cartItem.length === 0) {
            const newCartItem = new Cart({
                _id: mongoose.Types.ObjectId(),
                item: itemId,
                quantity: quantity,
            });
            await newCartItem.save();
            res.status(201).json(newCartItem);
        } else {
            const item = cartItem[0].item;
            const itemQuantity = cartItem[0].quantity;
            if (item == itemId) {
                const updatedQuantity = itemQuantity + quantity;
                const updatedCartItem = await Cart.findByIdAndUpdate(
                    cartItem[0]._id,
                    { quantity: updatedQuantity },
                    { new: true }
                );
                res.status(200).json(updatedCartItem);
            } else {
                const newCartItem = new Cart({
                    _id: mongoose.Types.ObjectId(),
                    item: itemId,
                    quantity: quantity,
                });
                await newCartItem.save();
                res.status(201).json(newCartItem);
            }
        }
    }

    catch (error) {
        res.status(409).json({ message: error.message });
    }
}



module.exports = {
    getCart,
    postCart,
    deleteCart,
    addToCart,
}


const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// create cart schema
const cartSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },
  quantity: Number,
},
{
  total: Number,

}
);

// create cart model
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

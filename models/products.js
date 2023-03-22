const moongose = require('mongoose');
const Schema = moongose.Schema;

const ProductSchema = new Schema({
    item: {
        type: String,
        required: [true, 'Name field is required']
    },
    price: {  
        type: Number,
        required: [true, 'Price field is required']
    },

    quantity: {
        type: Number,
    }
});







const Product = moongose.model('product', ProductSchema);

module.exports = Product;
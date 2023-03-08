const moongose = require('mongoose');
const Schema = moongose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    price: {  
        type: Number,
        required: [true, 'Price field is required']
    },

    description: {
        type: String,
    }
});





const Product = moongose.model('product', ProductSchema);

module.exports = Product;
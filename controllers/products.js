const mongoose = require("mongoose");
const productsmodel = require("../models/products");





const AddProduct = (req, res) => {
    res.render("products");
}


const postProduct = (req, res) => {

    const { name, price, description } = req.body;


    console.log(req.body);

    const product = new productsmodel({
        name,
        price,
        description
    });

    product.save()
        .then(data => {
            res.json(data);
        }
        )
        .catch(err => {
            res.json(err);
        }
        )

        
    


}









module.exports = {
    AddProduct
    , postProduct
}
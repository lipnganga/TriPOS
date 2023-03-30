const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuschema = new mongoose.Schema({
  meals: [
    {
      _id: String,
      name: String,
      description: String,
      price: Number
    }
  ],
  beverages: [
    {
      _id: String,
      name: String,
      description: String,
      price: Number
    }
  ],
  snacks: [
    {
      _id: String,
      name: String,
      description: String,
      price: Number
    }
  ]
});


const menu=({
    meals: [
      {
        _id: "meal1",
        name: "Spaghetti Bolognese",
        description: "Classic Italian pasta dish with a meaty tomato sauce",
        price: 12.99
      },
      {
        _id: "meal2",
        name: "Grilled Salmon",
        description: "Fresh salmon fillet served with steamed vegetables",
        price: 16.99
      }
    ],
    beverages: [
      {
        _id: "bev1",
        name: "Coca-Cola",
        description: "Classic soft drink",
        price: 2.99
      },
      {
        _id: "bev2",
        name: "Fresh Orange Juice",
        description: "Made from freshly squeezed oranges",
        price: 3.99
      }
    ],
    snacks: [
      {
        _id: "snack1",
        name: "Chicken Wings",
        description: "Crispy fried chicken wings served with a spicy dipping sauce",
        price: 8.99
      },
      {
        _id: "snack2",
        name: "Nachos",
        description: "Tortilla chips topped with cheese, salsa, and guacamole",
        price: 6.99
      }
    ]
  });


  const Menu = mongoose.model("Menu", menuschema);




module.exports = Menu;

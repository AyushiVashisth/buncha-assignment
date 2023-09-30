const mongoose = require("mongoose"); // Import Mongoose for MongoDB interactions

// Define the cart schema
const cartSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, // cart's name (required)
    image: { type: String, required: true }, // cart's image (required)
    price: { type: Number, required: true }, // cart's email (required)
    weight: { type: String, required: true } // cart's password (required)
  },
  {
    versionKey: false // Disable the "__v" field in the document
  }
);

// Create a cart model based on the schema
const CartModel = mongoose.model("Carts", cartSchema);

module.exports = CartModel; // Export the cart model for use in other parts of the application

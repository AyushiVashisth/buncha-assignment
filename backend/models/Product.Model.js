const mongoose = require("mongoose"); // Import Mongoose for MongoDB interactions

// Define the product schema
const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, // product's name (required)
    image: { type: String, required: true }, // product's image (required)
    price: { type: Number, required: true }, // product's email (required)
    weight: { type: String, required: true } // product's password (required)
  },
  {
    versionKey: false // Disable the "__v" field in the document
  }
);

// Create a product model based on the schema
const ProductModel = mongoose.model("Products", productSchema);

module.exports = ProductModel; // Export the product model for use in other parts of the application

const express = require("express");
const CartModel = require("../models/Cart.Model"); // Import your cart model
const cartRoute = express.Router();

// Create a new cart item
cartRoute.post("/", async (req, res) => {
  try {
    const cartItem = new CartModel(req.body);
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all cart items
cartRoute.get("/", async (req, res) => {
  try {
    const cartItems = await CartModel.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single cart item by ID
cartRoute.get("/:cartItemId", async (req, res) => {
  try {
    const cartItem = await CartModel.findById(req.params.cartItemId);
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a cart item by ID
cartRoute.put("/:cartItemId", async (req, res) => {
  try {
    const cartItem = await CartModel.findByIdAndUpdate(
      req.params.cartItemId,
      req.body,
      { new: true }
    );
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a cart item by ID
cartRoute.delete("/:cartItemId", async (req, res) => {
  try {
    const cartItem = await CartModel.findByIdAndDelete(req.params.cartItemId);
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = cartRoute;

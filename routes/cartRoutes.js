const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// Get all cart items
router.get('/cart', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.status(200).json({ success: true, data: cartItems });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add an item to the cart
router.post('/cart', async (req, res) => {
  try {
    const { name, price } = req.body;

    const newItem = new CartItem({ name, price });
    await newItem.save();

    res.status(201).json({ success: true, message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update an item in the cart
router.put('/cart/:id', async (req, res) => {
  try {
    const { name, price } = req.body;
    const { id } = req.params;

    const updatedItem = await CartItem.findByIdAndUpdate(
      id,
      { name, price },
      { new: true }
    );

    if (!updatedItem) {
      return res
        .status(404)
        .json({ success: false, message: 'Item not found' });
    }

    res.status(200).json({ success: true, data: updatedItem });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete an item from the cart
router.delete('/cart/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await CartItem.findByIdAndRemove(id);

    if (!deletedItem) {
      return res
        .status(404)
        .json({ success: false, message: 'Item not found' });
    }

    res.status(200).json({ success: true, message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;

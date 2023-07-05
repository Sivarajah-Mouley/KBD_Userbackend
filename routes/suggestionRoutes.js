const express = require('express');
const router = express.Router();
const Suggestion = require('../models/Suggestion');

// Create a new suggestion
router.post('/suggestions', async (req, res) => {
  try {
    const { suggestion } = req.body;

    const newSuggestion = new Suggestion({ suggestion });
    await newSuggestion.save();

    res.status(201).json({ success: true, message: 'Suggestion created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;

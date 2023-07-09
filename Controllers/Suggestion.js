const Suggestions = require("../models/Suggestion");

const getSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestions.find({});
    res.json(suggestions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addSuggestion = async (req, res) => {
  try {
    if (!req.body.suggestion) {
      res.status(400).send({ message: "Suggestion Box Cannot Be Empty!" });
      return;
    }

    const suggestion = new Suggestions({
      suggestion: req.body.suggestion,
    });

    const savedSuggestion = await suggestion.save();
    res.status(201).send(savedSuggestion);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        err.message || "There is an error occurred while creating the suggestion.",
    });
  }
};

module.exports = {
  getSuggestions,
  addSuggestion,
};

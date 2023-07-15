const Suggestions = require("../models/suggestions");

const getSuggestions = async (req, res) => {
  try {
    const employee = await Suggestions.find({});
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const addSuggestions = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.suggest) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    const employee = new Suggestions({
        suggest: req.body.suggest,
    });
    employee
      .save(employee)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the employee.",
        });
      });
  } catch (err) {
    console.log("err");
  }
};

module.exports = {
  getSuggestions,
  addSuggestions,
};

const Employee = require("../models/notice");

const getNotice = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const addNotice = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.type) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    const employee = new Employee({
      audiance: req.body.audiance,
      type: req.body.type,
      details: req.body.details,
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
  getNotice,
  addNotice,
};

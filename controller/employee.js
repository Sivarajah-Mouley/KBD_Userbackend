const Employee = require("../models/employee");

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const addEmployee = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.email) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    const employee = new Employee({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      address: req.body.address,
      imageUrl: req.body.imageUrl,
      division : req.body.division,
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

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getEmployee,
  getEmployeeById,
  addEmployee,
};

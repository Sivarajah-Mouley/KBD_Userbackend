const Notice = require("../models/notice");
const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find({});
    res.json(notices);
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
    const notice = new Notice({
      audiance: req.body.audiance,
      type: req.body.type,
      details: req.body.details,
    });
    notice
      .save(notice)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the notice.",
        });
      });
  } catch (err) {
    console.log("err");
  }
};
module.exports = {
  getNotices,
  addNotice,
};
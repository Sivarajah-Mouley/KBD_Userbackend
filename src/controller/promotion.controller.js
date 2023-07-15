const Promotion = require("../models/promotion.model");

const getPromotion = async (req, res) => {
  try {
    const products = await Promotion.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const addPromotion = async (req, res) => {
  try {
    if (!req.body.company) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    const promotion = new Promotion({
      type: req.body.type,
      details: req.body.details,
      imageUrl: req.body.imageUrl,
      company: req.body.company,
    });
    promotion
      .save(promotion)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the promotion.",
        });
      });
  } catch (err) {
    console.log("err");
  }
};
const deletePromotion = (req, res) => {
  const id = req.params.id;
  Promotion.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete promotion with id=${id}. Maybe promotion was not found!`,
        });
      } else {
        res.send({
          message: "promotion was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete promotion with id=" + id,
      });
    });
};

const getPromotionById = async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);
    res.json(promotion);
    console.log(promotion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getPromotion,
  getPromotionById,
  addPromotion,
  deletePromotion,
};

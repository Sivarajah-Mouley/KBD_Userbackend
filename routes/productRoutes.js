const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/add", addProduct);
router.post("/update/:id", updateProduct);
router.post("/delete/:id", deleteProduct);

module.exports = router;

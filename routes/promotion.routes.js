const express = require("express");
const router = express.Router();
const {
  
    getPromotion,
    getPromotionById,
    addPromotion,
    deletePromotion,
} = require("../controller/promotion.controller");

router.get("/", getPromotion);
router.get("/:id", getPromotionById);
router.post("/add", addPromotion);
router.post("/delete/:id", deletePromotion);

module.exports = router;

const mongoose = require("mongoose");

const PromotionSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  imageUrl:{
    type: String,
    required: true,
  },
  company:{
    type: String,
    required: true,
  }
  
  
});

const Promotion = mongoose.model("promotion", PromotionSchema);

module.exports = Promotion;

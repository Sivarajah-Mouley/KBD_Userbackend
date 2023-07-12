const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  audiance:{
    type: String,
    required: true,
  }
  
  
});

const Product = mongoose.model("notice", productSchema);

module.exports = Product;

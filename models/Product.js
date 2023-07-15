const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Nprice: {
    type: Number,
    
  },
  countInStock: {
    type: Number,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;

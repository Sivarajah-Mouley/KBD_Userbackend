const mongoose = require("mongoose");

const suggestionsSchema = mongoose.Schema({
  suggest: {
    type: String,
    required: true,
  }
 
  
});

const Product = mongoose.model("suggestions", suggestionsSchema);

module.exports = Product;

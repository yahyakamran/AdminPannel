const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  picture: { type: Object },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

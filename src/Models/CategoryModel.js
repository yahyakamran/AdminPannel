const mongoose = require("mongoose");
const Product = require("./ProductModel");

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: { type: String, required: true },
  products: {
    product: { type: [Schema.Types.ObjectId], ref: "Product" },
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: { type: String, required: true },
  products: {
    product: [{ type: [Object.Types.ObjectId], ref: "Product" }],
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;

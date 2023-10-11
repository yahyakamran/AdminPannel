const mongoose = require("mongoose");
const category = require("./CategoryModel");

const UserModal = new mongoose.Schema({
  Name: String,
  Email: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  categories: {
    category: { type: [Schema.Types.ObjectId], ref: "category" },
  },
  products: {
    product: { type: [Schema.Types.ObjectId], ref: "Product" },
  },
});

const User = mongoose.model("User", UserModal);

module.exports(User);

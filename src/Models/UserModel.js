const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModal = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  categories: {
    category: { type: [Schema.Types.ObjectId], ref: "Category" },
  },
  products: {
    product: { type: [Schema.Types.ObjectId], ref: "Product" },
  },
});

const User = mongoose.model("User", UserModal);

module.exports = User;

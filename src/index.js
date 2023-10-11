const express = require("express");
const connectDB = require("./Config/db");
const dotenv = require("dotenv");

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

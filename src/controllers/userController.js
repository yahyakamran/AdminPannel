const express = require("express");
const expressAsyncHandler = require("express-async-handler");

const createUser = expressAsyncHandler(async (req, res) => {
  res.send("Use is created");
});
const fetchUser = expressAsyncHandler(async (req, res) => {
  res.send("Use is fetched");
});

module.exports = { createUser, fetchUser };

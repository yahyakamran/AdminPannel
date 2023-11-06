const express = require("express");
const userModel = require("../Models/UserModel");
const expressAsyncHandler = require("express-async-handler");

const createUser = expressAsyncHandler(async (req, res) => {
  const { Name , Email , Password } = req.body;
  if(!Name|| !Email || !Password){
    res.status(400);
    throw new Error("Please fill all fields")
  }

  const userExist = await userModel.find({Email})
  if(userExist){    
    res.status(300);
    throw new Error("User already exits")
  }

  const user = new userModel({
    Name , Email , Password
  });
  try {
    await user.save().then(()=>{
      res.send(user)  
    }
    ).catch(()=>{
      res.send(400);
      throw new Error("User is not been saved");
    }
    )
  } catch (error) {
    res.status(400).send(error);
  }
});

const fetchAllUser = expressAsyncHandler(async (req, res) => {
  const users = await userModel.find({});
  if(!users){
    return;
  } 
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

const fetchOneUser = expressAsyncHandler(async(req,res)=>{
  const {Email} = req.body;
  if(!Email){
    res.status(400);
    throw new Error("Please enter email");
  }

  try {
    const user = await userModel.find({Email});
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }


})

module.exports = { createUser, fetchAllUser ,fetchOneUser };

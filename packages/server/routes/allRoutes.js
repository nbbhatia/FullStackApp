const express = require("express");
const router = new express.Router();
const UserModel = require("../models/signUp.model");
router.post("/createUser", async (req, res) => {
  try {
    let data = new UserModel(req.body);
    console.log("data", data);
    const saveData = await data.save();
    res.send(saveData);
  } catch (err) {
    console.log("err", err);
  }
});
router.get("/getData", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const resultById = await UserModel.find();
    res.send(resultById);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

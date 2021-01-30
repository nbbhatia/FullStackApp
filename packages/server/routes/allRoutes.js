const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const UserModel = require("../models/signUp.model");
router.post("/createUser", async (req, res) => {
  try {
    let data = new UserModel(req.body);
    console.log("data", req.body);
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

// const securePassword = async (password) => {
//   const secpas = await bcrypt.hash(password, 10);
//   console.log("secpas", secpas);
//   const comparepass = await bcrypt.compare(password, secpas);
//   console.log("comparepass", comparepass);
// };
// securePassword("nidhi");
router.post("/login", async (req, res) => {
  try {
    const loginemail = req.body.email;
    const password = req.body.Password;
    const findUser = await UserModel.findOne({ email: loginemail });
    const isMatch = await bcrypt.compare(password, findUser.Password);

    if (isMatch) {
      res.status(200).send({
        message: "login succesful",
        status: 200,
      });
    } else {
      res.status(401).send({
        message: "user not found",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
});

module.exports = router;

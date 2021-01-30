const mongoose = require("mongoose");
const validation = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validation.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: { type: Number },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Password: {
    type: { String },
    required: true,
  },
  ConfirmPassword: {
    type: { String, required: true },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
// generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    const newToken = jwt.sign(
      {
        _id: this._id.toString(),
      },
      "sassasasasasasasasasasasasasasasasasasaassa"
    );
    this.tokens = this.tokens.concat({ token: newToken });
    await this.save();

    return newToken;
  } catch (err) {
    console.log("err", err);
  }
};

// data save krne se pehle pre mtlb -> password hide kr do
userSchema.pre("save", async function (next) {
  if (this.isModified("Password")) {
    this.Password = await bcrypt.hash(this.Password, 10);
    this.ConfirmPassword = await bcrypt.hash(this.ConfirmPassword, 10);
  }

  next();
});
const userSchemaModel = new mongoose.model("Usercollection", userSchema);
module.exports = userSchemaModel;

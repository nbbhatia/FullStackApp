const mongoose = require("mongoose");
const validation = require("validator");
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
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Password: {
    type: {
      type: String,
      // required: true,
    },
  },
  ConfirmPassword: {
    type: {
      type: String,
      // required: true,
    },
  },
});

const userSchemaModel = new mongoose.model("UserRecord", userSchema);
module.exports = userSchemaModel;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/REGISTRATIONS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected with database");
  })
  .catch((err) => {
    console.log("err", err);
  });

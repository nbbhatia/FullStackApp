const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const db = require("./database/db.connection");
const UserRouter = require("./routes/allRoutes");
var bodyParser = require("body-parser");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(UserRouter);
app.listen(port, () => {
  try {
    console.log("connection established", port);
  } catch (err) {
    console.log(err);
  }
});

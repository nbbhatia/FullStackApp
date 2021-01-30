const express = require("express");
const app = express();
const cors = require("cors");
const port = 8084;
const db = require("./database/db.connection");
const UserRouter = require("./routes/allRoutes");
var bodyParser = require("body-parser");

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

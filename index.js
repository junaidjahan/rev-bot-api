const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./router/users");
const auth = require("./router/auth");
const mobiles = require("./router/mobiles");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/rev-bot")
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/mobiles", mobiles);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

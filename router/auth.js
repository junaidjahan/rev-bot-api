const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("Joi");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ Email: req.body.Email });
    if (!user) return res.status(400).send("Invalid email or password");
    validPassword = await bcrypt.compare(req.body.Password, user.Password);
    if (!validPassword)
      return res.status(400).send("Invalid email or password");
    const token = jwt.sign({ _id: user._id }, "jwtToken");
    res.send(token);
  } catch (err) {
    console.log(err);
  }
});

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(25).required().email(),
    password: Joi.string().min(5).max(25).required().email(),
  };

  return Joi.valid(req, schema);
}

module.exports = router;

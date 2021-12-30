const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const mongoose = require("mongoose");
const express = require("express");
const Joi = require("Joi");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ Email: req.body.Email });
    if (user) return res.status(400).send("User already exist");
    console.log("body:", req.body);
    user = new User(
      _.pick(req.body, [
        "FirstName",
        "LastName",
        "Email",
        "PhoneNumber",
        "Country",
        "Password",
      ])
    );

    const salt = await bcrypt.genSalt(10);
    user.Password = await bcrypt.hash(user.Password, salt);
    await user.save();
    res.send(
      _.pick(user, ["FirstName", "LastName", "Email", "PhoneNumber", "Country"])
    );
  } catch (err) {
    console.log(err);
  }
});

function validate(req) {
  const schema = {
    Email: Joi.string().min(5).max(25).required().email(),
    Password: Joi.string().min(5).max(25).required(),
    FirstName: Joi.string().min(5).max(25).required(),
    LastName: Joi.string().min(5).max(25).required(),
    PhoneNumber: Joi.string().min(5).max(25).required(),
    Country: Joi.string().min(5).max(25).required(),
  };

  return Joi.valid(req, schema);
}

module.exports = router;

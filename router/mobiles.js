const { Mobile } = require("../models/mobile");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const mongoose = require("mongoose");
const express = require("express");
const Joi = require("Joi");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let mobile = await Mobile.find();
    res.send(mobile);
  } catch (err) {
    console.log(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    let mobile = await Mobile.findById(req.params.id);
    res.send(mobile);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

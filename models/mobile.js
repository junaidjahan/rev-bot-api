const mongoose = require("mongoose");

const Mobile = mongoose.model(
  "Mobiles",
  new mongoose.Schema({
    Name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    Price: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    Description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    GoodPoints: {
      type: Array,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    BadPoints: {
      type: Array,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    Specifications: {
      type: Array,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    ImageUrl: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
  })
);

module.exports.Mobile = Mobile;

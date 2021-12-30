const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    FirstName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    LastName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    Email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    PhoneNumber: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    Country: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    Password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
  })
);

module.exports.User = User;

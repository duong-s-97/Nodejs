let mongoose = require("mongoose");

let users = new mongoose.Schema({
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("users", users);

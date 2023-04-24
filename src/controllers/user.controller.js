const Users = require("../models/user");

exports.get = function (req, res) {
    res.render("users/home")
};

exports.createForm = (req, res) => {
  res.render("users/create");
};

exports.save = (req, res) => {
  let s = req.body;
  let newUser = new Users(s);
  newUser
    .save()
    .then((rs) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err);
    });
};